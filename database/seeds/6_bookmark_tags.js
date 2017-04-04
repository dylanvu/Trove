'use strict';

/* eslint-disable camelcase, no-console */

exports.seed = (knex) => {
  return knex('bookmarks_tags').del()
    .then(() => {
      return knex('bookmarks_tags').insert([{
        id: 1,
        bookmark_id: 1,
        tag_id: 1
      }, {
        id: 2,
        bookmark_id: 2,
        tag_id: 2
      }, {
        id: 3,
        bookmark_id: 3,
        tag_id: 3
      }, {
        id: 4,
        bookmark_id: 4,
        tag_id: 4
      }, {
        id: 5,
        bookmark_id: 5,
        tag_id: 5
      }, {
        id: 6,
        bookmark_id: 6,
        tag_id: 6
      }, {
        id: 7,
        bookmark_id: 7,
        tag_id: 7
      }, {
        id: 8,
        bookmark_id: 8,
        tag_id: 8
      }, {
        id: 9,
        bookmark_id: 9,
        tag_id: 9
      }, {
        id: 10,
        bookmark_id: 10,
        tag_id: 10
      }, {
        id: 11,
        bookmark_id: 11,
        tag_id: 11
      }, {
        id: 12,
        bookmark_id: 12,
        tag_id: 12
      }, {
        id: 13,
        bookmark_id: 13,
        tag_id: 13
      }, {
        id: 14,
        bookmark_id: 14,
        tag_id: 14
      }, {
        id: 15,
        bookmark_id: 1,
        tag_id: 15
      }, {
        id: 16,
        bookmark_id: 2,
        tag_id: 16
      }, {
        id: 17,
        bookmark_id: 3,
        tag_id: 17
      }, {
        id: 18,
        bookmark_id: 4,
        tag_id: 18
      }, {
        id: 19,
        bookmark_id: 5,
        tag_id: 19
      }, {
        id: 20,
        bookmark_id: 6,
        tag_id: 20
      }, {
        id: 21,
        bookmark_id: 7,
        tag_id: 21
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('bookmarks_tags_id_seq', (SELECT MAX(id) FROM bookmarks_tags));"
      );
    })
    .catch((err) => {
      console.error(err);
    });
};
