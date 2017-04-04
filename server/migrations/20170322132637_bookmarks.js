/* eslint-disable linebreak-style */

exports.up = (knex) => {
  return knex.schema.createTable('bookmarks', (table) => {
    table.increments();
    table.integer('list_id')
      .references('id')
      .inTable('lists')
      .notNullable()
      .onDelete('CASCADE')
      .index();
    table.string('title').notNullable();
    table.string('desc').notNullable().defaultTo('No description');
    table.string('url').notNullable();
    table.string('img_url').notNullable()
      .defaultTo('https://placehold.it/500x500');
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('bookmarks');
};
