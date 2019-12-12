var queries = require('./queries');
var pool = queries.pool;

//Get all animals
const getAnimals = function(request, response){
    pool.query('SELECT * FROM animals_view ORDER BY id ASC', function (error, results) {
        if (error) {throw error;}
        response.status(200).json(results.rows);
    })
};

//Get all the animals of a specie
const getDogs = function (request, response){
    pool.query("SELECT * FROM animals_view WHERE specie = 'Dog' ", function (err, result) {
        if (err){throw err;}
        response.status(200).json(result.rows)
    })
};

const getCats = function (request, response){
    pool.query("SELECT * FROM animals_view WHERE specie = 'Cat'", function (err, result) {
        if (err){throw err;}
        response.status(200).json(result.rows)
    })
};

const getBirds = function (request, response){
    pool.query("SELECT * FROM animals_view WHERE specie = 'Bird'", function (err, result) {
        if (err){throw err;}
        response.status(200).json(result.rows)
    })
};

const getRodents = function (request, response){
    pool.query("SELECT * FROM animals_view WHERE specie = 'Rodent'", function (err, result) {
        if (err){throw err;}
        response.status(200).json(result.rows)
    })
};

//Add an animal
// curl --data "name=Madonna&id_specie=3&id_gender=1&id_arrival=4" http://localhost:3000/animals
const createAnimal = function (request, response) {
    const {name, id_specie, id_gender, id_arrival} = request.body;
    pool.query('INSERT INTO animals (id_animal, name, id_specie, id_gender, id_arrival, id_departure, adopter) VALUES  (DEFAULT, $1, $2, $3, $4, DEFAULT, DEFAULT)', [name, id_specie, id_gender, id_arrival, id_departure, adopter], function (err, result) {
        if(err){throw err;}
        response.status(201).send(`User added.\n`);
    })
};

//Mark an animal as adopted
//curl -X PUT -d "id=5" -d "id_departure=5" -d "adopter=John" http://localhost:3000/animals
const markAdopted = function (request, response) {
    const {id, id_departure, adopter} = request.body;
    pool.query('UPDATE animals SET id_departure = $1, adopter = $2 WHERE id_animal = $3', [id_departure, adopter, id], function (err, result) {
        if (err){throw err}
        response.status(200).send(`Animal mark as adopted.\n`);
    })
};

//Delete an animal
// curl -X "DELETE" -d "id=10" http://localhost:3000/animals
const deleteAnimal = function (request, response) {
    const {id} = request.body;
    pool.query('DELETE FROM animals WHERE id_animal = $1', [id], function (err, result) {
        if (err){throw err;}
        response.status(200).send(`User deleted.\n`);
    })
};

//Export functions
module.exports = {
    getAnimals,
    getDogs,
    getCats,
    getBirds,
    getRodents,
    createAnimal,
    markAdopted,
    deleteAnimal,
};