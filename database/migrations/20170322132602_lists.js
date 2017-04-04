/* eslint-disable linebreak-style */
'use strict';

exports.up = (knex) => {
  return knex.schema.createTable('lists', (table) => {
    table.increments();
    table.integer('owner_id')
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE')
      .index();
    table.string('name').notNullable();
    table.boolean('default').notNullable().defaultTo(false);
    table.boolean('shared').notNullable().defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('lists');
};
