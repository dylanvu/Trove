const axios = require('axios');
const { camelizeKeys, decamelizeKeys } = require('humps');
const express = require('express');
const knex = require('../knex');
const authorize = require('../helpers/authorize');
const parseBookmark = require('../helpers/parseBookmark');

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

router.post('/bookmarks', (req, res, next) => {
  const { bookmarkUrl, listId } = req.body;
  axios.get(bookmarkUrl)
    .then((response) => {
      const bookmark = parseBookmark(response.data, bookmarkUrl, listId);

      return knex('bookmarks')
        .insert(decamelizeKeys(bookmark), '*');
    })
    .then((insertedBookmark) => {
      res.send(insertedBookmark);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
