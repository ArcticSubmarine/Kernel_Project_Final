var queries = require('./queries');
var pool = queries.pool;

//Get all volunteers
const getAllVolunteers = function (request, response) {
    pool.query('SELECT * FROM volunteers_view ORDER BY \"Id\" DESC', function (err, result) {
        if (err){throw err;}
        response.status(200).json(result.rows);
    });
};


//Get volunteers by working day
const GetVolunteersMonday = function (request, response) {
    pool.query('SELECT * FROM volunteers_view WHERE "Working day" = \'Monday\'', function (error, result) {
        if (error){throw error;}
        response.status(200).json(result.rows);
    })
};

const GetVolunteersTuesday = function (request, response) {
    pool.query('SELECT * FROM volunteers_view WHERE "Working day" = \'Tuesday\'', function (error, result) {
        if (error){throw error;}
        response.status(200).json(result.rows);
    })
};

const GetVolunteersWednesday = function (request, response) {
    pool.query('SELECT * FROM volunteers_view WHERE "Working day" = \'Wednesday\'', function (error, result) {
        if (error){throw error;}
        response.status(200).json(result.rows);
    })
};

const GetVolunteersThursday = function (request, response) {
    pool.query('SELECT * FROM volunteers_view WHERE "Working day" = \'Thursday\'', function (error, result) {
        if (error){throw error;}
        response.status(200).json(result.rows);
    })
};

const GetVolunteersFriday = function (request, response) {
    pool.query('SELECT * FROM volunteers_view WHERE "Working day" = \'Friday\'', function (error, result) {
        if (error){throw error;}
        response.status(200).json(result.rows);
    })
};

const GetVolunteersSaturday = function (request, response) {
    pool.query('SELECT * FROM volunteers_view WHERE "Working day" = \'Saturday\'', function (error, result) {
        if (error){throw error;}
        response.status(200).json(result.rows);
    })
};

const GetVolunteersSunday = function (request, response) {
    pool.query('SELECT * FROM volunteers_view WHERE "Working day" = \'Sunday\'', function (error, result) {
        if (error){throw error;}
        response.status(200).json(result.rows);
    })
};


//Add a volunteer
// curl --data "name=Mickael&surname=Johnny&id_birthday=5&id_working_day=1&id_arrival=10&id_departure=12&id_gender=2" http://localhost:3000/volunteers
const createVolunteer = function (request, response) {
    const {name, surname, id_birthday, id_working_day, id_arrival, id_departure, id_gender} = request.body;
    pool.query('INSERT INTO volunteers (id_volunteer, name, surname, id_birthday, id_working_day, id_arrival, id_departure, id_gender) VALUES  (DEFAULT, $1, $2, $3, $4, $5, $6, $7)', [name, surname, id_birthday, id_working_day, id_arrival, id_departure, id_gender], function (err, result) {
        if(err){throw err;}
        response.status(201).send(`User added.\n`);
    })
};

//Delete a volunteer
// curl -X "DELETE" -d "id=2" http://localhost:3000/volunteers
const deleteVolunteer = function (request, response) {
    const {id} = request.body;
    pool.query('DELETE FROM volunteers WHERE id_volunteer = $1', [id], function (err, result) {
        if (err){throw err;}
        response.status(200).send(`User deleted.\n`);
    })
};

module.exports = {
    getAllVolunteers,
    GetVolunteersMonday,
    GetVolunteersTuesday,
    GetVolunteersWednesday,
    GetVolunteersThursday,
    GetVolunteersFriday,
    GetVolunteersSaturday,
    GetVolunteersSunday,
    createVolunteer,
    deleteVolunteer,
};
