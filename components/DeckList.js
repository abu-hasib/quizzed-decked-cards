import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import DeckListItem from './DeckListItem';

const io = {
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

export default function DeckList({ navigation }) {
	const decks = useSelector((state) => Object.keys(state.decks));
	const tempdecks = useSelector((state) => state.decks);
	return (
		<View>
			<Text style={styles.headingText}>Decks</Text>
			{/* <FlatList data={decks} renderItem={({ item }) => <DeckListItem key={item} id={item} />} /> */}
			<ScrollView>
				{decks.map((key) => (
					<DeckListItem key={key} id={key} />
				))}
			</ScrollView>
			<Button title='Go to Details' onPress={() => navigation.navigate('TestScreen')} />
		</View>
	);
}

const styles = StyleSheet.create({
	headingText: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	deckList: {
		padding: 30,
		shadowRadius: 10,
		backgroundColor: '#eee',
		marginVertical: 10,
		shadowColor: '10px 10px 36px 0px rgba(0,0,0,0.75)',
		borderRadius: 8,
		alignItems: 'center',
	},
});
