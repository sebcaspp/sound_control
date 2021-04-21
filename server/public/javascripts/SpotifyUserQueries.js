const spotifyApi = require('./SpotifyApi').spotifyApi;



function getList() {
    return(
        spotifyApi
        .getAlbum('6Kc8A5gqFZjDUeq77xSAK6', { limit: 10, offset: 20 })
        .then(
            function(data) {
                console.log('Album information', data.body);
                return data.body
            }
        )
    );
}


function getCommonList(listId) {
    return(
        spotifyApi
        .getPlaylist(listId, { limit: 10, offset: 20 })
        .then(
            function(data) {
                console.log('Album information', data.body);
                return data.body
            }
        )
    );
}

function addQueue(trackId){
    return(
        spotifyApi
        .addToQueue(trackId)
        .then(
            function(data) {
                console.log(' Add track to queue ', data.body);
                return data.body
            }
        )
    );
}

function getnameId(){
    return(
        spotifyApi
        .getMe()
        .then(
            function(data) {
                console.log(' Add track to queue ', data.body);
                return data.body
            }
        )
    )
}

function getPlaylist(nameId){
    return(
        spotifyApi
        .getUserPlaylists(nameId)
        .then(
            function(data) {
                console.log(' ', data.body);
                return data.body
            }
        )
    )
}

module.exports = {
    getPlaylist   : getPlaylist,
    getnameId     : getnameId,
    addQueue      : addQueue,
    getList       : getList,
    getCommonList : getCommonList
}   