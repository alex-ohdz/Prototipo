import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

export const FirestoreService = (app) => {

	const db = getFirestore(app);

	async function getCollectionFromFirestore(folder) {
		console.log(folder)
		const data = []
		const result = await getDocs(collection(db, folder));

		result.forEach(value => {
			data.push({
				id: value.id,
				...value.data()
			})
		})

		return data

	}

	async function addDocumentToFirestore(folder, payload) {
		const data = await addDoc(collection(db, folder), payload)
		return data
	}
	return {
		getCollectionFromFirestore,
		addDocumentToFirestore
	}
}