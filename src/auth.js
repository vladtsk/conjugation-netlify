import {
  getAuth,
  getDatabase,
  ref,
  set,
  update,
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


import { showErrorMsg } from "./authErrorMsg.js";

import { resetPassword } from "./passReset.js";

import { selectPracticeBtn } from "./menuPracticeBtnClick.js";
import { launchFirstPage } from "./readDbData.js";

/*const auth = getAuth(app);
const database = getDatabase(app);*/


export async function checkAuthState() {
  const { app } = await fetchFirebaseConfig();
  const auth = getAuth(app);

  const signUpForm = document.querySelector(".signUpForm");
  const logInForm = document.querySelector(".logInForm");
  const logInButtonMenu = document.getElementById("logInButtonMenu");
  const signUpButtonMenu = document.getElementById("signUpButtonMenu");
  const logOutButton = document.getElementById("logOutButton");
  const premiumBtn = document.querySelector(".menu-element.premiumBtn");
  //const subscribeBtn = document.getElementById("subscribeBtn");
  //const mainSection = document.querySelector(".mainSection");
  

  onAuthStateChanged(auth, (user) => {
    
    if (user) {
      if (logInForm) {
        //contentArea.removeChild(logInForm);
        clearFormFields();
      }

      if (signUpForm) {
        //contentArea.removeChild(signUpForm);
        clearFormFields();
      }

      logInButtonMenu.style.display = "none";
      signUpButtonMenu.style.display = "none";
      logOutButton.style.display = "block";
      premiumBtn.style.display = "none";

      //mainSection.style.display = "block";
    } else {
      logOutButton.style.display = "none";
      logInButtonMenu.style.display = "block";
      signUpButtonMenu.style.display = "block";
      premiumBtn.style.display = "flex";
    }
  });
}

export async function userSignUp() {
  const { app } = await fetchFirebaseConfig();
  const auth = getAuth(app);
  const database = getDatabase(app);

  const userEmail = document.getElementById("signUpEmail");
  const userPassword = document.getElementById("signUpPassword");
  const userName = document.getElementById("name");

  const contentArea = document.querySelector(".content-area");
  const sidebarContainer = document.querySelector(".sidebarContainer");
  const sidebarTabletContainer = document.querySelector(".sidebarTabletContainer");
  const footer = document.querySelector("footer");

  const signUpEmail = userEmail.value;
  const signUpPassword = userPassword.value;
  createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then((userCredential) => {
      const user = userCredential.user;

      alert("Your account has been created!");
      
      if(contentArea) {
        contentArea.innerHTML = "";
      }
      

      // Add the user to out Database

      // Reference to the 'user' node
      const userRef = ref(database, "users/" + user.uid + "/info");

      // User data
      let userData = {
        name: userName.value,
        email: user.email,
        last_login: Date.now(),
      };

      // Adding the data to the Database
      set(userRef, userData);

      selectPracticeBtn();

      sidebarContainer.style.display = "flex";
      sidebarTabletContainer.style.display = "flex";
      footer.style.display = "block";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error code: ", errorCode, "errorMsg: ", errorMessage);

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
      selectPracticeBtn();
      launchFirstPage();

      

      sidebarContainer.style.display = "flex";
      sidebarTabletContainer.style.display = "flex";
      footer.style.display = "block";

      const user = userCredential.user;
      alert("Your have logged in!");

      // User data
      let userData = {
        last_login: Date.now(),
      };
      //const lastLogin = Date.now();

      // Reference to the 'user' node

      const userRef = ref(database, "users/" + user.uid + "/info");

      // Adding the data to the Database
      update(userRef, userData);
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("error message: ", errorCode + errorMessage);

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
  selectPracticeBtn();
  launchFirstPage();
  

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
          case "forgotPass":
            generatePassResetForm();
            break;
          case "passResetButton":
            resetPassword();


            default:
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
    const accountPopup = document.querySelector(".account-popup");

    header.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      clearFormFields();
      let summary = document.querySelector(".summary");
          if (summary) {
            main.removeChild(summary);
            summary = null;
          }
          /*let chart = document.querySelector(".chart");
          if (chart) {
            contentArea.removeChild(chart);
            chart = null;
          }*/
      
          const conjugSection = document.querySelector(".conjugSection");
      
          if (conjugSection) {
            contentArea.removeChild(conjugSection);
          }
  
      /*if(event.target && event.target.id === "logInButtonMenu") {
        
      } else if(event.target && event.target.id === "logOutButton")
        userLogOut();*/

        if(event.target) {
          switch(event.target.id) {
            case "logInButtonMenu":
              if(accountPopup && accountPopup.style.display === "flex"){
                accountPopup.style.display = "none";
              }
              generateLogInForm();
              break;
            case "signUpButtonMenu":
              if(accountPopup && accountPopup.style.display === "flex"){
                accountPopup.style.display = "none";
              }
              generateSignUpForm();
              break;
            case "logOutButton":
              if(accountPopup && accountPopup.style.display === "flex"){
                accountPopup.style.display = "none";
              }
              userLogOut();
              break;
            default:
              break;
          }
        }
    });

  }
  
  //handleLogInLogOutClicks();


// Password reset
/*export function handlePasswordReset() {
  const contentArea = document.querySelector(".content-area");
  contentArea.addEventListener("click", (event) => {
    if(event.target && event.target.id === "forgotPass") {
      event.preventDefault();
      
    }
    
  });
} */

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
