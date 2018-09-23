const {
  hashSync
} = require('bcryptjs')

const table = 'users'
exports.seed = knex => {
  return knex(table).insert([{
    id: 1,
    firstname: "Brandon",
    lastname: "Yu",
    username: "brandoncyu",
    email: "brandoncyu@gmail.com",
    password: hashSync('password'),
    aboutme: "Obsessive television fanatic. Always looking for new shows to shows and new people to discuss the ones I love!"
  }, {
    id: 2,
    firstname: 'Dillon',
    lastname: 'Easter',
    username: "dillz4days",
    email: "dillon@gmail.com",
    password: hashSync('password'),
    aboutme: "Hello World!"
  }]).then(() => {
    return knex.raw(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`)
  });
};
