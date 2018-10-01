const table = 'series'
exports.seed = knex => {
  return knex(table).insert([{
      user_id: 1,
      tv_id: 618,
      tv_name: 'Better Call Saul',
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/163/407938.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 1,
      tv_id: 169,
      tv_name: "Breaking Bad",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 1,
      tv_id: 527,
      tv_name: "The Sopranos",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/4/11341.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 1,
      tv_id: 179,
      tv_name: "The Wire",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/1/2527.jpg",
      watched: true,
      favorite: false
    }, {
      user_id: 1,
      tv_id: 106,
      tv_name: "Justified",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/0/808.jpg",
      watched: true,
      favorite: false
    }, {
      user_id: 1,
      tv_id: 194,
      tv_name: "Hannibal",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/160/401855.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 1,
      tv_id: 138,
      tv_name: "The Leftovers",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/107/267799.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 1,
      tv_id: 4924,
      tv_name: "Samurai Champloo",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/21/53672.jpg",
      watched: true,
      favorite: false
    }, {
      user_id: 1,
      tv_id: 82,
      tv_name: 'Game of Thrones',
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/143/359013.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 1,
      tv_id: 304,
      tv_name: 'The Venture Bros.',
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/2/5028.jpg",
      watched: true,
      favorite: false
    }, {
      user_id: 1,
      tv_id: 347,
      tv_name: "It's Always Sunny in Philadelphia",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/44/110392.jpg",
      watched: true,
      favorite: false
    }, {
      user_id: 1,
      tv_id: 123,
      tv_name: 'Lost',
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/0/1389.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 2,
      tv_id: 82,
      tv_name: 'Game of Thrones',
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/143/359013.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 2,
      tv_id: 1526,
      tv_name: "RuPaul's Drag Race",
      image: 'http://static.tvmaze.com/uploads/images/medium_portrait/8/21309.jpg',
      watched: true,
      favorite: true
    }, {
      user_id: 2,
      tv_id: 5967,
      tv_name: 'Insecure',
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/80/201348.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 2,
      tv_id: 30,
      tv_name: 'American Horror Story',
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/163/409065.jpg",
      watched: true,
      favorite: false
    }, {
      user_id: 2,
      tv_id: 128,
      tv_name: "Jane the Virgin",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/53/132727.jpg",
      watched: true,
      favorite: false
    }, {
      user_id: 3,
      tv_id: 1440,
      tv_name: 'Tokyo Ghoul',
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/8/20809.jpg",
      watched: true,
      favorite: false
    }, {
      user_id: 3,
      tv_id: 2790,
      tv_name: 'The Good Place',
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/165/414887.jpg",
      watched: true,
      favorite: false
    }, {
      user_id: 3,
      tv_id: 49,
      tv_name: "Brooklyn Nine-Nine",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/128/321052.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 3,
      tv_id: 12036,
      tv_name: "Altered Carbon",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/143/358572.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 3,
      tv_id: 919,
      tv_name: "Attack on Titan",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/6/16094.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 4,
      tv_id: 138,
      tv_name: "The Leftovers",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/107/267799.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 4,
      tv_id: 158,
      tv_name: "Fringe",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/0/2245.jpg",
      watched: true,
      favorite: false
    }, {
      user_id: 4,
      tv_id: 13615,
      tv_name: "Boku no Hero Academia",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/65/164727.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 4,
      tv_id: 12036,
      tv_name: "Altered Carbon",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/143/358572.jpg",
      watched: true,
      favorite: false
    }, {
      user_id: 4,
      tv_id: 1371,
      tv_name: "Westworld",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/152/381152.jpg",
      watched: true,
      favorite: false
    }, {
      user_id: 5,
      tv_id: 82,
      tv_name: 'Game of Thrones',
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/143/359013.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 5,
      tv_id: 335,
      tv_name: "Sherlock",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/2/5311.jpg",
      watched: true,
      favorite: false
    }, {
      user_id: 5,
      tv_id: 169,
      tv_name: "Breaking Bad",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 5,
      tv_id: 174,
      tv_name: "Parks and Recreation",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/0/2439.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 5,
      tv_id: 73,
      tv_name: "The Walking Dead",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/166/417471.jpg",
      watched: true,
      favorite: false
    }, {
      user_id: 6,
      tv_id: 255,
      tv_name: "Anthony Bourdain: Parts Unknown",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/1/4660.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 6,
      tv_id: 361,
      tv_name: "Saturday Night Live",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/2/5468.jpg",
      watched: true,
      favorite: false
    }, {
      user_id: 6,
      tv_id: 9085,
      tv_name: "The Mind of a Chef",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/32/80261.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 6,
      tv_id: 320,
      tv_name: "The Fall",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/75/188991.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 6,
      tv_id: 11962,
      tv_name: "Cooked",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/45/113944.jpg",
      watched: true,
      favorite: false
    }, {
      user_id: 7,
      tv_id: 1371,
      tv_name: "Westworld",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/152/381152.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 7,
      tv_id: 216,
      tv_name: "Rick and Morty",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/1/3603.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 7,
      tv_id: 10,
      tv_name: "Grimm",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/69/174906.jpg",
      watched: true,
      favorite: false
    }, {
      user_id: 7,
      tv_id: 111,
      tv_name: "Once Upon a Time",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/127/319360.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 7,
      tv_id: 172,
      tv_name: "Suits",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/160/402351.jpg",
      watched: true,
      favorite: false
    }, {
      user_id: 8,
      tv_id: 30,
      tv_name: 'American Horror Story',
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/163/409065.jpg",
      watched: true,
      favorite: false
    }, {
      user_id: 8,
      tv_id: 13417,
      tv_name: "Ozark",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/163/407569.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 8,
      tv_id: 76,
      tv_name: "Sons of Anarchy",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/0/537.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 8,
      tv_id: 17118,
      tv_name: "Mayans M.C.",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/163/407927.jpg",
      watched: true,
      favorite: false
    }, {
      user_id: 8,
      tv_id: 73,
      tv_name: "The Walking Dead",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/166/417471.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 9,
      tv_id: 171,
      tv_name: "How I Met Your Mother",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/0/2451.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 9,
      tv_id: 431,
      tv_name: "Friends",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/41/104550.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 9,
      tv_id: 73,
      tv_name: "The Walking Dead",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/166/417471.jpg",
      watched: true,
      favorite: false
    }, {
      user_id: 9,
      tv_id: 707,
      tv_name: "Sofia the First",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/6/15008.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 9,
      tv_id: 2175,
      tv_name: "Marvel's Iron Fist",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/164/412207.jpg",
      watched: true,
      favorite: false
    }, {
      user_id: 10,
      tv_id: 112,
      tv_name: "South Park",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/0/935.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 10,
      tv_id: 216,
      tv_name: "Rick and Morty",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/1/3603.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 10,
      tv_id: 532,
      tv_name: "Scrubs",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/4/11371.jpg",
      watched: true,
      favorite: false
    }, {
      user_id: 10,
      tv_id: 118,
      tv_name: "House",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/43/109527.jpg",
      watched: true,
      favorite: false
    }, {
      user_id: 10,
      tv_id: 526,
      tv_name: "The Office",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/85/213184.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 11,
      tv_id: 526,
      tv_name: "The Office",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/85/213184.jpg",
      watched: true,
      favorite: false
    }, {
      user_id: 11,
      tv_id: 216,
      tv_name: "Rick and Morty",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/1/3603.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 11,
      tv_id: 174,
      tv_name: "Parks and Recreation",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/0/2439.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 11,
      tv_id: 290,
      tv_name: "Adventure Time",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/1/4898.jpg",
      watched: true,
      favorite: true
    }, {
      user_id: 11,
      tv_id: 107,
      tv_name: "Bob's Burgers",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/0/840.jpg",
      watched: true,
      favorite: false
    }

  ]).then(() => {
    return knex.raw(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`)
  })
}
