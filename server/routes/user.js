var express = require('express');
var router  = express.Router();
var getnameId = require('../public/javascripts/SpotifyUserQueries').getnameId

router.get('/',function(req,res,next){
    getnameId()
    .then(
        function(data) {
          res.send(data)
        },
        function(error) {
          console.log("error getting name ID:", error);      
          res.send({ error: 'error add track' })
        }
    )
})

module.exports = router