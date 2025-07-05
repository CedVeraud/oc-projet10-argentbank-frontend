import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  error: null,
  isAuthenticated: false,
  email: null,
  firstName: null,
  lastName: null,
  userName: null,
  showForm: false,
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
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName;
      const { rememberMe, token } = action.payload;
      if (rememberMe) {
        localStorage.setItem("token", token);
        localStorage.setItem("rememberMe", "true");
      }

      if (action.payload.rememberMe) {
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("rememberMe", "true");
      }
      state.token = action.payload.token;
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
      const rememberMe = localStorage.getItem("rememberMe") === "true";
      const token = localStorage.getItem("token");

      if (rememberMe && token) {
        state.token = token;
        state.isAuthenticated = true;
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("rememberMe");
        state.token = null;
        state.isAuthenticated = false;
      }
    },
    showEditUserName: (state) => {
      state.showForm = true;
    },

    hideEditUserName: (state) => {
      state.showForm = false;
    },

    editSuccess: (state, action) => {
      state.userName = action.payload.userName;
    },
  },
});

export const {
  loginSuccess,
  loginFailure,
  logout,
  checkLocalStorageToken,
  showEditUserName,
  hideEditUserName,
  editSuccess,
} = authSlice.actions;

export default authSlice.reducer;