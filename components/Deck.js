import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function Deck({ route }) {
	const { id } = route.params;
	const decks = useSelector((state) => state.decks);
	const questions = useSelector((state) => state.decks[id].questions);
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Text style={styles.header}>{decks[id].title}</Text>
			<View style={styles.tobechange}>
				<TouchableOpacity onPress={() => navigation.navigate('NewCard', { id })}>
					<Ionicons name='add-circle-sharp' style={styles.icon} />
					<Text>Add Card</Text>
				</TouchableOpacity>
				<TouchableOpacity
					disabled={questions.length === 0}
					onPress={() => navigation.navigate('Quiz', { id })}>
					<Ionicons name='ios-pencil-sharp' style={styles.icon} />
					<Text>Start Quiz</Text>
				</TouchableOpacity>
			</View>
			<Text style={styles.count}>Cards in this Deck: {questions.length}</Text>
			<View>
				{questions.map((key, index) => (
					<TouchableOpacity key={index}>
						<View style={styles.cardItem}>
							<Text>{key.question}</Text>
						</View>
					</TouchableOpacity>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	cardItem: {
		padding: 30,
		shadowRadius: 10,
		backgroundColor: '#eee',
		marginVertical: 10,
		shadowColor: '10px 10px 36px 0px rgba(0,0,0,0.75)',
		borderRadius: 8,
		alignItems: 'center',
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: 20,
		paddingTop: 50,
	},
	header: {
		fontSize: 24,
		fontWeight: '500',
		marginBottom: 8,
	},
	tobechange: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginVertical: 48,
	},
	count: {
		textAlign: 'center',
		fontSize: 18,
		fontWeight: '400',
		margin: 16,
	},
	icon: {
		fontSize: 48,
	},
});
