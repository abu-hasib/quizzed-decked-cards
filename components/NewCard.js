import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { addCard } from '../actions';

export default function NewCard({ route }) {
	const [question, setQuestion] = React.useState('');
	const [answer, setAnswer] = React.useState('');
	const dispatch = useDispatch();
	const navigation = useNavigation();

	const handlePress = () => {
		const { id } = route.params;
		const payload = {
			id,
			question: {
				question,
				answer,
			},
		};
		dispatch(addCard(payload));
		navigation.goBack();
	};

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<TextInput
				style={styles.input}
				onChangeText={(text) => setQuestion(text)}
				value={question}
				placeholder='Ask a question'
			/>
			<TextInput
				style={styles.input}
				onChangeText={(text) => setAnswer(text)}
				value={answer}
				placeholder='Provide an answer'
			/>
			<Pressable style={styles.button} onPress={handlePress}>
				<Text style={styles.text}>Submit</Text>
			</Pressable>
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
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		width: '80%',
		backgroundColor: 'green',
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'white',
	},
});
