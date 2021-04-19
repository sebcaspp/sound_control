import { createSlice } from '@reduxjs/toolkit';

export const tracksSlice = createSlice({
  name: 'tracks',
  initialState: {
    value: [],
  },
  reducers: {
    tracksUpdated: (state, action) => {
      console.log( "tracks updated " + action.payload )      
      state.value = action.payload || [];
    }
  },
});

export const { tracksUpdated } = tracksSlice.actions;

export const selectTracks = state => state.tracks.value;

export default tracksSlice.reducer;
