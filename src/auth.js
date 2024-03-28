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

import { launchFirstPage } from "./init.js";

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
//const logOutSection = document.querySelector(".logOutSection");
let mainSection = document.querySelector(".mainSection");
const main = document.querySelector("main");
let summary = document.querySelector(".summary");
let chart = document.querySelector(".chart");
const signUpErrorMsgP = document.querySelector(".signUpErrorMsg");

function userSignUp() {
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

      if (signUpErrorMsgP) {
        showErrorMsg(signUpErrorMsgP, errorCode);
      }
    });
}

function userLogIn() {
  const userEmail = document.getElementById("logInEmail");
  const userPassword = document.getElementById("logInPassword");
  const logInEmail = userEmail.value;
  const logInPassword = userPassword.value;
  const logInErrorMsgP = document.querySelector(".logInErrorMsg");

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
      if (logInErrorMsgP) {
        showErrorMsg(logInErrorMsgP, errorCode);
      }
    });

  mainSection.innerHTML = "";
}

function showErrorMsg(errorMsgP, errorCode) {
  console.log(errorCode);

  switch (errorCode) {
    case "auth/invalid-email":
      errorMsgP.innerHTML =
        "<i class='fa-solid fa-circle-exclamation'></i> Please enter a valid email address";
      break;
    case "auth/wrong-password":
      errorMsgP.innerHTML =
        "<i class='fa-solid fa-circle-exclamation'></i> Error: Incorrect Password";
      break;
    case "auth/invalid-credential":
      errorMsgP.innerHTML =
        "<i class='fa-solid fa-circle-exclamation'></i> Error: Incorrect Email or Password";
      break;
    case "auth/missing-password":
      errorMsgP.innerHTML =
        "<i class='fa-solid fa-circle-exclamation'></i> Please enter your password";
      break;
    case "auth/missing-email":
      errorMsgP.innerHTML =
        "<i class='fa-solid fa-circle-exclamation'></i> Please enter your email";
      break;

    default:
      errorMsgP.innerHTML =
        "<i class='fa-solid fa-circle-exclamation'></i> An error has occurred. Make sure that the email and the password are correct.";
  }
}

async function userLogOut() {
  await signOut(auth);
  mainSection.innerHTML = "";

  launchFirstPage();
  alert("Your have logged out");
}

function checkAuthState() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
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

    logInButtonMenu.style.display = "none";
    logInForm.style.display = "block";

    const logInErrorMsgP = document.querySelector(".logInErrorMsg");
    if (logInErrorMsgP) {
      logInErrorMsgP.innerHTML = "";
    }

    const signUpErrorMsgP = document.querySelector(".signUpErrorMsg");
    if (signUpErrorMsgP) {
      signUpErrorMsgP.innerHTML = "";
    }
  });
}

const signUpSwitch = document.getElementById("signUpSwitch");
if (signUpSwitch) {
  signUpSwitch.addEventListener("click", () => {
    logInForm.style.display = "none";

    logInButtonMenu.style.display = "none";
    signUpForm.style.display = "block";

    const logInErrorMsgP = document.querySelector(".logInErrorMsg");
    if (logInErrorMsgP) {
      logInErrorMsgP.innerHTML = "";
    }
    const signUpErrorMsgP = document.querySelector(".signUpErrorMsg");
    if (signUpErrorMsgP) {
      signUpErrorMsgP.innerHTML = "";
    }
  });
}

if (signUpButton) {
  signUpButton.addEventListener("click", (event) => {
    event.preventDefault();

    const logInErrorMsgP = document.querySelector(".logInErrorMsg");
    if (logInErrorMsgP) {
      logInErrorMsgP.innerHTML = "";
    }

    const signUpErrorMsgP = document.querySelector(".signUpErrorMsg");
    if (signUpErrorMsgP) {
      signUpErrorMsgP.innerHTML = "";
    }

    userSignUp();
  });
}

if (logInButton) {
  logInButton.addEventListener("click", (event) => {
    event.preventDefault();

    const logInErrorMsgP = document.querySelector(".logInErrorMsg");
    if (logInErrorMsgP) {
      logInErrorMsgP.innerHTML = "";
    }

    const signUpErrorMsgP = document.querySelector(".signUpErrorMsg");
    if (signUpErrorMsgP) {
      signUpErrorMsgP.innerHTML = "";
    }

    userLogIn();
  });
}

if (logOutButton) {
  logOutButton.addEventListener("click", (event) => {
    event.preventDefault();
    summary = document.querySelector(".summary");
    if (summary) {
      main.removeChild(summary);
      summary = null;
    }
    chart = document.querySelector(".chart");
    if (chart) {
      main.removeChild(chart);
      chart = null;
    }

    const conjugSection = document.querySelector(".conjugSection");

    if (conjugSection) {
      main.removeChild(conjugSection);
    }
    userLogOut();
  });
}

if (logInButtonMenu) {
  logInButtonMenu.addEventListener("click", (event) => {
    event.preventDefault();
    summary = document.querySelector(".summary");
    if (summary) {
      main.removeChild(summary);
      summary = null;
    }
    chart = document.querySelector(".chart");
    if (chart) {
      main.removeChild(chart);
      chart = null;
    }

    const conjugSection = document.querySelector(".conjugSection");

    if (conjugSection) {
      main.removeChild(conjugSection);
    }
    mainSection = document.querySelector(".mainSection");
    mainSection.style.display = "none";
    logInForm.style.display = "block";
  });
}

/* Validate an email
function validateEmail(email) {
  let emailRegExp = /[a-z0-9._-]+@[a-z0-9._-]+.[a-z0-9._-]+/;
  if (emailRegExp.test(email)) {
    // Email is valid
  } else {
    // Email is not valid
  }
}*/
