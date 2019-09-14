var csvWriter = require('csv-write-stream')
const fs = require('fs');
const faker = require('faker');
var writer = csvWriter();

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const createFile = fs.createWriteStream('users.csv');
createFile.write('user,initials_background,location,vip,total_reviews\n', 'utf-8');


const seedUsers = (writer, encoding, callback) => {
  let background = ['#BB6ACD', '#D86441', '#6C8AE4', '#DF4E96'];
  let i = 10000000;
  function write() {
    let ok = true;
    do {
      i--;
      let randomUser =  faker.name.firstName();
      if (getRandomIntInclusive(1, 10) > 3) {
        randomUser += ' ' + faker.name.lastName();
      }
      let randomInitialsBG = background[getRandomIntInclusive(0, 3)];
      let randomLocation = faker.address.city();
      let vipStatus = false;
      if (getRandomIntInclusive(1, 10) > 7) {
        vipStatus = true;
      }
      let randomTotalReviews = getRandomIntInclusive(1, 30);
      if (getRandomIntInclusive(1, 10) > 7) {
        randomTotalReviews = getRandomIntInclusive(31, 200);
      }
      let data = `'${randomUser}','${randomInitialsBG}','${randomLocation}',${vipStatus},${randomTotalReviews}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
      if (i % 10000 === 0) {
        let now = new Date();
        let timeNow = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        console.log(`${timeNow} Wrote user ${(10000000 - i).toLocaleString()}`);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}
seedUsers(createFile, 'utf-8', () => { writer.end(); });
// seedReviews();


