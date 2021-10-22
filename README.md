# Mobile Flashcards

A flashcard app built with React Native and Redux for state management.

## Project Setup

- clone the Project - `git clone https://github.com/abu-hasib/quizzed-decked-cards.git`
- install the dependencies - `npm install or yarn`

In the project directory, you can run:

### `npm start`

### or

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:19006](http://localhost:19006) to view it in the browser.

AsyncStorage communicates with the database via 4 methods:

- `_getDecks()`
- `_getDeck(id)`
- `_saveDeckTitle(title)`
- `_addCardToDeck(object)`

1. `_getDecks()` Method

_Description_: Get all of the existing decks from AsyncStorage.  
_Return Value_: Object where the key is the deck's title and the value is the decks object.

2. `_getDeck(id)` Method

_Description_: Get a deck from the existing decks in the database.  
_Return Value_: Object where the key is the deck's title and the value is the deck object.

3. `_saveDeckTitle(title)` Method

_Description_: Save the deck in the database.  
_Parameters_: Object that includes the following properties: `title`.

4. `_addCardToDeck(object)` Method

_Description_: Save the card to a particular deck in the database.
_Parameters_: Object that contains the following properties: `id` and `card`.
