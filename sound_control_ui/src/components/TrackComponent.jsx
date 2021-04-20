import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast'


class TrackComponent extends Component {

    render() { 
        const { track, disableAdd, disableRemove  } = this.props;

        return (                                  
                <Toast show={true} >
                <Toast.Header closeButton={false}>
                  <img
                    src={track.album.images[2].url}
                    className="rounded mr-2"
                    alt=""
                  />
                  <strong className="mr-auto">{ track.name }</strong>
                  <small>
                    <Button variant="primary" size={'sm'} disabled={ disableAdd }>+</Button>
                    <Button variant="danger"  size={'sm'} disabled={ disableRemove }>-</Button>
                   </small>
                </Toast.Header>
                <Toast.Body>
                    <Container>  
                        <p>artist: {track.artists[0].name} </p>   
                        <p>album: { track.album.name }     </p>         
                        <Row>
                            
                        </Row>
                    </Container>
                </Toast.Body>
              </Toast>  
          );
    }    

}
 
export default TrackComponent;