var express = require('express');
var router = express.Router();

const getList = require('../public/javascripts/SpotifyUserQueries').getList;

/* GET home page. */
router.get('/:listId', function(req, res, next) {
  const listId  = req.params.listId;
  getList(listId)
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