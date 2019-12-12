--"volunteers" table

--Drops if exists
DROP TABLE IF EXISTS volunteers CASCADE ;

--Creates
CREATE TABLE volunteers (
    id_volunteer SERIAL PRIMARY KEY UNIQUE ,
    name TEXT NOT NULL ,
    surname TEXT NOT NULL ,
    id_birthday INT DEFAULT 1,
    id_working_day INT DEFAULT 1,
    id_arrival INT NOT NULL DEFAULT 1,
    id_departure INT DEFAULT 1,
    id_gender INT NOT NULL DEFAULT 0
);