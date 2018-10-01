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
    image: 'https://avatars1.githubusercontent.com/u/36578214?s=460&v=4',
    password: hashSync('password'),
    aboutme: "Obsessive television fanatic. Always looking for new shows to shows and new people to discuss the ones I love!"
  }, {
    id: 2,
    firstname: 'Dillon',
    lastname: 'Easter',
    username: "dillz4days",
    email: "dillon@gmail.com",
    image: 'https://avatars0.githubusercontent.com/u/35743900?s=460&v=4',
    password: hashSync('password'),
    aboutme: "Hello World!"
  }]).then(() => {
    return knex.raw(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`)
  });
};
