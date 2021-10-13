import { ADD_DECK } from './actionTypes';

export function addDeck(deck) {
	return {
		type: ADD_DECK,
		deck,
	};
}
