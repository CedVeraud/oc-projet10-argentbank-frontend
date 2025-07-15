//***/ CRÉER UN SLICE D'ÉTAT /***//
//***/  AVEC REDUX TOOLKIT  /***//

import { createSlice } from "@reduxjs/toolkit";

// État initial du slice auth
const initialState = {
  user: null,
  token: localStorage.getItem("token") || sessionStorage.getItem("token") || null, // Récupère le token stocké (local ou session)
  error: null, // Stocke les erreurs d'authentification éventuelles
  isAuthenticated: !!(localStorage.getItem("token") || sessionStorage.getItem("token")), // Déduit l'authentification
  email: null,
  firstName: null,
  lastName: null,
  userName: null,
  showForm: false, // Contrôle l'affichage du formulaire d'édition userName
};

// Création du slice 'auth' avec ses reducers
const authSlice = createSlice({
  name: "auth", // Nom du slice
  initialState, // État initial défini plus haut
  reducers: {
    // Connexion réussie : mise à jour du state avec les infos utilisateur
    loginSuccess: (state, action) => {
      const { token, rememberMe, email, firstName, lastName, userName, user } = action.payload;

      state.user = user;
      state.token = token;
      state.error = null;
      state.isAuthenticated = true;
      state.email = email;
      state.firstName = firstName;
      state.lastName = lastName;
      state.userName = userName;

      // Stocke le token dans le bon stockage selon le choix utilisateur
      if (rememberMe) {
        localStorage.setItem("token", token);
      } else {
        sessionStorage.setItem("token", token);
      }
    },

    // Connexion échouée : enregistrement de l'erreur
    loginFailure: (state, action) => {
      state.error = action.payload;
    },

    // Déconnexion : nettoyage complet de l’état et suppression du token
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      state.isAuthenticated = false;
      sessionStorage.removeItem("token");
      localStorage.removeItem("token");
    },

    // Vérifie la présence d'un token dans le stockage navigateur et met à jour le statut d'authentification dans le store
    checkStoredToken: (state) => {
      const token = localStorage.getItem("token") || sessionStorage.getItem("token");

      if (token) {
        state.token = token;
        state.isAuthenticated = true;
      } else {
        state.token = null;
        state.isAuthenticated = false;
      }
    },

    // Affiche le formulaire d’édition du nom d’utilisateur
    showEditUserName: (state) => {
      state.showForm = true;
    },

    // Cache le formulaire d’édition
    hideEditUserName: (state) => {
      state.showForm = false;
    },

    // Mise à jour du userName réussie
    editSuccess: (state, action) => {
      state.userName = action.payload.userName;
    },
  },
});

// Export des actions générées
export const {
  loginSuccess,
  loginFailure,
  logout,
  checkStoredToken,
  showEditUserName,
  hideEditUserName,
  editSuccess,
} = authSlice.actions;

// Export du reducer pour la configuration du store Redux
export default authSlice.reducer;
