const table = 'users'
exports.up = function(knex, Promise) {
  table.increments()
  table.string('first_name').notNullable()
  table.string('last_name').notNullable()
  table.string('username').notNullable()
  table.string('email').notNullable().unique()
  table.text('password').notNullable()
  table.string('about_me').notNullable()
  table.timestamps(true, true)
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(table)
};
