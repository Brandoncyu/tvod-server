const table = 'series'
exports.up = function(knex, Promise) {
  table.increments()
  table.integer('tv_id').notNullable()
  table.boolean('watched')
  table.boolean('favorite')
  table.timestamps(true, true)
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(table)
};
