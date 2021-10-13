import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export default function DeckListItem({ id }) {
	const decks = useSelector((state) => state.decks);
	return (
		<View style={styles.deckList}>
			<Text>{decks[id].name}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
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
