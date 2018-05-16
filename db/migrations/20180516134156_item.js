exports.up = (knex, Promise) =>
  Promise.all([
    knex.schema.createTable('item', (table) => {
      table.increments('id').primary();
      table.string('prijs');
      table.date('vervaldatum');
      table.timestamps(false, true);
      table.integer('rij_id').unsigned();
      table
        .foreign('rij_id')
        .references('id')
        .inTable('rij');
    }),
  ]);

exports.down = knex => knex.schema.dropTable('item');
