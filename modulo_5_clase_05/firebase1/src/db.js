import firebase from 'firebase/app'
import 'firebase/firestore'

let firebaseConfig = {
    apiKey: "AIzaSyAOv_cQaT4-DF7EXprCj1wZYV2WDDKHLR8",
    authDomain: "reinventate158v1-86ad0.firebaseapp.com",
    projectId: "reinventate158v1-86ad0",
    storageBucket: "reinventate158v1-86ad0.appspot.com",
    messagingSenderId: "971336327674",
    appId: "1:971336327674:web:2bc7730965f03326e10443"
  };

// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })