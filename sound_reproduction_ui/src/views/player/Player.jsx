import React, { useState, useEffect, useCallback } from 'react';
import PlayerComponent from '../../components/PlayerComponent'
import { useSelector, useDispatch } from 'react-redux';
import { selectToken, selectExpirationTime } from '../../slices/playerSlice'
import { updateToken } from '../../services/playerService'
import { STATUS, CallbackState } from 'react-spotify-web-playback';

//TODO: this requires autenthication 
export function Player() {
    const token = useSelector(selectToken);
    const expirationTime = useSelector(selectExpirationTime);
    const dispatch = useDispatch();

    const [playerId, setPlayerId] = useState('player-id-1');
    
    function scheduleUPdateToken(playerId, timeOut) {
      setTimeout(() => {
        dispatch( updateToken(playerId) )
      }, timeOut);
    }

    useEffect(() => {
      dispatch( updateToken(playerId) )
      scheduleUPdateToken(playerId, expirationTime)    
    }, []);

    const handleCallback = useCallback(({ type, ...state }) => {
      if (state.status === STATUS.ERROR && state.errorType === 'authentication_error') {
        console.log("error -> authentication_error")
        localStorage.removeItem('rswp_token');
        dispatch( updateToken(playerId) );
      }
    }, []);

    if(token == '' || token == 'undefined') {
      console.log("token->", token)
      console.log("expirationTime ->", expirationTime )
      return <p> loading...</p>
    }
    return ( 
        <div className="d-flex p-5">          
            <PlayerComponent 
              token    = { token }
              name     = 'sound_control_player'
              handleCallback = { handleCallback }
            /> 
        </div>
     );
}
