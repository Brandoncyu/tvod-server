const table = 'series'
exports.seed = knex => {
  return knex(table).insert([{
      id: 1,
      user_id: 1,
      tv_id: 618,
      tv_name: 'Better Call Saul',
      watched: true,
      favorite: true
    }, {
      id: 2,
      user_id: 1,
      tv_id: 82,
      tv_name: 'Game of Thrones',
      watched: true,
      favorite: true
    }, {
      id: 3,
      user_id: 1,
      tv_id: 304,
      tv_name: 'The Venture Bros.',
      watched: true,
      favorite: true
    }, {
      id: 4,
      user_id: 1,
      tv_id: 347,
      tv_name: "It's Always Sunny in Philadelphia",
      watched: true,
      favorite: true
    }, {
      id: 5,
      user_id: 1,
      tv_id: 123,
      tv_name: 'Lost',
      watched: true,
      favorite: true
    }
  ]).then(() => {
    return knex.raw(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`)
  })
}
