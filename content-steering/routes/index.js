var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

let currentValues = {
  "VERSION": 1,
  "TTL": 5,
  "RELOAD-URI": "http://localhost:3003/steering",
  "SERVICE-LOCATION-PRIORITY": ["alpha","beta"]
}

/* GET steering message. */
router.get('/steering', function(req, res, next) {
  res.json(currentValues)
});

/* Change steering order. */
router.get('/alterSteering', function(req, res, next) {
  let newOrder = currentValues["SERVICE-LOCATION-PRIORITY"];
  currentValues["SERVICE-LOCATION-PRIORITY"] = newOrder.reverse();
  console.log(currentValues);
  res.json(currentValues);
});

module.exports = router;
