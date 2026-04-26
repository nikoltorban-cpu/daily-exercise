-- Database: public

-- DROP DATABASE IF EXISTS public;

CREATE DATABASE public
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

	ALTER TABLE items 
	ADD COLUMN name VARCHAR(100),
	ADD COLUMN price INT;

	INSERT INTO items (name, price)
	VALUES
	('Small Desk', 100),
	('Large desk', 300),
	('Fan', 80);

	ALTER TABLE customers
	ADD COLUMN firstName VARCHAR(100),
	ADD COLUMN lastName VARCHAR(100);

	INSERT INTO customers (firstName, lastName)
	VALUES
	('Greg', 'Jones'),
	('Sandra', 'Jones'),
	('Scott', 'Scott'),
	('Trevor', 'Green'),
	('Melanie', 'Johnson');

	SELECT * FROM items;
	SELECT * FROM items WHERE price > 80;
	SELECT * FROM items WHERE price <= 300;
	SELECT * FROM customers WHERE lastName = 'Smith';
	SELECT * FROM customers WHERE lastName = 'Jones';
	SELECT * FROM customers WHERE lastName <> 'Scott';

	SELECT * FROM items ORDER BY price ASC;
	SELECT * FROM items WHERE price >= 80 ORDER BY price DESC;
	SELECT firstName, lastName FROM customers ORDER BY firstName ASC LIMIT 3;
	SELECT lastName FROM customers ORDER BY lastName DESC;