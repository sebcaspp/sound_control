import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import SlideVolumControl from '../../components/SlideVolumControl'
import TrackListComponent from '../../components/TrackListComponent'

import { getCommontList } from '../../services/spotifyService';

import {  selectVolum } from '../../slices/volumSlice';
import {  selectTracks } from '../../slices/tracksSlice';

import {
  decrementVolum,
  incrementVolum,
  setVolum,
} from '../../services/volumControlService'



export function VolumControl() {
    const volum = useSelector(selectVolum);
    const tracks = useSelector(selectTracks);

    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    useEffect(() => {
      dispatch( getCommontList() )      
    }, []);

    return ( 
        <Container>
          <Row>
            <TrackListComponent
              tracks = { tracks }
            />
          </Row>
          <Row md={3} >
            <Button variant="primary" size="sm" onClick={ () => dispatch( incrementVolum() ) } >
            +
            </Button>
            <Button variant="primary" size="sm" onClick={ () => dispatch( decrementVolum() ) } >
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