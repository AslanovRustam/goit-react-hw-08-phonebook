import { createSlice } from '@reduxjs/toolkit;
import operations from './contacts-operations'


const initialState = {
    user: { name: null, email: null },
    token: null,
    isloggedIn: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraRedusers: {
        [operations.register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.user = action.payload.token;
            state.isloggedIn = true;
        },
         [operations.logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.user = action.payload.token;
            state.isloggedIn = true;
        },
    },
})

export default authSlice.reducer;