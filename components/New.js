import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addDeck } from '../actions';

export default function New() {
	const [text, setText] = React.useState('');
	const dispatch = useDispatch();
	const handlePress = () => {
		console.log('handling...');
		dispatch(addDeck(text));
	};
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<TextInput
				style={styles.input}
				onChangeText={(text) => setText(text)}
				value={text}
				keyboardType='default'
			/>
			<Text>{text}</Text>
			<Button style={styles.button} title='Add Deck' onPress={handlePress} />
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		height: 40,
		width: '80%',
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
	button: {
		padding: 20,
		color: 'red',
		borderWidth: 3,
	},
});
