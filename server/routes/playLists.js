var express = require('express');
var router  = express.Router();
var getPlaylist = require('../public/javascripts/SpotifyUserQueries').getPlaylist

router.get('/:userId',function(req,res,next){
    const userId = req.params.userId;
    getPlaylist(userId)
    .then(
        function(data) {
          res.send(data)
        },
        function(error) {
          console.log("error getting  playlists", error);      
          res.send({ error: 'error add track' })
        }
    )
})

module.exports = router