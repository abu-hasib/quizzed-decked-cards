import { ADD_CARD, ADD_DECK } from '../actions/actionTypes';

const initialState = {
	React: {
		title: 'React',
		questions: [
			{
				question: 'What is React?',
				answer: 'A library for managing user interfaces',
			},
			{
				question: 'Where do you make Ajax requests in React?',
				answer: 'The componentDidMount lifecycle event',
			},
		],
	},
	JavaScript: {
		title: 'JavaScript',
		questions: [
			{
				question: 'What is a closure?',
				answer:
					'The combination of a function and the lexical environment within which that function was declared.',
			},
		],
	},
};

export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_DECK:
			return { ...state, ...action.payload };

		case ADD_CARD:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					questions: [...state[action.id].questions, action.question],
				},
			};
		default:
			return state;
	}
}
