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

UPDATE film
SET language_id = 2
WHERE film_id IN (1, 2, 3);


SELECT
  tc.constraint_name,
  kcu.column_name,
  ccu.table_name AS referenced_table,
  ccu.column_name AS referenced_column
FROM information_schema.table_constraints AS tc
JOIN information_schema.key_column_usage AS kcu
  ON tc.constraint_name = kcu.constraint_name
JOIN information_schema.constraint_column_usage AS ccu
  ON ccu.constraint_name = tc.constraint_name
WHERE tc.table_name = 'customer'
  AND tc.constraint_type = 'FOREIGN KEY';


DROP TABLE customer_review;


SELECT COUNT(*)
FROM rental
WHERE return_date IS NULL;


SELECT f.title, f.rental_rate
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;


SELECT f.title
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE f.description ILIKE '%sumo%'
AND a.first_name = 'PENELOPE'
AND a.last_name = 'MONROE';


SELECT title
FROM film
WHERE length < 60
AND rating = 'R';


SELECT f.title
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN payment p ON r.rental_id = p.rental_id
JOIN customer c ON p.customer_id = c.customer_id
WHERE c.first_name = 'MATTHEW'
AND c.last_name = 'MAHAN'
AND p.amount > 4
AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';


SELECT f.title
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'MATTHEW'
AND c.last_name = 'MAHAN'
AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC;