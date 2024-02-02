import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

export {
  getAuth,
  getDatabase,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  ref,
  set,
};

// Our web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBZ1QOvcAhKxmwB1nePN-PHM0ICT5CZgBU",
  authDomain: "conjugation-app-18572.firebaseapp.com",
  databaseURL:
    "https://conjugation-app-18572-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "conjugation-app-18572",
  storageBucket: "conjugation-app-18572.appspot.com",
  messagingSenderId: "5598733131",
  appId: "1:5598733131:web:24e88341326430868c3ece",
  measurementId: "G-S8228N5HBV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);
