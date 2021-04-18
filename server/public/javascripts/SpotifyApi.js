var SpotifyWebApi = require('spotify-web-api-node');
const { clientId, clientSecret, redirectUri, scope } = require('./spotifyDefinitions');

var accessToken    = '';
var refreshToken   = '';
var expirationTime = 10;

const spotifyApi = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: clientSecret,
    redirectUri: redirectUri
  });

function updateToken() {
    spotifyApi.authorizationCodeGrant(code).then(
        function(data) {
          console.log('The token expires in ' + data.body['expires_in']);
          console.log('The access token is ' + data.body['access_token']);
          console.log('The refresh token is ' + data.body['refresh_token']);

          accessToken    = data.body['access_token'];
          refreshToken   = data.body['refresh_token'];
          expirationTime = data.body['expires_in'];
      
          // Set the access token on the API object to use it in later calls
          spotifyApi.setAccessToken(accessToken);
          spotifyApi.setRefreshToken(refreshToken);
        },
        function(err) {
          console.log('Something went wrong!', err);
        }
      )
}

function getToken() {
    spotifyApi.getMe()
    .then(
        function(data) {

        },
        function(error){
            
        }
    )
}