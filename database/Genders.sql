--"genders" table

--Drops if exists
DROP TABLE IF EXISTS genders CASCADE;

--Creates
CREATE TABLE genders (
    id_gender SERIAL UNIQUE,
    gender TEXT NOT NULL
);

--Inserts default value and possible values
INSERT INTO genders (id_gender, gender) VALUES (DEFAULT, 'Undefined'),  -- 1
                                               (DEFAULT, 'Female'),     -- 2
                                               (DEFAULT, 'Male'),       -- 3
                                               (DEFAULT, 'Other');      -- 4