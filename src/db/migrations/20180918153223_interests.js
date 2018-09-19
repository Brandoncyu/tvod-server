const table = 'interests'
exports.up = knex => {
    return knex.schema.createTable(table, table => {
      table.increments()
      table.string('name').notNullable()
      table.timestamps(true, true)
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(table)
};
