import {
  app,
  getAuth,
  getDatabase,
  ref,
  set,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "./config.js";

import { generateSignUpForm, generateLogInForm } from "./pagesetup.js";

import { launchFirstPage } from "./script.js";

const auth = getAuth(app);
const database = getDatabase(app);

generateLogInForm();
generateSignUpForm();

const signUpForm = document.querySelector(".signUpForm");
const logInForm = document.querySelector(".logInForm");
const signUpButton = document.getElementById("signUpButton");
const logInButton = document.getElementById("logInButton");
const logInButtonMenu = document.getElementById("logInButtonMenu");
const logOutButton = document.getElementById("logOutButton");
const logOutSection = document.querySelector(".logOutSection");
const mainSection = document.querySelector(".mainSection");

//signUpForm.style.display = "none";

async function userSignUp() {
  //generateSignUpForm();
  const userEmail = document.getElementById("signUpEmail");
  const userPassword = document.getElementById("signUpPassword");

  const signUpEmail = userEmail.value;
  const signUpPassword = userPassword.value;
  createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then((userCredential) => {
      const user = userCredential.user;

      alert("Your account has been created!");

      // Add the user to out Database

      // Reference to the 'user' node
      const userRef = ref(database, "users/" + user.uid + "/info");

      // User data
      let userData = {
        email: user.email,
        last_login: Date.now(),
      };

      // Adding the data to the Database
      set(userRef, userData);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
}

async function userLogIn() {
  const userEmail = document.getElementById("logInEmail");
  const userPassword = document.getElementById("logInPassword");
  const logInEmail = userEmail.value;
  const logInPassword = userPassword.value;
  signInWithEmailAndPassword(auth, logInEmail, logInPassword)
    .then((userCredential) => {
      launchFirstPage();
      const user = userCredential.user;
      alert("Your have logged in!");

      // User data
      let userData = {
        email: user.email,
        last_login: Date.now(),
      };

      // Reference to the 'user' node

      const userRef = ref(database, "users/" + user.uid + "/info");

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
  launchFirstPage();
  alert("Your have logged out");
}

async function checkAuthState() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      //launchFirstPage();

      if (logInForm) {
        logInForm.style.display = "none";
      }

      if (signUpForm) {
        signUpForm.style.display = "none";
      }

      logInButtonMenu.style.display = "none";
      logOutButton.style.display = "inline-block";

      mainSection.style.display = "block";
    } else {
      //logInForm.style.display = "block";
      //mainSection.style.display = "none";
      logOutButton.style.display = "none";
      logInButtonMenu.style.display = "inline-block";
    }
  });
}

checkAuthState();

//Signup / login forms switch
const logInSwitch = document.getElementById("logInSwitch");

if (logInSwitch) {
  logInSwitch.addEventListener("click", () => {
    signUpForm.style.display = "none";
    //generateLogInForm();

    logInButtonMenu.style.display = "none";
    logInForm.style.display = "block";
  });
}

const signUpSwitch = document.getElementById("signUpSwitch");
if (signUpSwitch) {
  signUpSwitch.addEventListener("click", () => {
    logInForm.style.display = "none";
    //generateSignUpForm();

    logInButtonMenu.style.display = "none";
    signUpForm.style.display = "block";
  });
}

if (signUpButton) {
  signUpButton.addEventListener("click", (event) => {
    event.preventDefault();
    userSignUp();
  });
}

if (logInButton) {
  logInButton.addEventListener("click", (event) => {
    event.preventDefault();
    userLogIn();
  });
}

if (logOutButton) {
  logOutButton.addEventListener("click", (event) => {
    event.preventDefault();
    userLogOut();
  });
}

if (logInButtonMenu) {
  logInButtonMenu.addEventListener("click", () => {
    mainSection.style.display = "none";
    logInForm.style.display = "block";
  });
}

// Validate an email
function validateEmail(email) {
  let emailRegExp = /[a-z0-9._-]+@[a-z0-9._-]+.[a-z0-9._-]+/;
  if (emailRegExp.test(email)) {
    // Email is valid
  } else {
    // Email is not valid
  }
}
