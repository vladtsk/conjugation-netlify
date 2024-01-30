// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";

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
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const authForm = document.querySelector(".authForm");
const signUpButton = document.getElementById("signUpButton");
const logInButton = document.getElementById("logInButton");
const logOutButton = document.getElementById("logOutButton");
const mainH1 = document.querySelector("main h1");

const secretSection = document.querySelector(".secretSection");

secretSection.style.display = "none";

async function userSignUp() {
  const signUpEmail = userEmail.value;
  const signUpPassword = userPassword.value;
  createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert("Your account has been created!");

      // Add the user to out Database

      // Access the database
      const database = getDatabase(app);

      // Reference to the 'users' node
      const usersRef = ref(database, "users");

      // User data
      let userData = {
        email: userEmail,
        last_login: Date.now(),
      };

      // Adding the data to the Database
      set(usersRef("users/" + user.uid), userData);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
}

async function userLogIn() {
  const logInEmail = userEmail.value;
  const logInPassword = userPassword.value;
  signInWithEmailAndPassword(auth, logInEmail, logInPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Your have logged in!");

      // User data
      let userData = {
        last_login: Date.now(),
      };

      // Access the database
      const database = getDatabase(app);

      // Reference to the 'users' node
      const usersRef = ref(database, "users");

      const userRef = ref(usersRef, user.uid);

      console.log(userRef);

      // Adding the data to the Database
      set(userRef, userData);
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
}

async function userLogOut() {
  await signOut(auth);
}

async function checkAuthState() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      authForm.style.display = "none";
      mainH1.style.display = "none";
      secretSection.style.display = "flex";
    } else {
      authForm.style.display = "block";
      secretSection.style.display = "none";
    }
  });
}

checkAuthState();

signUpButton.addEventListener("click", (event) => {
  event.preventDefault();
  userSignUp();
});

logInButton.addEventListener("click", (event) => {
  event.preventDefault();
  userLogIn();
});

logOutButton.addEventListener("click", (event) => {
  event.preventDefault();
  userLogOut();
});
