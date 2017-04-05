/* eslint-disable camelcase, no-console */

exports.seed = (knex) => {
  return knex('lists').del()
    .then(() => {
      return knex('lists').insert([{
        id: 1,
        owner_id: 1,
        name: 'Default',
        default: true,
        shared: false,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 2,
        owner_id: 2,
        name: 'Default',
        default: true,
        shared: false,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 3,
        owner_id: 3,
        name: 'Default',
        default: true,
        shared: false,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 4,
        owner_id: 1,
        name: 'Food',
        default: false,
        shared: true,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 5,
        owner_id: 1,
        name: 'Code',
        default: false,
        shared: false,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 6,
        owner_id: 1,
        name: 'Travel',
        default: false,
        shared: true,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 7,
        owner_id: 2,
        name: 'Food',
        default: false,
        shared: true,
        created_at: new Date(),
        updated_at: new Date()
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('lists_id_seq', (SELECT MAX(id) FROM lists));"
      );
    })
    .catch((err) => {
      console.error(err);
    });
};
