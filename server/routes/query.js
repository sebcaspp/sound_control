var express = require('express');
var router = express.Router();

const getList = require('../public/javascripts/SpotifyUserQueries').getList;
const  getCommonList = require('../public/javascripts/SpotifyUserQueries').getCommonList;

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


router.get('/commonList', function(req, res, next) {
  const listId  = req.query.listId;
  getCommonList(listId)
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