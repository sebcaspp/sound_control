var express = require('express');
var router = express.Router();

const getToken = require('../public/javascripts/SpotifyApi').getToken;

/* GET home page. */
router.get('/', function(req, res, next) {
  getToken()
  .then(
    function(accessToken) {
      res.render('index', { version: '0.0.1' });
    },
    function(error){
      console.log("error getting access token:", error);
      res.redirect("/token/update")
    }
  ).catch(function(error){
    console.log("error getting access token:", error);
    res.redirect("/token/update")
  })

});

module.exports = router;