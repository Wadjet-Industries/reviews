DROP DATABASE IF EXISTS reviewsDB;
CREATE DATABASE IF NOT EXISTS reviewsDB;

USE reviewsDB;

CREATE TABLE Restaurants (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(20) NOT NULL 
);

CREATE TABLE Users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user TEXT NOT NULL,
  location TEXT NOT NULL,
  vip BOOLEAN NOT NULL
);

CREATE TABLE Reviews (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  review TEXT NOT NULL, 
  overall INT NOT NULL,
  food INT NOT NULL,
  service INT NOT NULL,
  ambience INT NOT NULL,
  value INT NOT NULL,
  noise varchar(20) NOT NULL,
  would_recommend BOOLEAN NOT NULL,
  date DATE NOT NULL, 
  restaurant_id INT NOT NULL,
  FOREIGN KEY (user_id)
    REFERENCES Users(id),
  FOREIGN KEY (restaurant_id)
    REFERENCES Restaurants(id)
);
