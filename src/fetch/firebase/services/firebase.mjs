import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

const app = initializeApp(
	{
		apiKey: "AIzaSyDJGvQ8HOUq6y5Hr_JXhJiVaR8khv8vBpg",
		authDomain: "testing-e2777.firebaseapp.com",
		projectId: "testing-e2777",
		storageBucket: "testing-e2777.appspot.com",
		messagingSenderId: "149748237235",
		appId: "1:149748237235:web:0f573b9dd7d71c50c5c1c6",
		measurementId: "G-H9TTLWXE2E"
	}
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
