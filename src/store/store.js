//***/ CONFIGURER LE STORE REDUX /***//
//***/    AVEC REDUX TOOLKIT    /***//

import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer, // gestion de l'authentification utilisateur
  },
})