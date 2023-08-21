import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBJg5gSjIgoTZuZap6WjXHMjS6lg54M5xs",
    authDomain: "part-time-991f9.firebaseapp.com",
    databaseURL: "https://part-time-991f9-default-rtdb.firebaseio.com",
    projectId: "part-time-991f9",
    storageBucket: "part-time-991f9.appspot.com",
    messagingSenderId: "637796032381",
    appId: "1:637796032381:web:62ba60e5fb517c37f63614",
    measurementId: "G-2T3MTNDD7Q"
    };

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore()