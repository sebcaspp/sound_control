import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import TrackComponent from './TrackComponent';

class TrackListComponent extends Component {

    render() { 
        const { tracks, disableAdd, disableRemove, handleOnAdd, handleOnRemove  } = this.props;

        const trackComponents = tracks.map(function(track){
            return( 
                <Col>
                    <TrackComponent                       
                        track          = { track }                       
                        disableAdd     = { disableAdd }
                        disableRemove  = { disableRemove }
                        add            = { handleOnAdd }
                        remove         = { handleOnRemove }
                    />
                </Col>                
            );
        });

        return (
                <Container fluid={true}>
                    <Row lg={1} md={2} sm={1} >
                        { trackComponents }
                    </Row>                    
                </Container>
          );
    }    

}
 
export default TrackListComponent;