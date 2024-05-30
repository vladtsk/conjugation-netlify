import {
  getAuth,
  getDatabase,
  ref,
  set,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  fetchFirebaseConfig
} from "./firebaseConfig.js";

import {
  generateSignUpForm,
  generateLogInForm,
  generatePassResetForm,
} from "./pagesetup.js";

import { launchFirstPage } from "./readDbData.js";

import { showErrorMsg } from "./authErrorMsg.js";

import { resetPassword } from "./passReset.js";

import { selectPracticeBtn } from "./selectMenuItem.js";

/*const auth = getAuth(app);
const database = getDatabase(app);*/


export async function checkAuthState() {
  const { app } = await fetchFirebaseConfig();
  const auth = getAuth(app);

  const signUpForm = document.querySelector(".signUpForm");
  const logInForm = document.querySelector(".logInForm");
  const logInButtonMenu = document.getElementById("logInButtonMenu");
  const logOutButton = document.getElementById("logOutButton");
  //const mainSection = document.querySelector(".mainSection");
  const contentArea = document.querySelector(".content-area");

  onAuthStateChanged(auth, (user) => {

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

      //mainSection.style.display = "block";
    } else {
      logOutButton.style.display = "none";
      logInButtonMenu.style.display = "inline-block";
    }
  });
}

export async function userSignUp() {
  const { app } = await fetchFirebaseConfig();
  auth = getAuth(app);
  database = getDatabase(app);

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

async function userLogIn() {
  const { app } = await fetchFirebaseConfig();
  const auth = getAuth(app);
  const database = getDatabase(app);

  const userEmail = document.getElementById("logInEmail");
  const userPassword = document.getElementById("logInPassword");
  const logInEmail = userEmail.value;
  const logInPassword = userPassword.value;

  const contentArea = document.querySelector(".content-area");
  const sidebarContainer = document.querySelector(".sidebarContainer");
  const sidebarTabletContainer = document.querySelector(".sidebarTabletContainer");
  const footer = document.querySelector("footer");


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

}

async function userLogOut() {
  const { app } = await fetchFirebaseConfig();
  const auth = getAuth(app);

  const mainSection = document.querySelector(".mainSection");
  const contentArea = document.querySelector(".content-area");
  const sidebarContainer = document.querySelector(".sidebarContainer");
  const sidebarTabletContainer = document.querySelector(".sidebarTabletContainer");
  const footer = document.querySelector("footer");

  await signOut(auth);
  if(mainSection) {
    mainSection.innerHTML = "";
  }
 
  contentArea.innerHTML = "";
  launchFirstPage();
  selectPracticeBtn();
  

  sidebarContainer.style.display = "flex";
  sidebarTabletContainer.style.display = "flex";
  footer.style.display = "block";
  alert("Your have logged out");
}



//checkAuthState();

//Handling different click events 
export function handleAuthClicks() {
  const contentArea = document.querySelector(".content-area");
if(contentArea) {
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
}
}

//handleAuthClicks();

    

  
  // Handling header click events

  export function handleLogInLogOutClicks() {
    const main = document.querySelector("main");
    const contentArea = document.querySelector(".content-area");
    const header = document.querySelector("header");

    header.addEventListener("click", (event) => {
      event.preventDefault();
      clearFormFields();
      let summary = document.querySelector(".summary");
          if (summary) {
            main.removeChild(summary);
            summary = null;
          }
          let chart = document.querySelector(".chart");
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

  }
  
  //handleLogInLogOutClicks();


// Password reset
export function handlePasswordReset() {
  const contentArea = document.querySelector(".content-area");
  contentArea.addEventListener("click", (event) => {
    if(event.target && event.target.id === "forgotPass") {
      event.preventDefault();
      generatePassResetForm();
      resetPassword();
    }
    
  });
}

//handlePasswordReset();





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
