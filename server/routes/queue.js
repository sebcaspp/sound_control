var express = require('express');
var router = express.Router();
var addQueue = require('../public/javascripts/SpotifyUserQueries').addQueue



router.put('/:trackUri', function(req, res, next) {
  const trackUri = req.params.trackUri;
  addQueue(trackUri)
  .then(
    function(data) {
      res.send(data)
    },
    function(error) {
      console.log("error getting access token:", error);      
      res.send({ error: 'error add track' })
    }
  )
});


router.delete('/delete', function(req, res, next) {
    
});




module.exports = router;