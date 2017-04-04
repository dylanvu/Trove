const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const { camelizeKeys, decamelizeKeys } = require('humps');
const ev = require('express-validation');
const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const validations = require('../validations/users');

const router = express.Router(); // eslint-disable-line new-cap

router.get('/token', (req, res, next) => {
  jwt.verify(req.cookies.token, process.env.JWT_KEY, (error, payload) => {
    if (error) {
      next(boom.create(403, 'Not logged in.'));
    }

    knex.select('*')
      .from('users')
      .where('users.id', payload.userId)
      .first()
      .then((userRow) => {
        const user = camelizeKeys(userRow);

        delete user.hashedPassword;
        res.send(user);
      })
      .catch((err) => {
        next(err);
      });
  });
});

router.post('/register', ev(validations.register), (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    password
  } = req.body;

  let user;

  knex.select('*')
    .from('users')
    .where('email', email)
    .first()
    .then((existingUser) => {
      if (existingUser) {
        throw boom.create(400, 'Email is already registered.');
      }

      return bcrypt.hash(password, 12);
    })
    .then((hashedPassword) => {
      user = { firstName, lastName, email, hashedPassword };

      return knex('users')
        .insert(decamelizeKeys(user), '*');
    })
    .then((insertedUser) => {
      user = camelizeKeys(insertedUser[0]);

      const defaultList = {
        ownerId: user.id,
        name: 'Default',
        default: true
      };

      return knex('lists')
        .insert(decamelizeKeys(defaultList), '*');
    })
    .then((insertedDefaultList) => {
      const list = camelizeKeys(insertedDefaultList[0]);

      const userlist = {
        userId: user.id,
        listId: list.id
      };

      return knex('users_lists')
        .insert(decamelizeKeys(userlist));
    })
    .then(() => {
      delete user.hashedPassword;
      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/login', ev(validations.login), (req, res, next) => {
  const { email, password } = req.body;
  let user;

  knex.select('*')
    .from('users')
    .where('email', email)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(400, 'Bad email or password.');
      }

      user = camelizeKeys(row);

      return bcrypt.compare(password, user.hashedPassword);
    })
    .then(() => {
      const claim = { userId: user.id };
      const token = jwt.sign(claim, process.env.JWT_KEY, {
        expiresIn: '365 days'
      });

      res.cookie('token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
        secure: router.get('env') === 'production'
      });

      delete user.hashedPassword;
      res.send(user);
    })
    .catch(bcrypt.MISMATCH_ERROR, () => {
      throw boom.create(400, 'Bad email or password');
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/logout', (req, res) => {
  res.clearCookie('token');
  res.end();
});

module.exports = router;
