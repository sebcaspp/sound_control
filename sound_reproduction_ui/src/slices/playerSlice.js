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
      console.log("time update -> " + action.payload.updateTime);
      console.log("actual state -> ", state.value);
      const detaTime = 300;
      const timeLeft = action.payload.expirationTime - detaTime - ( new Date().getTime() - action.payload.updateTime )/1000;
      
      console.log('time left -> ', timeLeft);
      state.expirationTime = timeLeft;
      state.value = action.payload.token;
    },
  },
});

export const { tokenUpdated } = playerSlice.actions;

export const selectToken = state => state.token.value;
export const selectExpirationTime = state => state.token.expirationTime;

export default playerSlice.reducer;
