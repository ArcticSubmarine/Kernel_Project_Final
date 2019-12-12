--"animals" table

--Drops if exists
DROP TABLE IF EXISTS animals CASCADE ;

--Creates
CREATE TABLE animals (
    id_animal SERIAL PRIMARY KEY UNIQUE ,
    name TEXT,
    id_specie INT NOT NULL DEFAULT 1,
    id_gender INT NOT NULL DEFAULT 1,
    id_arrival INT DEFAULT 1,
    id_departure INT DEFAULT 1,
    adopter TEXT DEFAULT ''
);