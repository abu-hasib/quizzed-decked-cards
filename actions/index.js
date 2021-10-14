import { ADD_CARD, ADD_DECK } from './actionTypes';

export function addDeck(payload) {
	return {
		type: ADD_DECK,
		payload,
	};
}

export function addCard({ id, question }) {
	return {
		type: ADD_CARD,
		id,
		question,
	};
}
