var express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();
const db_a = require('../animals');

    /* GET home page. */

router.use(bodyParser.json());
router.use(
    bodyParser.urlencoded({extended: true,})
);
router.get('/', (req, res) => {
  res.json({info: 'Node.js, Express ans Postgres API'})
});


//Set the http request methods

//For animals
router.get('/animals', db_a.getAnimals);
router.get('/animals/dog', db_a.getDogs);
router.get('/animals/cat', db_a.getCats);
router.get('/animals/bird', db_a.getBirds);
router.get('/animals/rodent', db_a.getRodents);
router.post('/animals', db_a.createAnimal);
router.put('/animals', db_a.markAdopted);
router.delete('/animals', db_a.deleteAnimal);

module.exports = router;
