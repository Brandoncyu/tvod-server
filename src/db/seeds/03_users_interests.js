const table = 'users_interests'
exports.seed = knex => {
  return knex(table).del()
    .then(() => {
      return knex(table).insert([{
            user_id: 1,
            interest_id: 1
          }, {
            user_id: 1,
            interest_id: 2
          }, {
            user_id: 1,
            interest_id: 3
          }, {
            user_id: 1,
            interest_id: 4
          }, {
            user_id: 1,
            interest_id: 5
          }, {
            user_id: 1,
            interest_id: 6
          }, {
            user_id: 1,
            interest_id: 7
          }, {
            user_id: 1,
            interest_id: 8
          }, {
            user_id: 1,
            interest_id: 9
          }, {
            user_id: 1,
            interest_id: 10
          }, {
            user_id: 1,
            interest_id: 11
          }, {
            user_id: 1,
            interest_id: 12
          }, {
            user_id: 2,
            interest_id: 1
          }, {
            user_id: 2,
            interest_id: 2
          }, {
            user_id: 2,
            interest_id: 3
          }, {
            user_id: 2,
            interest_id: 4
          }, {
            user_id: 2,
            interest_id: 5
          }, {
            user_id: 2,
            interest_id: 7
          }, {
            user_id: 2,
            interest_id: 8
          }, {
            user_id: 2,
            interest_id: 9
          }, {
            user_id: 2,
            interest_id: 12
          }
        ])
        .then(() => {
          return knex.raw(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`)
        })
    })
};