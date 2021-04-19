import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';


class TrackComponent extends Component {

    render() { 
        const { track, disableAdd, disableRemove  } = this.props;

        return ( 
            <Jumbotron fluid>
                <Container fluid="sm">
                    <Row  >
                        <h1> { track.name } </h1>                        
                    </Row>
                    <Row>
                        <h2>  { track.album.name } </h2>
                    </Row>
                    <Row>
                        <Button variant="primary" size="sm" disabled={ disableAdd }> + </Button>
                        <Button variant="danger" size="sm" disabled={ disableRemove }> - </Button>
                    </Row>
                </Container>
          </Jumbotron>
          );
    }    

}
 
export default TrackComponent;