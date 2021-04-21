import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    value: {},
    selectedUser: ''
  },
  reducers: {
    userAdded: (state, action) => {
      console.log( "user added " + action.payload.id ) 
      const userId = action.payload.id;
      state.value[userId] = action.payload;
      state.selectedUser = userId;
    }
  },
});

export const { userAdded } = usersSlice.actions;

export const selectUsers = state => state.users.value;
export const selectUser  = state => state.users.selectedUser;

export default usersSlice.reducer;
