import { createSlice } from '@reduxjs/toolkit';

export const playListsSlice = createSlice({
  name: 'playLists',
  initialState: {
    value: [],
  },
  reducers: {
    playListsUpdated: (state, action) => {
      console.log( "play lists updated " + action.payload) ;

      const playLists = action.payload.items.map(function(item){
        console.log('playList name:', item.name )
        return {id: item.id, name: item.name };
      });

      state.value = playLists;
    }
  },
});

export const { playListsUpdated } = playListsSlice.actions;

export const selectPlayLists = state => state.playLists.value;

export default playListsSlice.reducer;
