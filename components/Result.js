import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Result({ route }) {
	const navigation = useNavigation();
	const { id, answersCount, questions } = route.params;
	return (
		<View>
			<Text>Result</Text>
			<Text>
				Score: {answersCount}/{questions.length}
			</Text>
			<View style={styles.choice}>
				<Pressable style={styles.button} onPress={() => navigation.navigate('Deck', { id })}>
					<Text style={styles.text}>Back to Deck</Text>
				</Pressable>
				<Pressable style={styles.button} onPress={() => navigation.navigate('Quiz', { id })}>
					<Text style={styles.text}>Restart</Text>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
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
		color: 'purple',
	},
	choice: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
});
