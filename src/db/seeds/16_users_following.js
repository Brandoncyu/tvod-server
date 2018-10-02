const table = 'users_following'
exports.seed = knex => {
  return knex(table).del()
    .then(() => {
      return knex(table).insert([{
            user_id: 1,
            follow_id: 2
          }, {
            user_id: 1,
            follow_id: 7
          }, {
            user_id: 1,
            follow_id: 8
          }, {
            user_id: 1,
            follow_id: 11
          }, {
            user_id: 2,
            follow_id: 1
          }, {
            user_id: 4,
            follow_id: 1
          }, {
            user_id: 5,
            follow_id: 1
          }, {
            user_id: 10,
            follow_id: 1
          }

        ])
        .then(() => {
          return knex.raw(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`)
        })
    })
};
