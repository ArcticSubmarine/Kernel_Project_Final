var express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();
const db_v = require('../volunteers');

/* GET home page. */

router.use(bodyParser.json());
router.use(
    bodyParser.urlencoded({extended: true,})
);
router.get('/', (req, res) => {
  res.json({info: 'Node.js, Express ans Postgres API'})
});


//Set the http request methods

//For volunteers
router.get('/volunteers', db_v.getAllVolunteers);
router.get('/volunteers/monday', db_v.GetVolunteersMonday);
router.get('/volunteers/tuesday', db_v.GetVolunteersTuesday);
router.get('/volunteers/wednesday', db_v.GetVolunteersWednesday);
router.get('/volunteers/thursday', db_v.GetVolunteersThursday);
router.get('/volunteers/friday', db_v.GetVolunteersFriday);
router.get('/volunteers/saturday', db_v.GetVolunteersSaturday);
router.get('/volunteers/sunday', db_v.GetVolunteersSunday);
router.post('/volunteers', db_v.createVolunteer);
router.delete('/volunteers', db_v.deleteVolunteer);

module.exports = router;
