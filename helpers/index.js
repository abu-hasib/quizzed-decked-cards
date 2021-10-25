import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
const { getItem, setItem, mergeItem } = useAsyncStorage('decks');

export async function _getDecks() {
	// AsyncStorage.clear();
	return getItem();
}

export async function _getDeck(id) {
	let items = await getItem();

	items = JSON.parse(items);

	return items[id];
}

export async function _saveDeckTitle(title) {
	let decks = await getItem();
	decks = JSON.parse(decks);
	let newDeck = { ...decks, ...title };

	mergeItem(JSON.stringify(newDeck));
}

export async function _addCardToDeck(title, card) {
	let decks = await getItem();

	decks = JSON.parse(decks);

	let updatedDeck = {
		...decks,
		[title]: { ...decks[title], questions: [...decks[title].questions, card] },
	};
	mergeItem(JSON.stringify(updatedDeck));
	let update = await getItem();
}

function formatDeck(deckname) {
	return {
		[deckname]: {
			title: deckname,
			questions: [],
		},
	};
}

let trigger = new Date();
trigger.setDate(trigger.getDate() + 1);
trigger.setHours(0);
trigger.setMinutes(0);

export const sendNotification = async () => {
	let notificationId = await Notifications.scheduleNotificationAsync({
		content: {
			title: 'FlashCards',
			body: "Don't forget to take a quiz",
		},
		trigger,
	});
};
