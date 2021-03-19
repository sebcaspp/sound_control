import React, { useState } from 'react';
import SlideVolumControl from '../../components/SlideVolumControl'
import { useSelector, useDispatch } from 'react-redux';
import {  selectVolum } from '../../slices/volumSlice'
import {
  decrementVolum,
  incrementVolum,
  setVolum,
} from '../../services/volumControlService'



export function VolumControl() {
    const volum = useSelector(selectVolum);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    return ( 
        <div className="d-flex p-5">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={ () => dispatch( incrementVolum() ) }
            >
            +
            </button>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={ () => dispatch( decrementVolum() ) }
            >
            -
            </button>
            <SlideVolumControl 
              value = { volum }
              disable = { false }
              handleOnChange = { ( event ) => dispatch( setVolum( event.target.value ) ) } 
            />
        </div>
     );
}