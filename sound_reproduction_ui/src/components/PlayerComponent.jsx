import React, { Component } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';

class PlayerComponent extends Component {
    state = {
         token:                  ''
        ,autoPlay:                true
        ,initialVolume:           1
        ,name:                    'sound_control_player'
        ,persistDeviceSelection:  true
    }

    render() { 
        const { token, name, handleCallback } = this.props;
        console.log("token -> ", token )
        return ( 
            <div>                              
                <SpotifyPlayer
                    token                  = { token }                     
                    autoPlay               = { this.state.autoPlay }
                    initialVolume          = { this.state.initialVolume }
                    name                   = { name }
                    persistDeviceSelection = { this.state.persistDeviceSelection }
                    callback               = { handleCallback }
                />        
            </div>
          );
    }    

}
 
export default SpotifyPlayer;