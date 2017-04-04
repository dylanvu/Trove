const axios = require('axios');
const { camelizeKeys, decamelizeKeys } = require('humps');
const cheerio = require('cheerio');
const express = require('express');
const url = require('url');
const authorize = require('../helpers/authorize');
const knex = require('../knex');

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
      const $ = cheerio.load(response.data);
      const bookmark = {};

      bookmark.listId = listId;

      if (!$('meta[property="og:title"]').attr('content')) {
        bookmark.title = $('title').text();
      }
      else {
        bookmark.title = $('meta[property="og:title"]').attr('content');
      };

      bookmark.urlHostname = url.parse(bookmarkUrl, true, true).hostname;

      if ($('meta[property="og:url"]').attr('content')) {
        bookmark.url = $('meta[property="og:url"]').attr('content');
      }
      else {
        bookmark.url = bookmarkUrl;
      }

      if ($('meta[property="og:image"]').attr('content')) {
        bookmark.imgUrl = $('meta[property="og:image"]').attr('content');
      }

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
