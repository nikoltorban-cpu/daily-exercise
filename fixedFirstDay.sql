	CREATE TABLE items(
	name VARCHAR(100),
	price INT
	);
	
	INSERT INTO items (name, price)
	VALUES
	('Small Desk', 100),
	('Large desk', 300),
	('Fan', 80);

	CREATE TABLE customers(
	firstName VARCHAR(100),
	lastName VARCHAR(100)
	);

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
	SELECT * FROM customers WHERE firstName <> 'Scott';

	SELECT * FROM items ORDER BY price ASC;
	SELECT * FROM items WHERE price >= 80 ORDER BY price DESC;
	SELECT firstName, lastName FROM customers ORDER BY firstName ASC LIMIT 3;
	SELECT lastName FROM customers ORDER BY lastName DESC;