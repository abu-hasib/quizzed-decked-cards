import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import DeckList from './components/DeckList';
import store from './store';

export default function App() {
	return (
		<Provider store={store}>
			<View style={styles.container}>
				<DeckList />
				<StatusBar style='auto' />
			</View>
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
