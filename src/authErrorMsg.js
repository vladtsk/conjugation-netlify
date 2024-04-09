export function showErrorMsg(errorMsgP, errorCode) {
  console.log(errorCode);

  const forgotPass = document.getElementById("forgotPass");

  switch (errorCode) {
    case "auth/invalid-email":
      errorMsgP.innerHTML =
        "<i class='fa-solid fa-circle-exclamation'></i> Please enter a valid email address";
      break;
    case "auth/wrong-password":
      errorMsgP.innerHTML =
        "<i class='fa-solid fa-circle-exclamation'></i> Error: Incorrect Password";

      if (forgotPass) {
        forgotPass.style.display = "block";
      }

      break;
    case "auth/invalid-credential":
      errorMsgP.innerHTML =
        "<i class='fa-solid fa-circle-exclamation'></i> Error: Incorrect Email or Password";

      if (forgotPass) {
        forgotPass.style.display = "block";
      }

      break;
    case "auth/missing-password":
      errorMsgP.innerHTML =
        "<i class='fa-solid fa-circle-exclamation'></i> Please enter your password";
      break;
    case "auth/missing-email":
      errorMsgP.innerHTML =
        "<i class='fa-solid fa-circle-exclamation'></i> Please enter your email address";
      break;

    case "auth/weak-password":
      errorMsgP.innerHTML =
        "<i class='fa-solid fa-circle-exclamation'></i> Your password must be at least 6 characters long";
      break;

    case "auth/email-already-in-use":
      errorMsgP.innerHTML =
        "<i class='fa-solid fa-circle-exclamation'></i> A user with this email address already exists";
      break;

    case "auth/too-many-requests":
      errorMsgP.innerHTML =
        "<i class='fa-solid fa-circle-exclamation'></i> Error: too many login requests. Please try again in a few minutes.";
      break;

    default:
      errorMsgP.innerHTML =
        "<i class='fa-solid fa-circle-exclamation'></i> An error has occurred. Make sure that the email and the password are correct.";
  }
}
