var csvWriter = require('csv-write-stream')
const fs = require('fs');
const faker = require('faker');
var writer = csvWriter();

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const seedRestaurants = () => {
  writer.pipe(fs.createWriteStream('listing.csv'));
  for (var i = 1; i <= 10000000; i++) {
    writer.write({ listing: i });
  }
  console.log('End of seed restaurants');
  writer.end();
};


seedRestaurants();
// seedUsers();
// seedReviews();


