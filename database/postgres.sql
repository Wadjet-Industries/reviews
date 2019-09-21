DROP DATABASE IF EXISTS reviewsmodule;
CREATE DATABASE reviewsmodule;

\c reviewsmodule;

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL 
);

CREATE TABLE people (
  id SERIAL PRIMARY KEY,
  "user" VARCHAR(30) NOT NULL,
  initials_background VARCHAR(20) NOT NULL,
  location VARCHAR(150) NOT NULL,
  vip BOOLEAN NOT NULL,
  total_reviews INTEGER NOT NULL
);

CREATE TYPE noise_level AS ENUM ('Quiet', 'Moderate', 'Energetic');

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  review TEXT NOT NULL, 
  overall REAL NOT NULL,
  food INTEGER NOT NULL,
  service INTEGER NOT NULL,
  ambience INTEGER NOT NULL,
  value INTEGER NOT NULL,
  noise noise_level,
  would_recommend BOOLEAN NOT NULL,
  date VARCHAR(100) NOT NULL, 
  restaurant_id INTEGER NOT NULL,
  FOREIGN KEY (user_id)
    REFERENCES people(id),
  FOREIGN KEY (restaurant_id)
    REFERENCES restaurants(id)
); 

COPY restaurants("name")
FROM '/Users/yanshu/Documents/CodingHW/reviews/csv/listings.csv' DELIMITER ',' CSV HEADER; 

COPY people("user",initials_background,location,vip,total_reviews)
FROM '/Users/yanshu/Documents/CodingHW/reviews/users.csv' DELIMITER AS ',' CSV HEADER; 

COPY reviews(user_id,review,overall,food,service,ambience,value,noise,would_recommend,date,restaurant_id)
FROM '/Users/yanshu/Documents/CodingHW/reviews/reviews100.csv' DELIMITER ',' CSV HEADER; 

CREATE INDEX restaurant_idx on reviews(restaurant_id);
CREATE INDEX people_idx on people(id);

