import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNp6XXswBlts6sqz9fehuru7j7gGeZIwo",
  authDomain: "twitter-clone-70c1b.firebaseapp.com",
  databaseURL: "https://twitter-clone-70c1b.firebaseio.com",
  projectId: "twitter-clone-70c1b",
  storageBucket: "twitter-clone-70c1b.appspot.com",
  messagingSenderId: "279370176989",
  appId: "1:279370176989:web:1efcde271d2853f774be34",
  measurementId: "G-4J16G5FXHZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;