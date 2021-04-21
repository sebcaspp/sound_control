var express = require('express');
var router  = express.Router();

const authorizeUrl = require('../public/javascripts/spotifyDefinitions').authorizeUrl
const updateCode   = require('../public/javascripts/SpotifyApi').updateCode
const updateToken  = require('../public/javascripts/SpotifyApi').updateToken;
const getToken     = require('../public/javascripts/SpotifyApi').getToken;


router.get('/', function(req, res, next) {
  console.log("playerId ->", req.query.playerId);
  getToken()
  .then(function(data) {
    console.log('token: ', data);
    res.send(data)
  })
});

router.get('/update', function(req, res, next) {
  res.redirect(authorizeUrl);
});

router.get('/updated', function(req, res, next) {
  const code = req.query.code;
  console.log("code->", code);
  console.log("state->", req.query.state);
  updateCode(code);
  updateToken()
  .then(
    function(token) {
      res.redirect('/');
    }
  )
  .catch(function(error){
    console.error('error updating token',error);
  });

});

module.exports = router;
