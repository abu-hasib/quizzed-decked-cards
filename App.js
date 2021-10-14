import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import DeckList from './components/DeckList';
import store from './store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DeckListItem from './components/DeckListItem';
import Home from './components/Home';
import Deck from './components/Deck';
import Card from './components/Card';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator style={styles.container}>
					<Stack.Screen name='ParentHome' component={Home} options={{ headerShown: false }} />
					<Stack.Screen name='Deck' component={Deck} />
					<Stack.Screen name='Card' component={Card} />
					<Stack.Screen name='NewCard' component={Card} />
					<Stack.Screen name='Quiz' component={Card} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

function TestScreen() {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Details Screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: 20,
		paddingTop: 50,
		// alignItems: 'center',
		// justifyContent: 'center',
	},
});
