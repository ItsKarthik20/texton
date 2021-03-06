import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyD0vqfyLuilvkDYEPWRWu43BES42cp2F2I",
  authDomain: "texton-6ab65.firebaseapp.com",
  projectId: "texton-6ab65",
  storageBucket: "texton-6ab65.appspot.com",
  messagingSenderId: "273502679414",
  appId: "1:273502679414:web:58f94da2f48feb8b9f0a57",
  measurementId: "G-NBPTCKY14X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
