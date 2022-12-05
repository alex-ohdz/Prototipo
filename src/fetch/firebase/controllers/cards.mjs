import { getCardsFromFirestore, addCardToFirestore } from "../services/firebase.mjs";

export async function fetchCards() {
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
export async function addNewCard(data) {
	const response = await addCardToFirestore(data)
	return response
}