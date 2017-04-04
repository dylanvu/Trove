/* eslint-disable linebreak-style */

exports.up = (knex) => {
  return knex.schema.createTable('tags', (table) => {
    table.increments();
    table.string('tag').notNullable();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('tags');
};
