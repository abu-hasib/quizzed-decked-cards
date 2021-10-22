import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function DeckListItem({ id, navigation }) {
	const decks = useSelector((state) => state.decks);
	const cardsCount = useSelector((state) => state.decks[id].questions.length);

	return (
		<TouchableHighlight key={id} onPress={() => navigation.navigate('Deck', { id })}>
			<View style={styles.deckItem}>
				<Text>{decks[id].title}</Text>
				<Text>{cardsCount} cards</Text>
			</View>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	deckItem: {
		padding: 30,
		shadowRadius: 10,
		backgroundColor: '#eee',
		marginVertical: 10,
		shadowColor: '10px 10px 36px 0px rgba(0,0,0,0.75)',
		borderRadius: 8,
		alignItems: 'center',
	},
	button: {
		marginBottom: 30,
		width: 260,
		alignItems: 'center',
		backgroundColor: '#2196F3',
	},
	buttonText: {
		textAlign: 'center',
		padding: 20,
		color: 'white',
	},
});
