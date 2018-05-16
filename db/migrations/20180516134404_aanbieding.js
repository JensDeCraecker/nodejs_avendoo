exports.up = (knex, Promise) =>
  Promise.all([
    knex.schema.createTable('aanbieding', (table) => {
      table.increments('id').primary();
      table.string('actie');
      table.date('geldigTot');
      table.timestamps(false, true);
      table.integer('automaat_id').unsigned();
      table
        .foreign('automaat_id')
        .references('id')
        .inTable('automaat');
    }),
  ]);

exports.down = knex => knex.schema.dropTable('aanbieding');
