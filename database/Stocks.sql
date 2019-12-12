--"stocks" table

--Drops if exists
DROP TABLE IF EXISTS stocks CASCADE ;

--Creates
CREATE TABLE  stocks (
  id_stock SERIAL PRIMARY KEY UNIQUE,
  id_specie INT NOT NULL REFERENCES species (id_specie) DEFAULT 1,
  id_delivery_date INT REFERENCES public.dates (id_date) DEFAULT 1,
  id_quantity_delivered INT REFERENCES quantities (id_quantity) DEFAULT 1
);