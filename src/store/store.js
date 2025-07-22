import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import storageLocal from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import authReducer from './auth/authSlice';

let selectedStorage = storageSession;

const persistConfig = {
	key: 'root',
	storage: {
		getItem: (...args) => selectedStorage.getItem(...args),
		setItem: (...args) => selectedStorage.setItem(...args),
		removeItem: (...args) => selectedStorage.removeItem(...args),
	},
	whitelist: ['auth'],
};

const rootReducer = combineReducers({
	auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export const persistor = persistStore(store);

export const updateStorageType = (rememberMe) => {
	selectedStorage = rememberMe ? storageLocal : storageSession;
};
