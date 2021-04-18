import { createSlice } from '@reduxjs/toolkit';

export const playerSlice = createSlice({
  name: 'token',
  initialState: {
    value: '',
    expirationTime: 10
  },
  reducers: {
    tokenUpdated: (state, action) => {
      console.log("value changed -> " + action.payload.token);
      console.log("actual state -> ", state.value);
      
      state.expirationTime = action.payload.expirationTime;
      state.value = action.payload.token;
    },
  },
});

export const { tokenUpdated } = playerSlice.actions;

export const selectToken = state => state.token.value;
export const selectExpirationTime = state => state.token.expirationTime;

export default playerSlice.reducer;
