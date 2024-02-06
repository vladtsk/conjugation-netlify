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

const auth = getAuth(app);
const database = getDatabase(app);

const signUpForm = document.querySelector(".signUpForm");
const logInForm = document.querySelector(".logInForm");
const signUpButton = document.getElementById("signUpButton");
const logInButton = document.getElementById("logInButton");
const logOutButton = document.getElementById("logOutButton");

const secretSection = document.querySelector(".secretSection");

secretSection.style.display = "none";

async function userSignUp() {
  const userEmail = document.getElementById("signUpEmail");
  const userPassword = document.getElementById("signUpPassword");

  const signUpEmail = userEmail.value;
  const signUpPassword = userPassword.value;
  createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
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
      const user = userCredential.user;
      alert("Your have logged in!");

      // User data (TO CHANGE)
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
}

async function checkAuthState() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      logInForm.style.display = "none";
      signUpForm.style.display = "none";
      secretSection.style.display = "flex";
    } else {
      logInForm.style.display = "block";
      secretSection.style.display = "none";
    }
  });
}

checkAuthState();

signUpForm.style.display = "none";

//Signup / login forms switch
const logInSwitch = document.getElementById("logInSwitch");
logInSwitch.addEventListener("click", () => {
  signUpForm.style.display = "none";
  logInForm.style.display = "block";
});

const signUpSwitch = document.getElementById("signUpSwitch");
signUpSwitch.addEventListener("click", () => {
  logInForm.style.display = "none";
  signUpForm.style.display = "block";
});

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

// Validate an email
function validateEmail(email) {
  let emailRegExp = /[a-z0-9._-]+@[a-z0-9._-]+.[a-z0-9._-]+/;
  if (emailRegExp.test(email)) {
    // Email is valid
  } else {
    // Email is not valid
  }
}
