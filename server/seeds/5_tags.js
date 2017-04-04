/* eslint-disable camelcase, no-console */

exports.seed = (knex) => {
  return knex('tags').del()
    .then(() => {
      return knex('tags').insert([{
        id: 1,
        tag: 'responsive'
      }, {
        id: 2,
        tag: 'methodology'
      }, {
        id: 3,
        tag: 'data-warehouse'
      }, {
        id: 4,
        tag: 'flexibility'
      }, {
        id: 5,
        tag: 'stable'
      }, {
        id: 6,
        tag: 'matrix'
      }, {
        id: 7,
        tag: 'Multi-layered'
      }, {
        id: 8,
        tag: 'Robust'
      }, {
        id: 9,
        tag: 'Persevering'
      }, {
        id: 10,
        tag: 'throughput'
      }, {
        id: 11,
        tag: 'core'
      }, {
        id: 12,
        tag: 'asynchronous'
      }, {
        id: 13,
        tag: 'leverage'
      }, {
        id: 14,
        tag: 'Visionary'
      }, {
        id: 15,
        tag: 'client-driven'
      }, {
        id: 16,
        tag: '24 hour'
      }, {
        id: 17,
        tag: 'Focused'
      }, {
        id: 18,
        tag: 'Synchronised'
      }, {
        id: 19,
        tag: 'well-modulated'
      }, {
        id: 20,
        tag: 'intermediate'
      }, {
        id: 21,
        tag: 'Persevering'
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('tags_id_seq', (SELECT MAX(id) FROM tags));"
      );
    })
    .catch((err) => {
      console.error(err);
    });
};
