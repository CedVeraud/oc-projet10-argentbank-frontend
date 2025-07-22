import { apiFetch } from '../apiFetch';
import {
	loginSuccess,
	loginFailure,
	editSuccess,
	profileSuccess,
} from './authSlice';

import { updateStorageType } from '../store';

// LOGIN
export const login = (authInfos) => async (dispatch) => {
	try {
		updateStorageType(authInfos.rememberMe); // ← stockage choisi avant login

		const data = await apiFetch('http://localhost:3001/api/v1/user/login', {
			method: 'POST',
			body: JSON.stringify({
				email: authInfos.email,
				password: authInfos.password,
			}),
		});

		dispatch(
			loginSuccess({
				token: data.body.token,
				rememberMe: authInfos.rememberMe,
			})
		);
	} catch (error) {
		dispatch(loginFailure(error.message));
	}
};

//***/ GET USER PROFILE /***//
// Récupère les informations utilisateur (requiert le token)
export const profile = () => async (dispatch, getState) => {
	const token = getState().auth.token; // Récupération du token dans le state Redux

	try {
		// Appel GET pour récupérer les infos du profil
		const data = await apiFetch(
			'http://localhost:3001/api/v1/user/profile',
			{
				method: 'GET',
			},
			token // Le token est passé dans l'en-tête Authorization via apiFetch
		);

		// Utilise profileSuccess pour stocker les infos utilisateur
		dispatch(
			profileSuccess({
				email: data.body.email,
				firstName: data.body.firstName,
				lastName: data.body.lastName,
				userName: data.body.userName,
			})
		);
	} catch (data) {
		console.error('Error:', data.message); // Log d'erreur dans la console
	}
};

//***/ EDIT USERNAME /***//
// Met à jour le userName de l'utilisateur connecté
export const edit = (userName) => async (dispatch, getState) => {
	const token = getState().auth.token; // Récupération du token

	try {
		// Requête PUT pour mettre à jour le userName
		const data = await apiFetch(
			'http://localhost:3001/api/v1/user/profile',
			{
				method: 'PUT',
				body: JSON.stringify({ userName }),
			},
			token
		);

		// En cas de succès : on déclenche editSuccess avec le nouveau userName
		dispatch(editSuccess({ userName: data.body.userName }));
	} catch (error) {
		console.error(error.message); // Log d'erreur dans la console
	}
};
