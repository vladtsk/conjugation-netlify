//import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
//import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";

import { initializeApp } from "firebase/app";


import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth"

//"https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

import {
  getDatabase,
  ref,
  set,
  onValue,
  update,
} from "firebase/database"

//"https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";
// https://firebase.google.com/docs/analytics/get-started?platform=web#web

/*import dotenv from "dotenv";

dotenv.config();*/

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


let app, auth, database;


// Fetching the app's Firebase configuration from the server
export async function fetchFirebaseConfig() {

  try {
    const response = await fetch("/.netlify/functions/config");
    //const response = await fetch(url);
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


  } catch (error) {
    console.error("Failed to fetch Firebase configuration:", error);
  }
  
  return { app };
}

//fetchFirebaseConfig();

//export { app, auth, database };
