/* eslint-disable camelcase, no-console */

exports.seed = (knex) => {
  return knex('users_lists').del()
    .then(() => {
      return knex('users_lists').insert([{
        id: 1,
        user_id: 1,
        list_id: 1
      }, {
        id: 2,
        user_id: 2,
        list_id: 2
      }, {
        id: 3,
        user_id: 3,
        list_id: 3
      }, {
        id: 4,
        user_id: 1,
        list_id: 4
      }, {
        id: 5,
        user_id: 2,
        list_id: 4
      }, {
        id: 6,
        user_id: 1,
        list_id: 5
      }, {
        id: 7,
        user_id: 1,
        list_id: 6
      }, {
        id: 8,
        user_id: 2,
        list_id: 6
      }, {
        id: 9,
        user_id: 3,
        list_id: 6
      }, {
        id: 10,
        user_id: 2,
        list_id: 7
      }, {
        id: 11,
        user_id: 3,
        list_id: 7
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_lists_id_seq', (SELECT MAX(id) FROM users_lists));"
      );
    })
    .catch((err) => {
      console.error(err);
    });
};
