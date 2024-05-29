//import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

import {
  getDatabase,
  ref,
  set,
  onValue,
  update,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

export {
  getAuth,
  getDatabase,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  ref,
  set,
  onValue,
  update,
};

/*
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

*/

let app, auth, database;

// Fetching the app's Firebase configuration from the server
export async function fetchFirebaseConfig() {

  try {
    const response = await fetch("http://localhost:3000/config");
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const config = await response.json();

    //Initialize Firebase
    const firebaseConfig = {
      apiKey: config.apiKey,
      authDomain: config.authDomain,
      databaseURL: config.databaseURL,
      projectId: config.projectId,
      storageBucket: config.storageBucket,
      messagingSenderId: config.messagingSenderId,
      appId: config.appId,
      measurementId: config.measurementId,
    };

    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    database = getDatabase(app);
    console.log(app)


  } catch (error) {
    console.error("Failed to fetch Firebase configuration:", error);
  }
  
  return { app };
}

//fetchFirebaseConfig();

//export { app, auth, database };
