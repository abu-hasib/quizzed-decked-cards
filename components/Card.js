import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function Card({ route }) {
	const { id } = route.params;
	const questions = useSelector((state) => state.decks[id].questions);
	const [nextQ, setNextQ] = useState(0);
	const navigation = useNavigation();
	const [showAnswer, setShowAnswer] = useState(false);
	const [answersCount, setAnswersCount] = useState(1);

	useEffect(() => {
		if (!questions[nextQ]) {
			navigation.goBack();
		}
	}, [nextQ]);

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
			<View style={styles.container}>
				<View style={styles.card}>
					<Text style={styles.question}>{questions[nextQ].answer}</Text>

					<Pressable style={styles.button} onPress={() => setShowAnswer(!showAnswer)}>
						<Text style={styles.show}>Back</Text>
					</Pressable>
				</View>
			</View>
		) : (
			<View style={styles.container}>
				<View style={styles.card}>
					<Text style={styles.question}>{questions[nextQ].question}</Text>
					<Text>
						{nextQ + 1} / {questions.length}
					</Text>
					<Pressable style={styles.button} onPress={() => setShowAnswer(!showAnswer)}>
						<Text style={[styles.text, styles.show]}>Show Answer</Text>
					</Pressable>
					<View style={styles.choice}>
						<Pressable
							style={[styles.button, styles.incorrect]}
							onPress={() => setShowAnswer(!showAnswer)}>
							<Text style={styles.text}>Incorrect</Text>
						</Pressable>
						<Pressable style={[styles.button, styles.correct]} onPress={handlePress}>
							<Text style={styles.text}>Correct</Text>
						</Pressable>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: 20,
		paddingTop: 50,
	},
	card: {
		height: '40%',
		padding: 30,
		shadowRadius: 10,
		backgroundColor: '#eee',
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 24,
		elevation: 3,
	},
	show: {
		color: 'black',
	},
	incorrect: {
		backgroundColor: 'red',
		marginRight: 16,
	},
	correct: {
		backgroundColor: 'green',
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: '#fff',
	},
	question: {
		fontSize: 24,
		fontWeight: '400',
	},
	choice: {
		flexDirection: 'row',
		alignItems: 'baseline',
	},
});
