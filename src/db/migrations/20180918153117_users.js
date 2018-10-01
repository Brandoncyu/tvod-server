const table = 'users'
exports.up = knex => {
    return knex.schema.createTable(table, table => {
        table.increments()
        table.string('firstname').notNullable()
        table.string('lastname').notNullable()
        table.string('username').notNullable().unique()
        table.string('email').notNullable().unique()
        table.string('image').notNullable()
        table.text('password').notNullable()
        table.string('aboutme').notNullable()
        table.timestamps(true, true)
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(table)
};
