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
    aboutme: "I really enjoy shows with good production value. Anything with good set design, costumes, and unique plot devices!"
  }, {
    id: 3,
    firstname: 'Craig',
    lastname: 'Fell',
    username: "grendelshmoo",
    email: "craig@gmail.com",
    image: 'https://avatars1.githubusercontent.com/u/18295976?s=460&v=4',
    password: hashSync('password'),
    aboutme: "Sci-Fi and Anime are my thing. I just love shows with good world building."
  }, {
    id: 4,
    firstname: 'Wes',
    lastname: 'Reid',
    username: "bwreid",
    email: "wes@gmail.com",
    image: 'https://avatars2.githubusercontent.com/u/1316902?s=460&v=4',
    password: hashSync('password'),
    aboutme: "Great action and dialogue matter to me. I like a good spectacle."
  }, {
    id: 5,
    firstname: 'Chris',
    lastname: 'Peterson',
    username: "crpete23",
    email: "chris@gmail.com",
    image: 'https://avatars0.githubusercontent.com/u/38960432?s=460&v=4',
    password: hashSync('password'),
    aboutme: "I love good special effects and being able to laugh."
  }, {
    id: 6,
    firstname: 'Wendy',
    lastname: 'Parsons',
    username: "wsparsons",
    email: "wendy@gmail.com",
    image: 'https://avatars3.githubusercontent.com/u/25444364?s=460&v=4',
    password: hashSync('password'),
    aboutme: "I love cooking shows!"
  }, {
    id: 7,
    firstname: 'Diep',
    lastname: 'Truong',
    username: "dtruong11",
    email: "diep@gmail.com",
    image: 'https://avatars3.githubusercontent.com/u/29584874?s=460&v=4',
    password: hashSync('password'),
    aboutme: "Animation and Fantasy rule!!"
  }, {
    id: 8,
    firstname: 'Hedim',
    lastname: 'Ramirez',
    username: "ody360",
    email: "hedim@gmail.com",
    image: 'https://avatars1.githubusercontent.com/u/35235828?s=460&v=4',
    password: hashSync('password'),
    aboutme: "Exploring alternate universes is what it's all about."
  }, {
    id: 9,
    firstname: 'Surya',
    lastname: 'Krishna Moorthy',
    username: "suryakrishnamoorthy",
    email: "surya@gmail.com",
    image: 'https://avatars1.githubusercontent.com/u/37917817?s=460&v=4',
    password: hashSync('password'),
    aboutme: "A good story makes my day."
  }, {
    id: 10,
    firstname: 'Nate',
    lastname: 'Semmler',
    username: "nsemmler",
    email: "nate@gmail.com",
    image: 'https://avatars2.githubusercontent.com/u/38363772?s=460&v=4',
    password: hashSync('password'),
    aboutme: "Love shows with smart writing...I watch shows to laugh."
  }, {
    id: 11,
    firstname: 'Jewell',
    lastname: 'White',
    username: "jewell86",
    email: "jewell@gmail.com",
    image: 'https://avatars2.githubusercontent.com/u/32821803?s=460&v=4',
    password: hashSync('password'),
    aboutme: "I like witty humor & adult animation"
  }, {
    id: 12,
    firstname: 'Matthew',
    lastname: 'Camacho',
    username: "matthewcamacho",
    email: 'matthew@gmail.com',
    image: 'https://avatars3.githubusercontent.com/u/38703431?s=460&v=4',
    password: hashSync('password'),
    aboutme: "I don't like anything."
  }]).then(() => {
    return knex.raw(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`)
  });
};
