var queries = require('./queries');
var pool = queries.pool;

//Get all animals
const getStocks = function(request, response){
    pool.query('SELECT * FROM stocks_view ORDER BY \"Delivery day\" DESC', function (error, results) {
        if (error) {throw error;}
        response.status(200).json(results.rows);
    })
};

//Get the stocks for a special specie
const getDogsStocks = function (request, response){
    pool.query("SELECT * FROM stocks_view WHERE \"Specie\" = 'Dog'", function (err, result) {
        if (err){throw err;}
        response.status(200).json(result.rows)
    })
};

const getCatsStocks = function (request, response){
    pool.query("SELECT * FROM stocks_view WHERE \"Specie\" = 'Cat'", function (err, result) {
        if (err){throw err;}
        response.status(200).json(result.rows)
    })
};

const getBirdsStocks = function (request, response){
    pool.query("SELECT * FROM stocks_view WHERE \"Specie\" = 'Bird'", function (err, result) {
        if (err){throw err;}
        response.status(200).json(result.rows)
    })
};

const getRodentsStocks = function (request, response){
    pool.query("SELECT * FROM stocks_view WHERE \"Specie\" = 'Rodent'", function (err, result) {
        if (err){throw err;}
        response.status(200).json(result.rows)
    })
};

//Add Delivery
// curl --data "id_specie=3&id_delivery_date=12&id_quantity_delivered=3" http://localhost:3000/stocks
const createDelivery = function (request, response) {
    const {id_specie, id_delivery_date, id_quantity_delivered} = request.body;
    pool.query('INSERT INTO stocks (id_stock, id_specie, id_delivery_date, id_quantity_delivered) VALUES  (DEFAULT, $1, $2, $3)', [id_specie, id_delivery_date, id_quantity_delivered], function (err, result) {
        if(err){throw err;}
        response.status(201).send(`Delivery added.\n`);
    })
};


//Delete a stock entry
// curl -X "DELETE" -d "id=2" http://localhost:3000/stocks
const deleteStock = function (request, response) {
    const {id} = request.body;
    pool.query('DELETE FROM stocks WHERE id_stock = $1', [id], function (err, result) {
        if (err){throw err;}
        response.status(200).send(`Stock deleted.\n`);
    })
};

//Export functions
module.exports = {
    getStocks,
    getDogsStocks,
    getCatsStocks,
    getBirdsStocks,
    getRodentsStocks,
    createDelivery,
    deleteStock,
};