--Inserts data in the tables "dates", "animals", "volunteers" and "stocks"

/*Date entries (1 = DEFAULT, 2 to 13 below)*/
INSERT INTO dates (id_date, day) VALUES (DEFAULT, 'July 4, 1995'),
                                        (DEFAULT, 'May 9, 1998'),
                                        (DEFAULT, 'April, 17, 2002'),
                                        (DEFAULT, 'March 30, 2003'),
                                        (DEFAULT, 'February 15, 2006'),
                                        (DEFAULT, 'October 9, 2007'),
                                        (DEFAULT, 'July, 19, 2013'),
                                        (DEFAULT, 'June, 28, 2017'),
                                        (DEFAULT, 'September 27, 2017'),
                                        (DEFAULT, 'February 20, 2018'),
                                        (DEFAULT, 'August 21, 2018'),
                                        (DEFAULT, 'March 4, 2019'),
                                        (DEFAULT, 'March 5, 2019');



/*Animals entries*/
INSERT INTO animals (id_animal, name, id_specie, id_gender, id_arrival, id_departure, adopter) VALUES (DEFAULT, 'Sepia', 2, 1, 1 , 2, 'Unknown'),
                                                                                                      (DEFAULT, 'Sprat', 2, 2, 3 , 4, 'Arnold Tarrou'),
                                                                                                      (DEFAULT, 'Bunny', 5, 2, 5, 6, 'Clarisse Tarrou'),
                                                                                                      (DEFAULT, 'Rammon', 3, 2, 7, 8, 'Sophie Gottlieb');

/*Volunteers entries*/
INSERT INTO volunteers (id_volunteer, name, surname, id_working_day,id_arrival, id_departure, id_gender) VALUES (DEFAULT, 'Anna', 'Karas', 6, 7, 12, 2),
                                                                                                                (DEFAULT, 'Guillaume', 'Brize', 8, 10, 11, 3),
                                                                                                                (DEFAULT, 'Mathieu', 'Boure', 4, 2, 13, 3);

/*Stocks entries*/
INSERT INTO stocks (id_stock, id_specie, id_delivery_date, id_quantity_delivered) VALUES (DEFAULT, 2, 12, 3),
                                                                                         (DEFAULT, 3, 13, 2);