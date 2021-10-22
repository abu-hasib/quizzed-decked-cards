import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Result({ route }) {
	const navigation = useNavigation();
	const { id, answersCount, questions } = route.params;
	return (
		<View style={styles.container}>
			<Text style={styles.headingText}>Result</Text>
			<Text>
				Score: {answersCount}/{questions.length}
			</Text>
			<View style={styles.choice}>
				<Pressable style={styles.button} onPress={() => navigation.navigate('Deck', { id })}>
					<Text style={styles.text}>Back to Deck</Text>
				</Pressable>
				<Pressable style={styles.button} onPress={() => navigation.navigate('Quiz', { id })}>
					<Text style={styles.text}>Restart Quiz</Text>
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
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		width: '80%',
		// backgroundColor: 'purple',
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'black',
	},
	choice: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 48,
	},
	headingText: {
		fontSize: 24,
		fontWeight: 'bold',
	},
});
