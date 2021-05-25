import {createSlice} from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
  name: 'Auth',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const {setLoggedIn} = AuthSlice.actions;

export default AuthSlice.reducer;
