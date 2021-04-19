import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

import TrackComponent from './TrackComponent';


class TrackListComponent extends Component {

    render() { 
        const { tracks, disableAdd, disableRemove  } = this.props;

        const trackComponents = tracks.map(function(track){
            return(
                <ListGroup.Item>
                    <TrackComponent                       
                        track  = { { name: 'track' } }                       
                        disableAdd = { disableAdd }
                        disableRemove = { disableRemove }
                   />
                </ListGroup.Item>
            );
        });

        return ( 
            <ListGroup>
                { trackComponents }
            </ListGroup>
          );
    }    

}
 
export default TrackListComponent;