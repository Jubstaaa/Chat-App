import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCG0lypOWoWHHpZlK8F0Mtp1Bjor2oBNYM",
  authDomain: "message-app-adc1f.firebaseapp.com",
  databaseURL:
    "https://message-app-adc1f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "message-app-adc1f",
  storageBucket: "message-app-adc1f.appspot.com",
  messagingSenderId: "112722342607",
  appId: "1:112722342607:web:c43f530e441e56755a7dba",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { database as default, googleAuthProvider, firebase };
