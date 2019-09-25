var csvWriter = require('csv-write-stream')
const fs = require('fs');
const faker = require('faker');
var writer = csvWriter();

const createFile = fs.createWriteStream('reviews30_4.csv');
createFile.write('user_id,review,overall,food,service,ambience,value,noise,would_recommend,date,restaurant_id\n', 'utf-8');

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const seedReviews = (writer, encoding, callback) => {
  let noiseLevel = ['Quiet', 'Moderate', 'Energetic'];
  const max = 100000000;
  let i = max;
  function write() {
    let ok = true;
    do {
      i--;
      let randomUserID =  getRandomIntInclusive(1, 10000000);
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
      let randomRestaurantID = getRandomIntInclusive(1, 10000000);
      let data = `${randomUserID},"${randomReview}",${overallAverage},${randomFood},${randomService},${randomAmbience},${randomValue},${randomNoise},${recommend},"${randomDate}",${randomRestaurantID}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
      if (i % 100000 === 0) {
        let now = new Date();
        let timeNow = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        console.log(`${timeNow} Wrote user ${(max - i).toLocaleString()}`);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
} 

seedReviews(createFile, 'utf-8', () => { writer.end(); });


