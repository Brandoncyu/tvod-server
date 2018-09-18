const table = 'users_interests'
exports.up = function(knex, Promise) {
  table.increments()
  table.integer('users_id').notNullable().defaultsTo(0)
  table.integer('interest_id').notNullable().defaultsTo(0)
  table.foreign('users_id').references('users.id').onDelete('CASCADE')
  table.foreign('interest_id').references('interests.id').onDelete('CASCADE')
  table.timestamps(true, true)
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(table)
};
