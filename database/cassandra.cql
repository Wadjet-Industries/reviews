CREATE KEYSPACE reviewsmod
WITH replication = {'class':'SimpleStrategy', 'replication_factor' : 1};

USE reviewsmod;

CREATE TABLE reviews (
  id int,
  restaurant_id int, 
  user varchar,
  location varchar,
  vip Boolean,
  total_reviews int,
  review text, 
  overall decimal,
  food int,
  service int,
  ambience int,
  value int,
  noise varchar,
  would_recommend Boolean,
  date text, 
  PRIMARY KEY (restaurant_id, id)
);

COPY reviews (id,restaurant_id,user,location,vip,total_reviews,review,overall,food,service,ambience,value,noise,would_recommend,date) FROM 'reviewscass.csv' WITH HEADER = TRUE;

