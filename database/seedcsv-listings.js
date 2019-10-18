var csvWriter = require('csv-write-stream')
const fs = require('fs');
const faker = require('faker');
var writer = csvWriter();

const createFile = fs.createWriteStream('listings.csv');
createFile.write('name\n','utf-8');

const seedRestaurants = (writer, encoding, callback) => {
  let i = 10000000;
  function write() {
    do {
      i--;
      let name = faker.lorem.word();
      name = '\'' + name[0].toUpperCase() + name.slice(1) + '\'';
      let data = name + '\n';
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
      if (i % 100000 === 0) {
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
  console.log('End of seed restaurants');
};


seedRestaurants(createFile, 'utf-8', () => {
  writer.end();
});

