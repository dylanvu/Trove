const axios = require('axios');
const { camelizeKeys, decamelizeKeys } = require('humps');
const express = require('express');
const ev = require('express-validation');
const knex = require('../knex');
const authorize = require('../helpers/authorize');
const parseBookmark = require('../helpers/parseBookmark');
const validations = require('../validations/bookmark');

const router = express.Router(); // eslint-disable-line new-cap

router.get('/bookmarks/:listId', authorize, (req, res, next) => {
  const { listId } = req.params;

  knex.select('*')
    .from('bookmarks')
    .where('list_id', listId)
    .orderBy('created_at', 'desc')
    .then((bookmarks) => {
      res.send(camelizeKeys(bookmarks));
    })
    .catch((err) => {
      next(err);
    });
});

// TODO: Re-add authorize. removed for presentation
router.post('/bookmarks', ev(validations.bookmark), (req, res, next) => {
  let { url, listId } = req.body;

  // TODO: Figure out the best way to handle duplicate bookmark entries.
  // 1. Simple approach: unique per lists
  // 2. Unique per shared list + unique across default and privatelists?

  if (!url.match(/^[a-zA-Z]+:\/\//)) {
    url = `http://${url}`;
  }

  axios.get(url)
    .then((response) => {
      const bookmark = parseBookmark(response.data, url, listId);

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
