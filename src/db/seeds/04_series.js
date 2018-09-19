const table = 'series'
exports.seed = knex => {
  return knex(table).insert([{
      id: 1,
      user_id: 1,
      tv_id: 618,
      watched: true,
      favorite: true
    }, {
      id: 2,
      user_id: 1,
      tv_id: 82,
      watched: true,
      favorite: true
    }, {
      id: 3,
      user_id: 1,
      tv_id: 304,
      watched: true,
      favorite: true
    }, {
      id: 4,
      user_id: 1,
      tv_id: 347,
      watched: true,
      favorite: true
    }, {
      id: 5,
      user_id: 1,
      tv_id: 123,
      watched: true,
      favorite: true
    }
  ]).then(() => {
    return knex.raw(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`)
  })
}
