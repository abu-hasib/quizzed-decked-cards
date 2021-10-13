import { ADD_DECK } from './actionTypes';

export function addDeck(payload) {
	return {
		type: ADD_DECK,
		payload,
	};
}
