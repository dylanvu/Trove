const authorize = require('../helpers/authorize');
const { camelizeKeys } = require('humps');
const express = require('express');
const knex = require('../../database/knex');

const router = express.Router(); // eslint-disable-line new-cap

router.get('/bookmarks/:listId', authorize, (req, res, next) => {
  const { listId } = req.params;

  knex.select('*')
    .from('bookmarks')
    .where('list_id', listId)
    .then((bookmarks) => {
      res.send(camelizeKeys(bookmarks));
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
