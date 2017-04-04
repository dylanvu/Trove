/* eslint-disable linebreak-style */

exports.up = (knex) => {
  return knex.schema.createTable('users_lists', (table) => {
    table.increments();
    table.integer('user_id')
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE')
      .index();
    table.integer('list_id')
      .references('id')
      .inTable('lists')
      .notNullable()
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('users_lists');
};
