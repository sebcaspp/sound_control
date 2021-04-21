var express = require('express');
var router  = express.Router();
var getPlaylist = require('../public/javascripts/SpotifyUserQueries').getPlaylist

router.get('/:playlistsId',function(req,res,next){
    const PlaylistsId = req.params.userPlaylists;
    getPlaylist(userPlaylists)
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