const table = 'episodes'
exports.up = knex => {
    return knex.schema.createTable(table, table => {
        table.increments()
        table.integer('user_id').notNullable().defaultsTo(0)
        table.integer('tv_id').notNullable()
        table.integer('ep_id').notNullable()
        table.integer('season_no').notNullable()
        table.integer('ep_no').notNullable()
        table.boolean('watched')
        table.string('comments')
        table.integer('rating')
        table.foreign('user_id').references('users.id').onDelete('CASCADE')
        table.timestamps(true, true)
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(table)
};
