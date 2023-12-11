import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyAt4Rj-B3xQPQZL27FPRJzzL0iNTC9eKn4",
  authDomain: "praktikum-9-3494e.firebaseapp.com",
  databaseURL: "https://praktikum-9-3494e-default-rtdb.firebaseio.comc",
  projectId: "praktikum-9-3494e",
  storageBucket: "praktikum-9-3494e.appspot.com",
  messagingSenderId: "13141441031",
  appId: "1:13141441031:web:ba7713305162609f9cc8a2"
});

const FIREBASE = firebase;

export default FIREBASE;