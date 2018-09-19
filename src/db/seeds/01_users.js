const {
  hashSync
} = require('bcryptjs')

const table = 'users'
exports.seed = knex => {
  return knex(table).insert([{
    id: 1,
    first_name: "Brandon",
    last_name: "Yu",
    username: "BrandonCYu",
    email: "brandoncyu@gmail.com",
    password: hashSync('password'),
    about_me: "Obsessive television fanatic. Always looking for new shows to shows and new people to discuss the ones I love!"
  }, {
    id: 2,
    first_name: 'Dillon',
    last_name: 'Easter',
    username: "Dillz4Days",
    email: "dillon@gmail.com",
    password: hashSync('password'),
    about_me: "Hello World!"
  }]).then(() => {
    return knex.raw(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`)
  });
};
