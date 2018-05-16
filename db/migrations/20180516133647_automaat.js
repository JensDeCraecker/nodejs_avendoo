exports.up = (knex, Promise) =>
  Promise.all([
    knex.schema.createTable('automaat', (table) => {
      table.increments('id').primary();
      table.string('adres');
      table.string('omschrijving');
      table.string('status');
      table.string('coordinaten');
      table.date('laatsteLevering');
      table.date('volgendeLevering');
      table.timestamps(false, true);
    }),
  ]);

exports.down = knex => knex.schema.dropTable('automaat');
