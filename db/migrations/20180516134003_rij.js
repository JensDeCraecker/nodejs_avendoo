exports.up = (knex, Promise) =>
  Promise.all([
    knex.schema.createTable('rij', (table) => {
      table.increments('id').primary();
      table.string('status');
      table.integer('plaatsInAutomaat');
      table.integer('maxAantalItems');
      table.integer('maxGroottePerItem');
      table.integer('automaat_id').unsigned();
      table
        .foreign('automaat_id')
        .references('id')
        .inTable('automaat');
    }),
  ]);

exports.down = knex => knex.schema.dropTable('rij');
