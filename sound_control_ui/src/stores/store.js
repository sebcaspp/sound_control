import { configureStore } from '@reduxjs/toolkit';
import volumReducer from '../slices/volumSlice';
import tracksReducer from '../slices/tracksSlice';
import usersReducer from '../slices/usersSlice';
import playListsReducer from '../slices/playListsSlice';

export default configureStore({
  reducer: {
    volum     : volumReducer,
    tracks    : tracksReducer,
    users     : usersReducer,
    playLists : playListsReducer
  },
});
