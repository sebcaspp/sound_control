import { createSlice } from '@reduxjs/toolkit';
import VolumControlService from '../services/volumControlService'

export const volumSlice = createSlice({
  name: 'volum',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      console.log( "value incremented, actual " + state.value )
      VolumControlService.incrementVolum();
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    setValue: (state, action) => {
      console.log("value changed -> " + action.payload)
      state.value = Number(action.payload) || 0;
    },
  },
});

export const { increment, decrement, setValue } = volumSlice.actions;

export const selectVolum = state => state.volum.value;

export default volumSlice.reducer;
