exports.up = (knex, Promise) =>
  Promise.all([
    knex.schema.createTable('type', (table) => {
      table.increments('id').primary();
      table.string('soort');
      table.string('type');
      table.integer('grootte');
      table.integer('item_id').unsigned();
      table
        .foreign('item_id')
        .references('id')
        .inTable('item');
    }),
  ]);

exports.down = knex => knex.schema.dropTable('type');
