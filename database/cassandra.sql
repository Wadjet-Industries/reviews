CREATE TABLE Reviews (
  id int uuid increment, -- check uuid
  restaurant_id int, 
  user text,
  location text,
  vip Boolean,
  total_reviews int,
  review text, 
  overall int,
  food int,
  service int,
  ambience int,
  value int,
  noise text,
  would_recommend Boolean,
  date DATE, 
  PRIMARY KEY (restaurant_id)
);

