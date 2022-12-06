import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

export const FirestoreService = (app) => {

	const db = getFirestore(app);

	async function getCardsFromFirestore() {
		const data = []
		const result = await getDocs(collection(db, "Card"));

		result.forEach(value => {
			data.push({
				id: value.id,
				...value.data()
			})
		})

		return data

	}

	async function addCardToFirestore(payload) {
		const data = await addDoc(collection(db, "Card"), payload)
		return data
	}
	return {
		getCardsFromFirestore,
		addCardToFirestore
	}
}