import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { handleAddDeck } from '../actions';

export default function New() {
	const [text, setText] = React.useState('');
	const dispatch = useDispatch();
	const navigation = useNavigation();

	const handlePress = () => {
		const newDeck = formatDeck(text);
		dispatch(handleAddDeck(newDeck));
		setText('');
		navigation.navigate('Deck', { id: text });
	};
	return (
		<View style={styles.container}>
			<Text style={styles.headingText}>Add Deck</Text>
			<View style={styles.form}>
				<TextInput
					style={styles.input}
					onChangeText={(text) => setText(text)}
					value={text}
					keyboardType='default'
				/>
				<Pressable style={styles.button} onPress={handlePress}>
					<Text>Create Deck</Text>
				</Pressable>
			</View>
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
		marginBottom: 32,
	},
	input: {
		height: 40,
		width: '80%',
		margin: 12,
		borderWidth: 1,
		padding: 10,
		borderRadius: 8,
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 8,
		elevation: 3,
		width: '80%',
		backgroundColor: 'green',
	},
	form: {
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
});

function formatDeck(deckname) {
	return {
		[deckname]: {
			title: deckname,
			questions: [],
		},
	};
}
