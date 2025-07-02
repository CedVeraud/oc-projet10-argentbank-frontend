import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  error: null,
  isAuthenticated: false,
  email: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.error = null;
      state.isAuthenticated = true;
      state.email = action.payload.email;

      if (!localStorage.getItem("token")) {
        localStorage.setItem("token", action.payload.token);
        state.token = action.payload.token;
      }
    },

    loginFailure: (state, action) => {
      state.error = action.payload;
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      localStorage.removeItem("token");
      state.isAuthenticated = false;
    },

    checkLocalStorageToken: (state) => {
      const token = localStorage.getItem("token");
      if (token) {
        state.isAuthenticated = true;
        state.token = token;
      } else {
        state.isAuthenticated = false;
        state.token = null;
      }
    },
  },
});

export const {
  loginSuccess,
  loginFailure,
  logout,
  checkLocalStorageToken,
  profileSuccess,
} = authSlice.actions;

export default authSlice.reducer;