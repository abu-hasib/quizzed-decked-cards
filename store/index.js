import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { ADD_DECK } from '../actions/actionTypes';
import reducer from '../reducers';

// const preloadedState = {};

const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
	devTools: process.env.NODE_ENV !== 'production',
	// preloadedState,
});

store.dispatch({ type: ADD_DECK, payload: 'Deck 3' });

export default store;
