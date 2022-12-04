const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('../keys/testing-e2777-firebase-adminsdk-vg8av-d43fd7f09f.json');

initializeApp({
	credential: cert(serviceAccount)
});

const db = getFirestore();

async function getCardsFromFirestore() {
	const data = []
	const result = await db.collection("Card").get()

	result.forEach(value => {
		data.push({
			id: value.id,
			...value.data()
		})
	})

	return data

}

async function addCardToFirestore(payload) {
	const data = await db.collection("Card").doc().set(
		payload)
	return data
}
module.exports = {
	getCardsFromFirestore,
	addCardToFirestore
}