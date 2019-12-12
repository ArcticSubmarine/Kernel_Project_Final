--"dates" table

--Drops if exists
DROP TABLE IF EXISTS dates CASCADE;

--Creates
CREATE TABLE dates (
    id_date SERIAL UNIQUE ,
    day DATE NOT NULL UNIQUE
);

--Inserts default value
INSERT INTO dates (id_date, day) VALUES (DEFAULT, 'January 1, 0001');