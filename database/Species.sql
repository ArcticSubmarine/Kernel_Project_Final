DROP TABLE IF EXISTS species CASCADE;

CREATE TABLE species (
    id_specie SERIAL PRIMARY KEY UNIQUE,
    specie text UNIQUE
);

INSERT INTO species (id_specie, specie) VALUES (DEFAULT, 'Undefined'),  -- 1
                                               (DEFAULT, 'Dog'),        -- 2
                                               (DEFAULT, 'Cat'),        -- 3
                                               (DEFAULT, 'Bird'),       -- 4
                                               (DEFAULT, 'Rodent');     -- 5