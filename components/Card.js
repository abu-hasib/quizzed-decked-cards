import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export default function Card({ route }) {
	const { id } = route.params;
	const questions = useSelector((state) => state.decks[id].questions);
	const [nextQ, setNextQ] = useState(0);
	const navigation = useNavigation();
	const [showAnswer, setShowAnswer] = useState(false);
	const [answersCount, setAnswersCount] = useState(1);

	const handlePress = () => {
		console.log('Pressing');
		// nextQ < questions.length - 1 ? setNextQ
		if (nextQ < questions.length - 1) {
			setNextQ(nextQ + 1);
			setAnswersCount(answersCount + 1);
		} else {
			setNextQ(0);
			// setAnswersCount(answersCount + 1);
			navigation.navigate('Result', { id, questions, answersCount });
		}
	};
	{
		return showAnswer ? (
			<View>
				<Text>{questions[nextQ].answer}</Text>

				<Pressable style={styles.button} onPress={() => setShowAnswer(!showAnswer)}>
					<Text style={styles.text}>Back</Text>
				</Pressable>
			</View>
		) : (
			<View>
				<Text>{questions[nextQ].question}</Text>
				<Text>
					{nextQ + 1} / {questions.length}
				</Text>
				<Pressable style={styles.button} onPress={() => setShowAnswer(!showAnswer)}>
					<Text style={styles.text}>Show Answer</Text>
				</Pressable>
				<View style={styles.choice}>
					<Pressable style={styles.button} onPress={() => setShowAnswer(!showAnswer)}>
						<Text style={styles.text}>Incorrect</Text>
					</Pressable>
					<Pressable style={styles.button} onPress={handlePress}>
						<Text style={styles.text}>Correct</Text>
					</Pressable>
				</View>
			</View>
		);
	}
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
