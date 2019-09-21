var csvWriter = require('csv-write-stream')
const fs = require('fs');
const faker = require('faker');
var writer = csvWriter();

const createFile = fs.createWriteStream('reviewscass2.csv');
createFile.write('id,restaurant_id,user,location,vip,total_reviews,review,overall,food,service,ambience,value,noise,would_recommend,date\n', 'utf-8');

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// update i, id, restaurant max id number
const seedReviewsTable = (writer, encoding, callback) => {
  let noiseLevel = ['Quiet', 'Moderate', 'Energetic'];
  const max = 25000000;
  let i = max;
  function write() {
    do {
      let data = (max - i + 25000000).toString();
      i--;
      let randomRestaurantID = getRandomIntInclusive(1, 10000000);
      let randomUser =  faker.name.firstName();
      if (getRandomIntInclusive(1, 10) > 3) {
        randomUser += ' ' + faker.name.lastName();
      }
      let randomLocation = faker.address.city();
      let vipStatus = false;
      if (getRandomIntInclusive(1, 10) > 7) {
        vipStatus = true;
      }
      let randomTotalReviews = getRandomIntInclusive(1, 30);
      if (getRandomIntInclusive(1, 10) > 7) {
        randomTotalReviews = getRandomIntInclusive(31, 200);
      }
      let randomReview = faker.lorem.paragraph();
      let randomFood = getRandomIntInclusive(1, 5);
      let randomService = getRandomIntInclusive(1, 5);
      let randomAmbience = getRandomIntInclusive(1, 5);
      let randomValue = getRandomIntInclusive(1, 5);
      if(randomFood >=4) {
        randomService = getRandomIntInclusive(4, 5);
        randomAmbience = getRandomIntInclusive(4, 5);
        randomValue = getRandomIntInclusive(4, 5);
      }
      let overallAverage = (randomFood + randomService +randomAmbience + randomValue) / 4;
      let randomNoise = noiseLevel[getRandomIntInclusive(0, 2)];
      let recommend = faker.random.boolean();
      if (overallAverage >=4) {
        recommend = 1;
      }
      let randomDate = faker.date.past();
      if (getRandomIntInclusive(1, 10) > 7) {
        randomDate = faker.date.recent();
      }
      data += ',' + randomRestaurantID + ',\'' + randomUser + '\',\'' + randomLocation + '\',' + vipStatus + ',' + randomTotalReviews + ',\'' + randomReview + '\',' + overallAverage + ',' + randomFood + ',' + randomService + ',' + randomAmbience + ',' + randomValue + ',\'' + randomNoise + '\',' + recommend + ',\'' + randomDate + '\'\n';
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
      if (i % 100000 === 0) {
        let now = new Date();
        let timeNow = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        console.log(timeNow + ' Wrote user ' + (max - i).toLocaleString() );
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

seedReviewsTable(createFile, 'utf-8', () => { writer.end(); });

