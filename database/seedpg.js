const { Client } = require('pg');
const client = new Client();
await client.connect()

const faker = require('faker');

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const seedRestaurants = () => {
  for (var i = 1; i <= 100; i++) {
    let query = {
      input: 'INSERT INTO Listings (name) VALUE ($1)',
      value: [i],
    }
    client.query(query, (error, results) => {
      if (error) {
        console.log(error, 'could not seed Restaurants');
      } else {
        if (i === 100) {
          console.log(`Wrote ${i} restaurants`)
        }
      }
    }
  )};
}

const seedUsers = () => {
  let background = ['#BB6ACD', '#D86441', '#6C8AE4', '#DF4E96'];
  for (var i = 1; i <= 300; i++) {
    let randomUser =  faker.name.firstName();
    if (getRandomIntInclusive(1, 10) > 3) {
      randomUser += ' ' + faker.name.lastName();
    }
    let initials = randomUser[0].toUpperCase();
    for(let i = 1; i <= randomUser.length; i++) {
      let capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      if (capitalLetters.includes(randomUser[i])) {
        initials += randomUser[i];
        break;
      }
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
    let query = {
      text: "INSERT INTO Users set ?",
      
    }
    let value = {
      user: randomUser, 
      user_initials: initials,
      initials_background: randomInitialsBG,
      location: randomLocation, 
      vip: vipStatus,
      total_reviews: randomTotalReviews
    };

    client.query(input, value, (error, results) => {
      if (error) {
        console.log(error, 'could not seed Users');
      } else {
        if (i === 300) {
          console.log(`${i} users created`);
        }
      }
    }
  )};
}

const seedReviews = () => {
  let noiseLevel = ['Quiet', 'Moderate', 'Energetic'];
  for (var i = 1; i <= 5000; i++) {
    let randomUserID =  getRandomIntInclusive(1, 300);
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
    let randomRestaurantID = getRandomIntInclusive(1, 100);

    let input = "INSERT INTO Reviews set ?";
    let value = {
      user_id: randomUserID, 
      review: randomReview,
      overall: overallAverage,
      food: randomFood, 
      service: randomService,
      ambience: randomAmbience,
      value: randomValue,
      noise: randomNoise,
      would_recommend: recommend,
      date: randomDate, 
      restaurant_id: randomRestaurantID
    };

    client.query(input, value, (error, results) => {
      if (error) {
        console.log(error, 'could not seed Reviews');
      } else {
        // console.log(results);
      }
    }
  )};
}

seedRestaurants();
seedUsers();
seedReviews();


await client.end()