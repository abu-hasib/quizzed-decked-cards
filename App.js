import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Card from './components/Card';
import Deck from './components/Deck';
import Home from './components/Home';
import NewCard from './components/NewCard';
import Result from './components/Result';
import store from './store';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator style={styles.container}>
					<Stack.Screen name='ParentHome' component={Home} options={{ headerShown: false }} />
					<Stack.Screen name='Deck' component={Deck} />
					<Stack.Screen name='Card' component={Card} />
					<Stack.Screen name='NewCard' component={NewCard} />
					<Stack.Screen name='Quiz' component={Card} />
					<Stack.Screen name='Result' component={Result} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
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
