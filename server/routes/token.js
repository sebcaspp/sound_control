var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource ');
});

router.get('/update', function(req, res, next) {
  res.send('respond with a resource ');
});

router.get('/updated', function(req, res, next) {
  res.send('respond with a resource ');
});

module.exports = router;
