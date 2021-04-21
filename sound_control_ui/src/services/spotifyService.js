import { apiConstructor } from './ApiService'
import { tracksUpdated } from '../slices/tracksSlice';
import { userAdded } from '../slices/usersSlice';
import { playListsUpdated } from '../slices/playListsSlice';

const PORT = 5000;
const baseUrl = 'http://192.168.0.15:' + PORT;
const apiService = apiConstructor(baseUrl);

const spotifyService = {
    
    getPlayList: (listId) => dispatch => {
      const path = '/query/'+listId;
      const params = { };

      apiService.get(path, params)
        .then(function (response) {            
            console.log( "getting commonList response -> " + response );
            const tracks = response.data.tracks.items.map(function(item) {
              return item.track;
            });
            console.log('tracks -> ', tracks);
            const albumName = response.data.name;
            dispatch( tracksUpdated({albumName: albumName, tracks: tracks}) );
          })
          .catch(function (error) {
            console.log("error getting commonList -> " + error);
          });
    },   

    addTrackToQueue: (trackUri) => {
      const path = '/queue/'+trackUri;
      const params = { };

      apiService.put(path, params)
        .then(function (response) {            
            console.log( "adding track to queue response -> " + response.data );                        
          })
          .catch(function (error) {
            console.log("error adding track to queue -> " + error);
          });
    },

    getUser: () => dispatch => {
      const path = '/user';
      const params = { };

      apiService.get(path, params)
        .then(function (response) {            
            console.log( "getting user response -> " + response.data );  
            const userId = response.data.id;                      
            dispatch( userAdded( response.data ) );
            dispatch( getPlayLists(userId) );
          })
          .catch(function (error) {
            console.log("error getting user -> " + error);
          });
    },

    getPlayLists: (userId) => dispatch => {
      const path = '/playList/'+userId;
      const params = { };

      apiService.get(path, params)
        .then(function (response) {            
            console.log( "getting playLists response -> " + response.data );                        
            dispatch( playListsUpdated( response.data ))
          })
          .catch(function (error) {
            console.log("error getting playlists -> " + error);
          });
    },

};

export default spotifyService;

export const { getPlayList, addTrackToQueue, getUser, getPlayLists } = spotifyService;
