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

module.exports = {
    getList       : getList,
    getCommonList : getCommonList
}