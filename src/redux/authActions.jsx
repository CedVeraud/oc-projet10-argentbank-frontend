import { apiFetch } from "../utils/api";

import { loginSuccess, loginFailure, editSuccess } from "./authSlice";

// LOGIN
export const login = (authInfos) => async (dispatch) => {
  try {
    const data = await apiFetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      body: JSON.stringify({
        email: authInfos.email,
        password: authInfos.password,
      }),
    });

    dispatch(loginSuccess({
      token: data.body.token,
      rememberMe: authInfos.rememberMe,
    }));
  } catch (error) {
    console.error(error.message);
    dispatch(loginFailure(error.message));
  }
};

// GET USER PROFILE
export const profile = () => async (dispatch, getState) => {
  const token = getState().auth.token;  // Récupération du token dans le state Redux

  try {
    const data = await apiFetch(
      "http://localhost:3001/api/v1/user/profile",
      {
        method: "GET",
      },
      token
    );

    dispatch(
      loginSuccess({
        token,
        firstName: data.body.firstName,
        lastName: data.body.lastName,
        userName: data.body.userName,
      })
    );
  } catch (data) {
    console.error("Error:", data.message);
  }
};

// EDIT USERNAME
export const edit = (userName) => async (dispatch, getState) => {
  const token = getState().auth.token;

  try {
    const data = await apiFetch(
      "http://localhost:3001/api/v1/user/profile",
      {
        method: "PUT",
        body: JSON.stringify({ userName }),
      },
      token
    );

    dispatch(editSuccess({ userName: data.body.userName }));
  } catch (error) {
    console.error(error.message);
  }
};