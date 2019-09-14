var csvWriter = require('csv-write-stream')
const fs = require('fs');
const faker = require('faker');
var writer = csvWriter();

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const seedUsers = () => {
  writer.pipe(fs.createWriteStream('users.csv'));
  let background = ['#BB6ACD', '#D86441', '#6C8AE4', '#DF4E96'];
  for (var i = 1; i <= 10000000; i++) {
    let randomUser =  '\'' + faker.name.firstName();
    if (getRandomIntInclusive(1, 10) > 3) {
      randomUser += ' ' + faker.name.lastName() + '\'';
    }
    let randomInitialsBG = background[getRandomIntInclusive(0, 3)];
    let randomLocation = `'${faker.address.city()}'`;
    let vipStatus = false;
    if (getRandomIntInclusive(1, 10) > 7) {
      vipStatus = true;
    }
    let randomTotalReviews = getRandomIntInclusive(1, 30);
    if (getRandomIntInclusive(1, 10) > 7) {
      randomTotalReviews = getRandomIntInclusive(31, 200);
    }
    writer.write({
      user: randomUser, 
      initials_background: `'${randomInitialsBG}'`,
      location: randomLocation, 
      vip: vipStatus,
      total_reviews: randomTotalReviews
    });
    if (i % 10000 === 0) {
      console.log(`Wrote user #${i}`);
    }
  };
  console.log('End users seeding');
  writer.end();
}

seedUsers();
// seedReviews();


