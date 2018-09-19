const table = 'series'
exports.up = knex => {
    return knex.schema.createTable(table, table => {
        table.increments()
        table.integer('user_id').notNullable().defaultsTo(0)
        table.integer('tv_id').notNullable()
        table.boolean('watched')
        table.boolean('favorite')
        table.foreign('user_id').references('users.id').onDelete('CASCADE')
        table.timestamps(true, true)
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(table)
};
