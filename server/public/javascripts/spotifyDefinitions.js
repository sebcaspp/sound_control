
const clientId     = process.env.CLIENT_ID || '';
const clientSecret = process.env.CLIENT_SECRET || '';
const port          = process.env.PORT || '3000'
const redirectUri  = 'http://localhost:'+port+'/token/updated';
const scope         = "user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";

let authorizeUrl = 'https://accounts.spotify.com/authorize';
    authorizeUrl += "?client_id=" + client_id;
    authorizeUrl += "&response_type=code";
    authorizeUrl += "&redirect_uri=" + encodeURI(redirect_uri);
    authorizeUrl += "&show_dialog=true";
    authorizeUrl += "&scope=" + scope;


module.exports = {
    authorizeUrl: authorizeUrl,
    clientId    : clientId,
    clientSecret: clientSecret,
    scope       : scope,
    redirectUri : redirectUri
}