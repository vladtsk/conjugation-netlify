import {
    app,
    getAuth,
    sendPasswordResetEmail,
  } from "./config.js";

  import {
    generateLogInForm,
  } from "./pagesetup.js";

  import { showErrorMsg } from "./authErrorMsg.js";

  const auth = getAuth(app);
  let resetEmail;

export function resetPassword() {
    const passResetForm = document.querySelector(".passResetForm");
    passResetForm.addEventListener("submit", (event) => {
      event.preventDefault();
    
      const resetEmailEl = document.getElementById("resetEmail");
      const passResetErrorMsg = document.querySelector(".passResetErrorMsg");
      if (resetEmailEl) {
        resetEmail = resetEmailEl.value;
      }
    
      sendPasswordResetEmail(auth, resetEmail)
        .then(() => {
          console.log("Password reset email sent");
          alert("Password reset email sent. Please check your email.");
    
          generateLogInForm();
    
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
  
  }