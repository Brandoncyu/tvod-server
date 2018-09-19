const table = 'interests'
exports.seed = knex => {
  return knex(table).insert([{
      id: 1,
      name: 'Drama'
    }, {
      id: 2,
      name: 'Comedy'
    }, {
      id: 3,
      name: 'Suspense'
    }, {
      id: 4,
      name: 'Animation'
    }, {
      id: 5,
      name: 'Action'
    }, {
      id: 6,
      name: 'Family'
    }, {
      id: 7,
      name: 'Science-Fiction'
    }, {
      id: 8,
      name: 'Adventure'
    }, {
      id: 9,
      name: 'Romance'
    }, {
      id: 10,
      name: 'Legal'
    }, {
      id: 11,
      name: 'Crime'
    }, {
      id: 12,
      name: 'Thriller'
    }
  ]).then(() => {
    return knex.raw(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`)
  })
}
