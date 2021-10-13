import { ADD_DECK } from '../actions/actionTypes';

const initialState = {
	Deck1: {
		name: 'Deck 1',
	},
	Deck2: {
		name: 'Deck 2',
	},
};

export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_DECK:
			console.log('£££: ', state);
			return { ...state, [action.payload.replace(/\s+/g, '')]: { name: action.payload } };

		default:
			return state;
	}
}
