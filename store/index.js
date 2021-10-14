import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reducer from '../reducers';

// const preloadedState = {};

const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
	devTools: process.env.NODE_ENV !== 'production',
	// preloadedState,
});

export default store;
