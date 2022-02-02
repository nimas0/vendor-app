import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from '../config';
import 'firebase/functions';
import 'firebase/firestore';
import 'firebase/database';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase
if (window.location.hostname === 'localhost') {
  firebase.functions().useEmulator('localhost', 5001);
}

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
  db.useEmulator('localhost', 8080);
  auth.useEmulator('http://localhost:9099');
}

export default firebase;
