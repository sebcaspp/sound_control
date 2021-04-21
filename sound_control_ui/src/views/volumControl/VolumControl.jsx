import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'

import SlideVolumControl from '../../components/SlideVolumControl'
import TrackListComponent from '../../components/TrackListComponent'

import { getPlayList, getUser, addTrackToQueue, getPlayLists } from '../../services/spotifyService';

import {  selectVolum } from '../../slices/volumSlice';
import {  selectTracks, selectAlbumName } from '../../slices/tracksSlice';
import {  selectUsers, selectUser } from '../../slices/usersSlice';
import {  selectPlayLists } from '../../slices/playListsSlice';

import {
  decrementVolum,
  incrementVolum,
  setVolum,
} from '../../services/volumControlService';

export function VolumControl() {
    const volum           = useSelector(selectVolum);
    const tracks          = useSelector(selectTracks);
    const albumName       = useSelector(selectAlbumName);
    const users           = useSelector(selectUsers);
    const selectedUser    = useSelector(selectUser);
    const playLists       = useSelector(selectPlayLists);

    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    useEffect( () => {  }, [] );

    const playListsNav = playLists.map(function(playList){
      return (
      <NavDropdown.Item onClick={() => dispatch( getPlayList(playList.id) ) }>{ playList.name }</NavDropdown.Item>
      );
    });

    return ( 
      <Container fluid={true}>  

          <Navbar bg="light" expand="lg" sticky="top" >
            <Navbar.Brand onClick={ () => dispatch( getUser() ) } >Register new user</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link> { albumName } </Nav.Link>
              <Nav className="mr-auto">                                
                <NavDropdown title="PlayerList" id="basic-nav-dropdown">
                  { playListsNav }
                </NavDropdown>
              </Nav>
              
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
              
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#login">{ selectedUser }</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar>

          <Row>
            <TrackListComponent
              tracks         = { tracks }
              handleOnAdd    = { ( trackUri ) => addTrackToQueue( trackUri ) }
              handleOnRemove = { ( trackUri ) => console.log('removing track...', trackUri ) }
            />
          </Row>       
          <Row lg={3} md={2} sm={1} >
            <Button variant="primary" size={'lg'} onClick={ () => dispatch( incrementVolum() ) } >
            +
            </Button>
            <Button variant="primary" size={'lg'} onClick={ () => dispatch( decrementVolum() ) } >
            -
            </Button>
            <SlideVolumControl 
              value = { volum }
              disable = { false }
              handleOnChange = { ( event ) => dispatch( setVolum( event.target.value ) ) } 
            />
          </Row>          
        </Container>
     );
}