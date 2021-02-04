import { createSlice } from '@reduxjs/toolkit';
import operations from './contacts-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isloggedIn: false,
  isFetchingCurrent: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [operations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [operations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [operations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [operations.fetchCurrentUser.fulfilled](state, action) {
      state.user = { ...action.payload };
      state.isLoggedIn = true;
      state.isFetchingCurrent = false;
    },
    [operations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrent = true;
    },
    [operations.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrent = false;
    },
  },
});

// const authReducer = authSlice.reducer;

export default authSlice.reducer;
