import { apiConstructor } from './ApiService'
import {
  tracksUpdated
} from '../slices/tracksSlice';

const PORT = 5000;
const baseUrl = 'http://192.168.0.15:' + PORT;
const apiService = apiConstructor(baseUrl);

const spotifyService = {
    
    getCommontList: () => dispatch => {
      const path = '/query/commonList';
      const params = {
        listId: '1gg8wIgCgsAkBddb4WXFeT'
      };

      apiService.get(path, params)
        .then(function (response) {            
            console.log( "getting commonList response -> " + response);
            const tracks = response.data.tracks.items.map(function(item) {
              return item.track;
            });
            console.log('tracks -> ', tracks);

            dispatch( tracksUpdated(tracks) );
          })
          .catch(function (error) {
            console.log("error getting commonList -> " + error);
          });
    },


};

export default spotifyService;

export const { getCommontList } = spotifyService;
