import { configureStore } from '@reduxjs/toolkit';
import volumReducer from '../slices/volumSlice';

export default configureStore({
  reducer: {
    volum: volumReducer,
  },
});
