import { configureStore } from '@reduxjs/toolkit';
import volumReducer from '../slices/volumSlice';
import tracksReducer from '../slices/tracksSlice';

export default configureStore({
  reducer: {
    volum  : volumReducer,
    tracks : tracksReducer
  },
});
