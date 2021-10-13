import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text } from 'react-native';
import DeckList from './DeckList';
import Ionicons from '@expo/vector-icons/Ionicons';
import New from './New';

const Tab = createBottomTabNavigator();

export default function Home() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					if (route.name === 'Home') {
						iconName = focused ? 'ios-home' : 'ios-home-outline';
					} else if (route.name === 'Add Deck') {
						iconName = focused ? 'ios-add' : 'ios-add-outline';
					}
					return <Ionicons name={iconName} size={size} color={color} />;
				},
				tabBarActiveTintColor: 'tomato',
				tabBarInactiveTintColor: 'gray',
			})}>
			<Tab.Screen name='Home' component={DeckList} />
			<Tab.Screen name='Add Deck' component={New} />
		</Tab.Navigator>
	);
}
