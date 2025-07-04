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
  profileSuccess,
  showEditUserName,
  hideEditUserName,
  editSuccess,
} = authSlice.actions;

export default authSlice.reducer;