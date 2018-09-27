const table = 'series'
exports.seed = knex => {
  return knex(table).insert([{
      id: 1,
      user_id: 1,
      tv_id: 618,
      tv_name: 'Better Call Saul',
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/163/407938.jpg",
      watched: true,
      favorite: true
    }, {
      id: 2,
      user_id: 1,
      tv_id: 82,
      tv_name: 'Game of Thrones',
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/143/359013.jpg",
      watched: true,
      favorite: true
    }, {
      id: 3,
      user_id: 1,
      tv_id: 304,
      tv_name: 'The Venture Bros.',
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/2/5028.jpg",
      watched: true,
      favorite: true
    }, {
      id: 4,
      user_id: 1,
      tv_id: 347,
      tv_name: "It's Always Sunny in Philadelphia",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/44/110392.jpg",
      watched: true,
      favorite: true
    }, {
      id: 5,
      user_id: 1,
      tv_id: 123,
      tv_name: 'Lost',
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/0/1389.jpg",
      watched: true,
      favorite: true
    }
  ]).then(() => {
    return knex.raw(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`)
  })
}
