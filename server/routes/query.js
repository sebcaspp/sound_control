var express = require('express');
var router = express.Router();

const getList = require('../public/javascripts/SpotifyUserQueries').getList;

/* GET home page. */
router.get('/', function(req, res, next) {
  getList()
  .then(
    function(list) {
      res.send(list)
    },
    function(error) {
      console.log("error getting access token:", error);      
      res.send({ error: 'error getting list' })
    }
  )
});

module.exports = router;