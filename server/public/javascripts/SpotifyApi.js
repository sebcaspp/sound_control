var SpotifyWebApi = require('spotify-web-api-node');
const { clientId, clientSecret, redirectUri, scope } = require('./spotifyDefinitions');

var code           = '';
var accessToken    = '';
var refreshToken   = '';
var expirationTime = 10;
var updateTime     = new Date();

const spotifyApi = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: clientSecret,
    redirectUri: redirectUri
  });

function updateToken() {
    console.log('code->', code);
        if(refreshToken==='' || refreshToken === undefined) {
        return(        
            spotifyApi.authorizationCodeGrant(code)
            .then(
                function(data) {
                    console.log('The token expires in ' + data.body['expires_in']);
                    console.log('The access token is ' + data.body['access_token']);
                    console.log('The refresh token is ' + data.body['refresh_token']);

                    accessToken    = data.body['access_token'];
                    refreshToken   = data.body['refresh_token'];
                    expirationTime = data.body['expires_in'];
                    updateTime     = new Date().getTime();
                
                    // Set the access token on the API object to use it in later calls
                    spotifyApi.setAccessToken(accessToken);
                    spotifyApi.setRefreshToken(refreshToken);
                    return ({ token: accessToken, expirationTime: expirationTime, updateTime: updateTime });
                }
            )
        );
    }
    else {
        console.log('refreshing token...');
        return (
            spotifyApi.refreshAccessToken()
            .then(function(data) {
                accessToken    = data.body['access_token'];
                expirationTime = data.body['expires_in'];
                updateTime     = new Date().getTime();

                spotifyApi.setAccessToken(accessToken);
                return ({ token: accessToken, expirationTime: expirationTime, updateTime: updateTime });
            }) 
        );
    }
}

function getToken() {
    if(accessToken!=='') {        
        const actualTime = new Date().getTime();
        const deltaTime  = 300;
        const timeLeft   = expirationTime - (actualTime - updateTime)/1000;

        console.log('time left', timeLeft);
        if( timeLeft < deltaTime ) {
            return (
                updateToken()
                        .then(
                            function(data){
                                return data;
                            }
                        )
            );
        }
        else{
            return (
                spotifyApi.getMe()
                .then(
                    function(data) {
                        return { token: accessToken, expirationTime: expirationTime, updateTime: updateTime };
                    },
                    function(error) {
                        console.log('refreshing token');
                        return (
                            updateToken()
                            .then(
                                function(data){
                                    return data;
                                }
                            )
                        );
                    }
                )
            );
        }
    }
    else {
        return Promise.reject("there is not accessToken");
    }    
}

module.exports = {
    spotifyApi  : spotifyApi,
    getToken    : getToken,
    updateToken : updateToken,
    updateCode  : function(newCode) {
        code = newCode;
    }
}