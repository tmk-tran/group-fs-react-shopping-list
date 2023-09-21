CREATE TABLE list (
	"id" serial primary key,
	"name" varchar(80) not null,
	"quantity" int not null,
	"unit" varchar(20),
	"purchased" boolean default false
);

SELECT * FROM list;

INSERT INTO list ("name", "quantity")
VALUES ('Milk', 1),
	   ('Bread', 2);