import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const Card = (props) => {
	const { id } = props.route.params;
	const questions = useSelector((state) => state.decks[id].questions);
	const [nextQ, setNextQ] = useState(0);
	const navigation = useNavigation();
	const [showAnswer, setShowAnswer] = useState(false);
	const [index, setIndex] = useState(0);
	const [completed, setCompleted] = useState(false);

	const [correctAnswers, setCorrectAnswers] = useState(0);
	const [wrongAnswers, setWrongAnswers] = useState(0);

	useEffect(() => {
		console.log('leaving');
		if (!questions[nextQ]) {
			navigation.goBack();
		}
		if (completed) {
			tidyUp();
		}
	}, [completed]);

	// console.log('£££: ', answer);

	function tidyUp() {
		console.log('tidying...');
		setCorrectAnswers(0);
		setWrongAnswers(0);
		setNextQ(0);
		setIndex(0);
		setCompleted(false);
		navigation.navigate('Result', { id, questions, correctAnswers, wrongAnswers });
	}

	function next() {
		if (index + 1 !== questions.length) {
			setIndex(index + 1);
		} else {
			setIndex(index);
			console.log('user completed quiz');
			setCompleted(true);
		}
	}

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
					<Text>{correctAnswers}</Text>
					<Text>{wrongAnswers}</Text>
					<Text style={styles.question}>{questions[index].question}</Text>
					<Text>
						{index + 1} / {questions.length}
					</Text>
					<Pressable style={styles.button} onPress={() => setShowAnswer(!showAnswer)}>
						<Text style={[styles.text, styles.show]}>Show Answer</Text>
					</Pressable>
					<View style={styles.choice}>
						<Pressable
							style={[styles.button, styles.incorrect]}
							onPress={() => {
								next();
								setWrongAnswers(wrongAnswers + 1);
							}}>
							<Text style={styles.text}>Incorrect</Text>
						</Pressable>
						<Pressable
							style={[styles.button, styles.correct]}
							onPress={() => {
								next();
								setCorrectAnswers(correctAnswers + 1);
							}}>
							<Text style={styles.text}>Correct</Text>
						</Pressable>
					</View>
				</View>
			</View>
		);
	}
};

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

export default Card;
