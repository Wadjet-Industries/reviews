DROP DATABASE IF EXISTS reviewsDB;
CREATE DATABASE IF NOT EXISTS reviewsDB;

USE reviewsDB;

CREATE SCHEMA IF NOT EXISTS restaurants
CREATE TABLE Listings (
  id integer NOT NULL increment PRIMARY KEY,
  name varchar(50) NOT NULL 
);

CREATE SCHEMA IF NOT EXISTS people
CREATE TABLE Users (
  id INT NOT NULL increment PRIMARY KEY,
  user TEXT NOT NULL,
  initials_background varchar(20) NOT NULL,
  location TEXT NOT NULL,
  vip BOOLEAN NOT NULL,
  total_reviews INT NOT NULL
);

CREATE TYPE noise AS ENUM ('quiet', 'moderate', 'loud');

CREATE SCHEMA IF NOT EXISTS reviewschema
CREATE TABLE Reviews (
  id INT NOT NULL increment PRIMARY KEY,
  user_id INT NOT NULL,
  review TEXT NOT NULL, 
  overall INT NOT NULL,
  food INT NOT NULL,
  service INT NOT NULL,
  ambience INT NOT NULL,
  value INT NOT NULL,
  noise noise,
  would_recommend BOOLEAN NOT NULL,
  date DATE NOT NULL, 
  restaurant_id INT NOT NULL,
  FOREIGN KEY (user_id)
    REFERENCES Users(id),
  FOREIGN KEY (Restaurant_id)
    REFERENCES Restaurants(id)
); 
