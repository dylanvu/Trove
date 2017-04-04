/* eslint-disable camelcase, no-console */
'use strict';

exports.seed = (knex) => {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id: 1,
        first_name: 'Sushi',
        last_name: 'Sushi',
        email: 'sushi@sushi.com',
        hashed_password: '$2a$12$HdwBMbQjPNUfwfHqBV3jbO9oK5JIXM50J8u.ho3wC9q5I5vYj7/1O',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 2,
        first_name: 'Ramen',
        last_name: 'Ramen',
        email: 'ramen@ramen.com',
        hashed_password: '$2a$12$HdwBMbQjPNUfwfHqBV3jbO9oK5JIXM50J8u.ho3wC9q5I5vYj7/1O',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 3,
        first_name: 'Poke',
        last_name: 'Poke',
        email: 'poke@poke.com',
        hashed_password: '$2a$12$HdwBMbQjPNUfwfHqBV3jbO9oK5JIXM50J8u.ho3wC9q5I5vYj7/1O',
        created_at: new Date(),
        updated_at: new Date()
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    })
    .catch((err) => {
      console.error(err);
    });
};
