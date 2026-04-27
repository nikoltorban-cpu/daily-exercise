SELECT *
FROM language;


SELECT f.title, f.description, l.name AS language
FROM film f
JOIN language l ON f.language_id = l.language_id;


SELECT f.title, f.description, l.name AS language
FROM language l
LEFT JOIN film f ON f.language_id = l.language_id;


CREATE TABLE new_film (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);


INSERT INTO new_film (name) VALUES
('Inception'),
('Interstellar'),
('Titanic');


CREATE TABLE customer_review (
  review_id SERIAL PRIMARY KEY,
  film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
  language_id INT REFERENCES language(language_id),
  title TEXT,
  score INT CHECK (score BETWEEN 1 AND 10),
  review_text TEXT,
  last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES
(1, 1, 'Amazing movie', 9, 'Really enjoyed it'),
(2, 1, 'Great visuals', 8, 'Very impressive');


DELETE FROM new_film
WHERE id = 1;


SELECT *
FROM customer_review;
