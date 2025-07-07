//***/ CRÉER UN SLICE D'ÉTAT /***//
//***/  AVEC REDUX TOOLKIT  /***//

import { createSlice } from "@reduxjs/toolkit";

// État initial du slice auth
const initialState = {
  user: null,
  token: localStorage.getItem("token") || null, // Récupére le token stocké localement au chargement
  error: null, // Stocke les erreurs d'authentification éventuelles
  isAuthenticated: false, // Indique si l'utilisateur est connecté
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
      state.user = action.payload.user;
      state.error = null;
      state.isAuthenticated = true;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName;
      // gestion de la checkbox 'Remember me' (= true par défaut)
      const { rememberMe, token } = action.payload;
      if (rememberMe) {
        localStorage.setItem("token", token);
        localStorage.setItem("rememberMe", "true");
      }

      // Stocke le token uniquement s’il n’est pas déjà présent et que remember me est coché
      if (action.payload.rememberMe) {
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("rememberMe", "true");
      }
      state.token = action.payload.token;
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
      localStorage.removeItem("token");
      state.isAuthenticated = false;
    },

    // Vérifie la présence d’un token local pour restaurer l’état d’auth
    checkLocalStorageToken: (state) => {
      const rememberMe = localStorage.getItem("rememberMe") === "true";
      const token = localStorage.getItem("token");

      if (rememberMe && token) {
        state.token = token;
        state.isAuthenticated = true;
      } else {
        // Nettoyage si un token est présent mais que rememberMe est false
        localStorage.removeItem("token");
        localStorage.removeItem("rememberMe");
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
  checkLocalStorageToken,
  showEditUserName,
  hideEditUserName,
  editSuccess,
} = authSlice.actions;

// Export du reducer pour la configuration du store Redux
export default authSlice.reducer;