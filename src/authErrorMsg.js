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

export function validateContactForm() {
  const nameEl = document.getElementById("name");
  const emailEl = document.getElementById("contactEmail");
  const subjectEl = document.getElementById("emailSubject");
  const textEl = document.getElementById("contact-text");

  const contactErrorMsgEl = document.querySelector(".contactErrorMsg");

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   
  let valid = false;

  if(nameEl.value === "") {
    contactErrorMsgEl.innerHTML = "<i class='fa-solid fa-circle-exclamation'></i> Please type your name";
  } else if(emailEl.value === "") {
    contactErrorMsgEl.innerHTML = "<i class='fa-solid fa-circle-exclamation'></i> Please type your email address";
  } else if(subjectEl.value === "") {
    contactErrorMsgEl.innerHTML = "<i class='fa-solid fa-circle-exclamation'></i> Describe your problem or suggestion in a few words in the subject field";
  } else if(textEl.value === "") {
    contactErrorMsgEl.innerHTML = "<i class='fa-solid fa-circle-exclamation'></i> Describe your problem or suggestion in detail in the message field";
  } else if(!emailPattern.test(emailEl.value)) {
    contactErrorMsgEl.innerHTML = "<i class='fa-solid fa-circle-exclamation'></i> Please type a valid email address";
  } else {
    valid = true;
  }


    return valid;
}