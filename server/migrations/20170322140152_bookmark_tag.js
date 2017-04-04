/* eslint-disable linebreak-style */

exports.up = (knex) => {
  return knex.schema.createTable('bookmarks_tags', (table) => {
    table.increments();
    table.integer('bookmark_id')
      .references('id')
      .inTable('bookmarks')
      .notNullable()
      .onDelete('CASCADE')
      .index();
    table.integer('tag_id')
      .references('id')
      .inTable('tags')
      .notNullable()
      .onDelete('CASCADE')
      .index();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('bookmarks_tags');
};
