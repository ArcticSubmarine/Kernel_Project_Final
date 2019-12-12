--"quantities" table

--Drops if exists
DROP TABLE IF EXISTS quantities CASCADE;

--Creates
CREATE TABLE quantities (
    id_quantity SERIAL PRIMARY KEY UNIQUE,
    weight INT NOT NULL
);

--Inserts default value and possible values
INSERT INTO quantities (id_quantity, weight) VALUES (DEFAULT, 0),   -- 1
                                                    (DEFAULT, 100), -- 2
                                                    (DEFAULT, 200), -- 3
                                                    (DEFAULT, 300); -- 4