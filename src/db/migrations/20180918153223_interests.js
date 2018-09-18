const table = 'interests'
exports.up = function(knex, Promise) {
  table.increments()
  table.string('name').notNullable()
  table.timestamps(true, true)
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(table)
};
