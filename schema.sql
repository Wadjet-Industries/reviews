DROP DATABASE IF EXISTS reviewsDB;
CREATE DATABASE IF NOT EXISTS reviewsDB;

USE reviewsDB;

CREATE TABLE Reviews (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  overall INT NOT NULL,
  food INT NOT NULL,
  service_rating INT NOT NULL,
  ambience INT NOT NULL,
  value_rating INT NOT NULL,
  noise TEXT NOT NULL,
  would_recommend BOOLEAN NOT NULL,
  date_created DATE NOT NULL, 
  restaurant_id INT NOT NULL

  FOREIGN KEY (user_id)
        REFERENCES Users(id)
);

CREATE TABLE Users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user TEXT NOT NULL,
  review_id INT NOT NULL,
  location TEXT NOT NULL,
  vip BOOLEAN NOT NULL
  
  FOREIGN KEY (review_id)
        REFERENCES Reviews(id)
);

CREATE TABLE Restaurant (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(20) NOT NULL,
);