import { initializeApp } from 'firebase/app'
import { CloudStorageService } from './cloudStorage.js'
import { FirestoreService } from './firestore.mjs'
import { getAuth } from 'firebase/auth'

// import firebase from 'firebase/compat/app'
// import * as firebaseui from 'firebaseui'
// import 'firebaseui/dist/firebaseui.css'
const app = initializeApp({
  apiKey: 'AIzaSyDJGvQ8HOUq6y5Hr_JXhJiVaR8khv8vBpg',
  authDomain: 'testing-e2777.firebaseapp.com',
  projectId: 'testing-e2777',
  storageBucket: 'testing-e2777.appspot.com',
  messagingSenderId: '149748237235',
  appId: '1:149748237235:web:0f573b9dd7d71c50c5c1c6',
  measurementId: 'G-H9TTLWXE2E'
})
/*const auth = getAuth()
const ui = new firebaseui.auth.AuthUI(auth)

const uiConfig = {
  signInSuccessUrl: './',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url.
  tosUrl: './#tos',
  // Privacy policy url.
  privacyPolicyUrl: './#privacy'
}
*/
// The start method will wait until the DOM is loaded.
// ui.start('#firebaseuiAuthContainer', uiConfig)

export const firestore = FirestoreService(app)
export const storage = CloudStorageService(app)

export const getCollection = async folder => {
  const cardsNotRoute = await firestore.getCollectionFromFirestore(folder)
  console.log(cardsNotRoute)

  const finalCards = await Promise.all(
    cardsNotRoute.map(async card => {
      console.log(card)
      return {
        id: card.id,
        autor: card.autor,
        title: card.title,
        description: card.description,
        image: await storage.getImage(card.img)
      }
    })
  )
  console.log(finalCards)
  return finalCards
}
