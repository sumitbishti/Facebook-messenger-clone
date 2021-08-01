import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA49VUjduVDGZWLzGM3FUnwocMJa1ytOxo",
    authDomain: "messenger-clone-c5edb.firebaseapp.com",
    projectId: "messenger-clone-c5edb",
    storageBucket: "messenger-clone-c5edb.appspot.com",
    messagingSenderId: "907589732518",
    appId: "1:907589732518:web:65981a2be28f9e38674c67",
    measurementId: "G-E0TW7S9TS3"
});

const db = firebaseApp.firestore();

export default db;
