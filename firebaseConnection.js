// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBBYTJBxTM3pkKwMeXzOecxCHhQ_406Sw",
  authDomain: "bd-cidades.firebaseapp.com",
  projectId: "bd-cidades",
  storageBucket: "bd-cidades.appspot.com",
  messagingSenderId: "641836986667",
  appId: "1:641836986667:web:3a9cafc44d7a1040bc956e"
};

// Initialize Firebase
if (!firebase.app.length) {
    firebase.initializeApp(firebaseConfig);
}

export const db = firebase.app.getFirestore;