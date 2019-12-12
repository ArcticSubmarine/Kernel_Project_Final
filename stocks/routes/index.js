var express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();
const db_s = require('../stocks');

/* GET home page. */

router.use(bodyParser.json());
router.use(
    bodyParser.urlencoded({extended: true,})
);
router.get('/', (req, res) => {
  res.json({info: 'Node.js, Express ans Postgres API'})
});


//Set the http request methods

//For stocks
router.get('/stocks', db_s.getStocks);
router.get('/stocks/dog', db_s.getDogsStocks);
router.get('/stocks/cat', db_s.getCatsStocks);
router.get('/stocks/bird', db_s.getBirdsStocks);
router.get('/stocks/rodent', db_s.getRodentsStocks);
router.post('/stocks', db_s.createDelivery);
router.delete('/stocks', db_s.deleteStock);



module.exports = router;
