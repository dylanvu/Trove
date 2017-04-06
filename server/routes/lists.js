const authorize = require('../helpers/authorize');
const { camelizeKeys } = require('humps');
const express = require('express');
const knex = require('../knex');

const router = express.Router(); // eslint-disable-line new-cap

router.get('/lists', authorize, (req, res, next) => {
  const { userId } = req.claim;
  const lists = {
    defaultList: {},
    privateLists: [],
    sharedLists: []
  };

  /* Get default list */
  knex.select('*')
    .from('lists')
    .where('owner_id', userId)
    .where('default', true)
    .first()
    .then((defaultList) => {
      lists.defaultList = camelizeKeys(defaultList);

      /* Get private lists */
      return knex.select('lists.*')
        .from('lists')
        .innerJoin('users_lists', 'lists.id', 'users_lists.list_id')
        .where('users_lists.user_id', userId)
        .where('lists.shared', false)
        .whereNot('lists.id', lists.defaultList.id)
        .orderBy('lists.name', 'ASC');
    })
    .then((privateLists) => {
      lists.privateLists = camelizeKeys(privateLists);

      /* Get shared lists */
      return knex.select('lists.*')
        .from('lists')
        .innerJoin('users_lists', 'lists.id', 'users_lists.list_id')
        .where('users_lists.user_id', userId)
        .where('lists.shared', true)
        .whereNot('lists.id', lists.defaultList.id)
        .orderBy('lists.name', 'ASC');
    })
    .then((sharedLists) => {
      lists.sharedLists = camelizeKeys(sharedLists);

      // get info of users this list has been shared to
      const toResolve = lists.sharedLists.map((list) => {
        return knex.select('first_name', 'last_name', 'email')
          .from('users')
          .innerJoin('users_lists', 'users.id', 'users_lists.user_id')
          .where('users_lists.list_id', list.id)
          .whereNot('users.id', userId)
          .orderBy('first_name', 'ASC')
      });

      return Promise.all(toResolve);
    })
    .then((usersSharedTo) => {
      for (let i = 0; i < usersSharedTo.length; i++) {
        lists.sharedLists[i].sharedTo = usersSharedTo[i];
      }

      res.send(lists);
    })
    .catch((err) => {
      next(err);
    });
});

// router.post('/list', authorize, (req, res, next) => {
//   const { name, shared, emails } = req.body;
//
//
// })

module.exports = router;
