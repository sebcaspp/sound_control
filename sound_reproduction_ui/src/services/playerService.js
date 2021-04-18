import apiService from './ApiService'
import { tokenUpdated } from '../slices/playerSlice';

const playerService = {

    updateToken: playerId => dispatch =>  {
      const path = '/token';
      const params = {
        playerId: playerId
      };

      apiService.get(path, params)
      .then(function (response) {           
        const token = response.data.token
        const expirationTime = response.data.expirationTime
        console.log( "calling server -> " + token, expirationTime);
        dispatch( tokenUpdated({token: token, expirationTime: expirationTime}) );
      })
      .catch(function (error) {
        console.log("error calling server -> " + error);
      });
    }

};

export default playerService;

export const { updateToken } = playerService;
