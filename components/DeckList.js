import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import DeckListItem from './DeckListItem';

export default function DeckList({ navigation }) {
	const decks = useSelector((state) => Object.keys(state.decks));

	return (
		<View style={styles.container}>
			<Text style={styles.headingText}>Decks</Text>
			<FlatList
				data={decks}
				renderItem={({ item }) => <DeckListItem id={item} navigation={navigation} />}
				keyExtractor={(item) => item}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: 20,
		paddingTop: 50,
	},
	headingText: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	deckList: {
		padding: 30,
		shadowRadius: 10,
		backgroundColor: '#eee',
		shadowColor: '10px 10px 36px 0px rgba(0,0,0,0.75)',
		borderRadius: 8,
		alignItems: 'center',
	},
});
