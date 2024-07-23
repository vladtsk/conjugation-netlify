import {
    getAuth,
    fetchFirebaseConfig,
    sendPasswordResetEmail,
  } from "./firebaseConfig.js";

  import {
    generateLogInForm,
  } from "./forms.js";

  import { showErrorMsg } from "./authErrorMsg.js";

 
  let resetEmail;
  


export async function resetPassword() {
  const { app } = await fetchFirebaseConfig();
  const auth = getAuth(app);

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
    

  
  }