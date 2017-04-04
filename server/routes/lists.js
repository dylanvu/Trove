const authorize = require('../helpers/authorize');
const { camelizeKeys } = require('humps');
const express = require('express');
const knex = require('../knex');

const router = express.Router(); // eslint-disable-line new-cap

router.get('/lists', authorize, (req, res, next) => {
  const { userId } = req.claim;

  // TODO: what happens when a user shares a list?

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

      res.send(lists);
    })
    .catch((err) => {
      next(err);
    });
});

// TODO: Use promise.all?
// router.post('/list', authorize, (req, res, next) => {
//   const { name, shared, emails } = req.body;
//
//
// })

module.exports = router;
