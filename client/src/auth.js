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
  sendPasswordResetEmail,
} from "./config.js";

import {
  generateSignUpForm,
  generateLogInForm,
  generatePassResetForm,
} from "./pagesetup.js";

import { launchFirstPage } from "./readDbData.js";

import { showErrorMsg } from "./authErrorMsg.js";

const auth = getAuth(app);
const database = getDatabase(app);

generateLogInForm();
generateSignUpForm();
generatePassResetForm();

const signUpForm = document.querySelector(".signUpForm");
const logInForm = document.querySelector(".logInForm");
const passResetForm = document.querySelector(".passResetForm");

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

    //logInButtonMenu.style.display = "none";
    logInForm.style.display = "block";

    clearFormFields();
  });
}

const signUpSwitch = document.getElementById("signUpSwitch");
if (signUpSwitch) {
  signUpSwitch.addEventListener("click", () => {
    logInForm.style.display = "none";

    //logInButtonMenu.style.display = "none";
    signUpForm.style.display = "block";

    clearFormFields();
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

    clearFormFields();

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
    passResetForm.style.display = "none";
    logInForm.style.display = "block";
    signUpForm.style.display = "none";
  });
}

// Password reset

const forgotPass = document.getElementById("forgotPass");
//const userInfoSection = document.getElementById("userInfo");

let resetEmail;

let passResetBtn;

if (forgotPass) {
  forgotPass.addEventListener("click", (event) => {
    event.preventDefault();
    //main.innerHTML = "";

    mainSection = document.querySelector(".mainSection");

    passResetForm.style.display = "block";
    logInForm.style.display = "none";
    signUpForm.style.display = "none";

    if (mainSection) {
      mainSection.style.display = "none";
    }

    passResetBtn = document.getElementById("passResetButton");
    console.log(passResetForm);
  });
}

console.log(passResetForm);

passResetForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const resetEmailEl = document.getElementById("resetEmail");
  const passResetErrorMsg = document.querySelector(".passResetErrorMsg");
  if (resetEmailEl) {
    resetEmail = resetEmailEl.value;
  }

  event.preventDefault();
  sendPasswordResetEmail(auth, resetEmail)
    .then(() => {
      console.log("Password reset email sent");
      alert("Password reset email sent. Please check your email.");

      passResetForm.style.display = "none";
      logInForm.style.display = "block";

      signUpForm.style.display = "none";

      //forgotPass.style.display = "none";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode + errorMessage);

      if (passResetErrorMsg) {
        showErrorMsg(passResetErrorMsg, errorCode);
      }
    });
});

function clearFormFields() {
  const resetEmail = document.getElementById("resetEmail");
  const logInEmail = document.getElementById("logInEmail");
  const logInPassword = document.getElementById("logInPassword");
  const signUpEmail = document.getElementById("signUpEmail");
  const signUpPassword = document.getElementById("signUpPassword");
  const logInErrorMsgP = document.querySelector(".logInErrorMsg");
  const signUpErrorMsgP = document.querySelector(".signUpErrorMsg");

  if (logInErrorMsgP) {
    logInErrorMsgP.innerHTML = "";
  }

  if (signUpErrorMsgP) {
    signUpErrorMsgP.innerHTML = "";
  }

  if (resetEmail) {
    resetEmail.value = "";
  }

  if (logInEmail) {
    console.log(logInEmail);
    logInEmail.value = "";
  }

  if (logInPassword) {
    logInPassword.value = "";
  }

  if (signUpEmail) {
    signUpEmail.value = "";
  }

  if (signUpPassword) {
    signUpPassword.value = "";
  }
}
/*
passResetBtn.addEventListener("click", (event) => {
  
});

/* Validate an email
function validateEmail(email) {
  let emailRegExp = /[a-z0-9._-]+@[a-z0-9._-]+.[a-z0-9._-]+/;
  if (emailRegExp.test(email)) {
    // Email is valid
  } else {
    // Email is not valid
  }
}*/
