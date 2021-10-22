import { _addCardToDeck, _getDecks, _saveDeckTitle } from '../helpers';
import { ADD_CARD, ADD_DECK, RECEIVE_DECKS } from './actionTypes';

export function handleAppStart() {
	return (dispatch) => {
		_getDecks()
			.then((payload) => dispatch(receiveDecks(JSON.parse(payload))))
			.catch((e) => console.log('***: ', e));
	};
}

function receiveDecks(payload) {
	return {
		type: RECEIVE_DECKS,
		payload,
	};
}

function addDeck(payload) {
	return {
		type: ADD_DECK,
		payload,
	};
}

export function handleAddDeck(payload) {
	return async (dispatch) => {
		_saveDeckTitle(payload);
		dispatch(addDeck(payload));
	};
}

export function addCard({ id, question }) {
	return {
		type: ADD_CARD,
		id,
		question,
	};
}

export function handleAddCardToDeck({ id, question }) {
	return async (dispatch) => {
		_addCardToDeck(id, question);
		dispatch(addDeck(id, question));
	};
}
