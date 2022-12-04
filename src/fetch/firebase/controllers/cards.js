const { getCardsFromFirestore, addCardToFirestore } = require("../services/firebase");

async function fetchCards() {
	const cards = await getCardsFromFirestore()
	return cards
}
async function addNewCard(data) {
	const response = await addCardToFirestore(data)
	return response
}

module.exports = {
	fetchCards,
	addNewCard
}