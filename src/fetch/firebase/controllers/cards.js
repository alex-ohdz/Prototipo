const { getCardsFromFirestore, addCardToFirestore } = require("../services/firebase");

async function fetchCards() {
	const cards = await getCardsFromFirestore()
	return cards
}
/**
 * 
 * @param {
 * title:string
 * description:string
 * img:string
 * } data 
 * @returns 
 */
async function addNewCard(data) {
	const response = await addCardToFirestore(data)
	return response
}

module.exports = {
	fetchCards,
	addNewCard
}