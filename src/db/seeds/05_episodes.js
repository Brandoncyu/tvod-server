const table = 'episodes'
exports.seed = knex => {
  return knex(table).insert([{
      id: 1,
      user_id: 1,
      tv_id: 618,
      tv_name: 'Better Call Saul',
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/163/407938.jpg",
      ep_id: 57360,
      season_no: 1,
      ep_no: 1,
      ep_name: 'Uno',
      watched: true,
      comments: 'A great start, and really, TUCO???',
      rating: 4
    }, {
      id: 2,
      user_id: 1,
      tv_id: 618,
      tv_name: 'Better Call Saul',
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/163/407938.jpg",
      ep_id: 57361,
      season_no: 1,
      ep_no: 2,
      ep_name: 'Mijo',
      watched: true,
      comments: 'An spectacular follow-up that brings more anticipation.',
      rating: 5
    }
  ]).then(() => {
    return knex.raw(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`)
  })
}
