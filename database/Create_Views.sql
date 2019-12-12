--Creates views of the tables : "animals", "volunteers" and "stocks"

--Drops the views if already exist
DROP VIEW IF EXISTS animals_view CASCADE ;
DROP VIEW IF EXISTS volunteers_view CASCADE ;
DROP VIEW IF EXISTS stocks_view CASCADE ;

--Creates the view of the table "animals"
CREATE VIEW animals_view AS
    SELECT animals.id_animal AS "Id",
           animals.name AS "Name",
           species.specie AS "Specie",
           genders.gender AS "Gender",
           arrival.day AS "Day of arrival",
           departure.day AS "Day of departure",
           animals.adopter AS "Adopter"
FROM animals
INNER JOIN species USING (id_specie)
INNER JOIN genders USING (id_gender)
INNER JOIN dates arrival ON animals.id_arrival = arrival.id_date
INNER JOIN dates departure ON id_departure = departure.id_date;

--Creates the view of the table "volunteers"
CREATE VIEW volunteers_view AS
    SELECT id_volunteer AS "Id",
           name AS "Name",
           surname AS "Surname",
           birthday.day AS "Birthday",
           working_days.day AS "Working day",
           arrival.day AS "Day of arrival",
           departure.day AS "Day of departure",
           genders.gender AS "Gender"
FROM volunteers
INNER JOIN dates birthday ON volunteers.id_birthday = birthday.id_date
INNER JOIN dates arrival ON volunteers.id_arrival = arrival.id_date
INNER JOIN dates departure ON volunteers.id_departure = departure.id_date
INNER JOIN working_days ON volunteers.id_working_day = id_day
INNER JOIN genders USING (id_gender);

--Creates the view of the table "stocks"
CREATE VIEW stocks_view AS
    SELECT stocks.id_stock AS "Id",
           species.specie AS "Specie",
           dates.day AS "Delivery day",
           quantities.weight AS "Quantity delivered (kg)"
FROM stocks
INNER JOIN species USING (id_specie)
INNER JOIN dates ON stocks.id_delivery_date = id_date
INNER JOIN quantities ON stocks.id_quantity_delivered = id_quantity;