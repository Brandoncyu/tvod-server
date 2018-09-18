const table = 'users_follwing'
exports.up = function(knex, Promise) {
  table.increments()
  table.integer('users_id').notNullable().defaultsTo(0)
  table.integer('follow_id').notNullable().defaultsTo(0)
  table.foreign('users_id').references('users.id').onDelete('CASCADE')
  table.foreign('follow_id').references('users.id').onDelete('CASCADE')
  table.timestamps(true, true)
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(table)
};
