import { initializeApp } from 'firebase-admin/app';
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import serviceAccount from '../keys/testing-e2777-firebase-adminsdk-vg8av-d43fd7f09f.json';

const app = initializeApp(
	serviceAccount
);

const db = getFirestore(app);

export async function getCardsFromFirestore() {
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

export async function addCardToFirestore(payload) {
	const data = await addDoc(collection(db, "Card"), payload)
	return data
}
