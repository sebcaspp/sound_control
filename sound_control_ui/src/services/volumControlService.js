import apiService from './ApiService'
import {
  decrement,
  increment,
  setValue
} from '../slices/volumSlice';

const volumControlService = {
    
    incrementVolum: () => dispatch => {
      const path = '/volum/increment';
      const params = {
        value: 1
      };

      dispatch( increment() );
      apiService.put(path, params)
        .then(function (response) {            
            console.log( "calling server -> " + response);
          })
          .catch(function (error) {
            console.log("error calling server -> " + error);
          });
    },

    decrementVolum: () => dispatch => {
      const path = '/volum/decrement';
      const params = {
        value: 1
      };

      dispatch( decrement() );
      apiService.put(path, params)
      .then(function (response) {            
        console.log( "calling server -> " + response);
      })
      .catch(function (error) {
        console.log("error calling server -> " + error);
      });      
    },

    setVolum: amount => dispatch =>  {
      const path = '/volum/set';
      const params = {
        value: amount
      };

      dispatch( setValue(amount) );
      apiService.put(path, params)
      .then(function (response) {            
        console.log( "calling server -> " + response);
      })
      .catch(function (error) {
        console.log("error calling server -> " + error);
      });
    }

};

export default volumControlService;

export const { incrementVolum, decrementVolum, setVolum } = volumControlService;
