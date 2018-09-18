const table = 'episodes'
exports.up = function(knex, Promise) {
  table.increments()
  table.integer('tv_id').notNullable()
  table.integer('ep_id').notNullable()
  table.integer('season_no').notNullable()
  table.integer('ep_no').notNullable()
  table.boolean('watched')
  table.string('comments')
  table.integer('rating')
  table.timestamps(true, true)
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(table)
};
