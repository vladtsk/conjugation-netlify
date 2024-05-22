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

import {
  generateSignUpForm,
  generateLogInForm,
  generatePassResetForm,
} from "./pagesetup.js";

import { launchFirstPage } from "./readDbData.js";

import { showErrorMsg } from "./authErrorMsg.js";

import { resetPassword } from "./passReset.js";

import { selectPracticeBtn } from "./selectMenuItem.js";

const auth = getAuth(app);
const database = getDatabase(app);

let signUpForm = document.querySelector(".signUpForm");
let logInForm = document.querySelector(".logInForm");
//const passResetForm = document.querySelector(".passResetForm");

const logInButtonMenu = document.getElementById("logInButtonMenu");

const logOutButton = document.getElementById("logOutButton");
//const logOutSection = document.querySelector(".logOutSection");
const main = document.querySelector("main");
let mainSection = document.querySelector(".mainSection");
const contentArea = document.querySelector(".content-area");
let summary = document.querySelector(".summary");
let chart = document.querySelector(".chart");

const sidebarContainer = document.querySelector(".sidebarContainer");
const sidebarTabletContainer = document.querySelector(
  ".sidebarTabletContainer"
);
const header = document.querySelector("header");
const footer = document.querySelector("footer");


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

      const signUpErrorMsgP = document.querySelector(".signUpErrorMsg");
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


  signInWithEmailAndPassword(auth, logInEmail, logInPassword)
    .then((userCredential) => {
      contentArea.innerHTML = "";
      launchFirstPage();
      selectPracticeBtn();

      

      sidebarContainer.style.display = "flex";
      sidebarTabletContainer.style.display = "flex";
      footer.style.display = "block";

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

      const logInErrorMsgP = document.querySelector(".logInErrorMsg");
      if (logInErrorMsgP) {
        showErrorMsg(logInErrorMsgP, errorCode);
      }
    });

  mainSection.innerHTML = "";
}

async function userLogOut() {
  await signOut(auth);
  mainSection.innerHTML = "";
  contentArea.innerHTML = "";
  launchFirstPage();
  selectPracticeBtn();
  

  sidebarContainer.style.display = "flex";
  sidebarTabletContainer.style.display = "flex";
  footer.style.display = "block";
  alert("Your have logged out");
}

function checkAuthState() {
  onAuthStateChanged(auth, (user) => {
    signUpForm = document.querySelector(".signUpForm");
    logInForm = document.querySelector(".logInForm");
    if (user) {
      if (logInForm) {
        contentArea.removeChild(logInForm);
        clearFormFields();
      }

      if (signUpForm) {
        contentArea.removeChild(signUpForm);
        clearFormFields();
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

//Handling different click events 

contentArea.addEventListener("click", (event) => {
  if(event.target){
    event.preventDefault();
    switch(event.target.id) {
      case "signUpSwitch":
        generateSignUpForm();
        break;
      case "logInSwitch":
        generateLogInForm();
        break;
        case "signUpButton":
          userSignUp();
          break;
        case "logInButton":
          const logInErrorMsgP = document.querySelector(".logInErrorMsg");
          if (logInErrorMsgP) {
          logInErrorMsgP.innerHTML = "";
          }
          const signUpErrorMsgP = document.querySelector(".signUpErrorMsg");
          if (signUpErrorMsgP) {
          signUpErrorMsgP.innerHTML = "";
          }
          userLogIn();
          break;
        
    }
  }
})
    

  
  // Handling header click events
header.addEventListener("click", (event) => {
    event.preventDefault();
    clearFormFields();
    summary = document.querySelector(".summary");
        if (summary) {
          main.removeChild(summary);
          summary = null;
        }
        chart = document.querySelector(".chart");
        if (chart) {
          contentArea.removeChild(chart);
          chart = null;
        }
    
        const conjugSection = document.querySelector(".conjugSection");
    
        if (conjugSection) {
          contentArea.removeChild(conjugSection);
        }

    if(event.target && event.target.id === "logInButtonMenu") {
      generateLogInForm();
    } else if(event.target && event.target.id === "logOutButton")
      userLogOut();
  });


// Password reset

//const forgotPass = document.getElementById("forgotPass");
//const userInfoSection = document.getElementById("userInfo");


  contentArea.addEventListener("click", (event) => {
    if(event.target && event.target.id === "forgotPass") {
      event.preventDefault();
      generatePassResetForm();
      resetPassword();
    }
    
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
