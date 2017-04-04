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
    table.string('url').notNullable();
    table.string('url_hostname').notNullable();
    table.string('img_url').notNullable()
      .defaultTo('https://cdn4.iconfinder.com/data/icons/adiante-apps-app-templates-incos-in-grey/512/app_type_newspaper_512px_GREY.png');
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('bookmarks');
};
