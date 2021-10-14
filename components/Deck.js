import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { useSelector } from 'react-redux';

export default function Deck({ route }) {
	const { id } = route.params;
	const decks = useSelector((state) => state.decks);
	const questions = useSelector((state) => state.decks[id].questions);
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<View style={styles.tobechange}>
				<TouchableOpacity onPress={() => navigation.navigate('NewCard', { id })}>
					<Ionicons name='add-circle-sharp' size='48' />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
					<Ionicons name='ios-pencil-sharp' size='48' />
				</TouchableOpacity>
			</View>
			<Text style={styles.header}>Title: {decks[id].title}</Text>
			<View>
				{questions.map((key, index) => (
					<TouchableOpacity onPress={() => navigation.navigate('Card', { id })}>
						<View key={index} style={styles.cardItem}>
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
	},
	tobechange: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
});
