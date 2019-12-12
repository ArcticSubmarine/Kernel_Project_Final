--"working_days" table

--Drops if exists
DROP TABLE IF EXISTS working_days CASCADE;

--Creates
CREATE TABLE working_days (
    id_day SERIAL UNIQUE,
    day TEXT NOT NULL
);

--Inserts default value and possible values
INSERT INTO working_days (id_day, day) VALUES (DEFAULT, 'Undefined'),
                                              (DEFAULT, 'Monday'),
                                              (DEFAULT, 'Tuesday'),
                                              (DEFAULT, 'Wednesday'),
                                              (DEFAULT, 'Thursday'),
                                              (DEFAULT, 'Friday'),
                                              (DEFAULT, 'Saturday'),
                                              (DEFAULT, 'Sunday');