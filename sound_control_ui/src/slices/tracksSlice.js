import { createSlice } from '@reduxjs/toolkit';

export const tracksSlice = createSlice({
  name: 'tracks',
  initialState: {
    value: [],
    albumName: ''
  },
  reducers: {
    tracksUpdated: (state, action) => {
      console.log( "tracks updated " + action.payload )      
      state.value = action.payload.tracks || [];
      state.albumName = action.payload.albumName;
    }
  },
});

export const { tracksUpdated } = tracksSlice.actions;

export const selectTracks    = state => state.tracks.value;
export const selectAlbumName = state => state.tracks.albumName;

export default tracksSlice.reducer;
