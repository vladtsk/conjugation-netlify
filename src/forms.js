// Generate login, signup, password reset and other forms 

import { getStripeCustomerID } from "./readDbData.js";

import { showErrorMsg } from "./pagesetup.js";

export function generateSignUpForm() {
    const contentArea = document.querySelector(".content-area");
    contentArea.innerHTML = "";
  
    const signUpForm = document.createElement("form");
    signUpForm.classList.add("signUpForm");
    //signUpForm.style.display = "none";
    contentArea.appendChild(signUpForm);
  
    const signUpH1 = document.createElement("h1");
    signUpH1.innerText = "Sign up";
    signUpForm.appendChild(signUpH1);
  
    const userInfoSection = document.createElement("section");
    signUpForm.appendChild(userInfoSection);
    const namePElement = document.createElement("p");
    userInfoSection.appendChild(namePElement);
    const nameLabel = document.createElement("label");
    namePElement.appendChild(nameLabel);
    nameLabel.htmlFor = "name";
    nameLabel.innerText = "Name:";
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "name");
    nameInput.setAttribute("required", true);
    namePElement.appendChild(nameInput);
  
    const emailPElement = document.createElement("p");
    userInfoSection.appendChild(emailPElement);
    const emailLabel = document.createElement("label");
    emailPElement.appendChild(emailLabel);
    emailLabel.htmlFor = "signUpEmail";
    emailLabel.innerText = "Email:";
    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "signUpEmail");
    emailInput.setAttribute("required", true);
    emailPElement.appendChild(emailInput);
  
    const passwordPElement = document.createElement("p");
    userInfoSection.appendChild(passwordPElement);
    const passwordLabel = document.createElement("label");
    passwordPElement.appendChild(passwordLabel);
    passwordLabel.htmlFor = "signUpPassword";
    passwordLabel.innerText = "Password:";
    const passwordInput = document.createElement("input");
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("id", "signUpPassword");
    passwordInput.setAttribute("required", true);
    passwordPElement.appendChild(passwordInput);
  
    const errorMsg = document.createElement("p");
    userInfoSection.appendChild(errorMsg);
    errorMsg.classList.add("signUpErrorMsg");
  
    const btnSection = document.createElement("section");
    signUpForm.appendChild(btnSection);
    btnSection.classList.add("btn-section");
    const btnSectionPElement = document.createElement("p");
    btnSection.appendChild(btnSectionPElement);
    const signUpBtn = document.createElement("button");
    signUpBtn.setAttribute("type", "submit");
    signUpBtn.setAttribute("id", "signUpButton");
    signUpBtn.innerText = "Sign Up";
    btnSectionPElement.appendChild(signUpBtn);
  
    const switchSection = document.createElement("section");
    signUpForm.appendChild(switchSection);
    switchSection.classList.add("switch-section");
    const haveAccountPElement = document.createElement("p");
    haveAccountPElement.innerText = "Already have an account?";
    switchSection.appendChild(haveAccountPElement);
    const logInSwitchPElement = document.createElement("p");
    switchSection.appendChild(logInSwitchPElement);
    const logInSwitchLink = document.createElement("a");
    logInSwitchLink.setAttribute("id", "logInSwitch");
    logInSwitchLink.innerText = "Log in";
    logInSwitchPElement.appendChild(logInSwitchLink);
  }
  
  
  export function generateLogInForm() {
    const contentArea = document.querySelector(".content-area");
    contentArea.innerHTML = "";
  
    const logInForm = document.createElement("form");
    logInForm.classList.add("logInForm");
    //logInForm.style.display = "none";
    contentArea.appendChild(logInForm);
  
    const logInH1 = document.createElement("h1");
    logInH1.innerText = "Log in";
    logInForm.appendChild(logInH1);
  
    const userInfoSection = document.createElement("section");
    userInfoSection.setAttribute("id", "userInfo");
    logInForm.appendChild(userInfoSection);
  
    const emailPElement = document.createElement("p");
    userInfoSection.appendChild(emailPElement);
    const emailLabel = document.createElement("label");
    emailPElement.appendChild(emailLabel);
    emailLabel.htmlFor = "logInEmail";
    emailLabel.innerText = "Email:";
    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "logInEmail");
    emailInput.setAttribute("required", true);
    emailPElement.appendChild(emailInput);
  
    const passwordPElement = document.createElement("p");
    userInfoSection.appendChild(passwordPElement);
    const passwordLabel = document.createElement("label");
    passwordPElement.appendChild(passwordLabel);
    passwordLabel.htmlFor = "logInPassword";
    passwordLabel.innerText = "Password:";
    const passwordInput = document.createElement("input");
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("id", "logInPassword");
    passwordInput.setAttribute("required", true);
    passwordPElement.appendChild(passwordInput);
  
    const errorMsg = document.createElement("p");
    userInfoSection.appendChild(errorMsg);
    errorMsg.classList.add("logInErrorMsg");
  
    const btnSection = document.createElement("section");
    logInForm.appendChild(btnSection);
    btnSection.classList.add("btn-section");
    const btnSectionPElement = document.createElement("p");
    btnSection.appendChild(btnSectionPElement);
    const logInButton = document.createElement("button");
    logInButton.setAttribute("type", "submit");
    logInButton.setAttribute("id", "logInButton");
    logInButton.innerText = "Log in";
    btnSectionPElement.appendChild(logInButton);
  
    const switchSection = document.createElement("section");
    logInForm.appendChild(switchSection);
    switchSection.classList.add("switch-section");
  
    const dontHaveAccountPElement = document.createElement("p");
    dontHaveAccountPElement.innerText = "Don't have an account yet?";
    switchSection.appendChild(dontHaveAccountPElement);
    const signUpSwitchPElement = document.createElement("p");
    switchSection.appendChild(signUpSwitchPElement);
    const signUpSwitchLink = document.createElement("a");
    signUpSwitchLink.setAttribute("id", "signUpSwitch");
    signUpSwitchLink.innerText = "Sign up";
    signUpSwitchPElement.appendChild(signUpSwitchLink);
  
    const forgotPass = document.createElement("a");
    forgotPass.setAttribute("id", "forgotPass");
    forgotPass.innerText = "Forgot your password?";
    switchSection.appendChild(forgotPass);
  }
  
  export function generatePassResetForm() {
    const contentArea = document.querySelector(".content-area");
    contentArea.innerHTML = "";
  
    const passResetForm = document.createElement("form");
    passResetForm.classList.add("passResetForm");
    //passResetForm.style.display = "none";
    contentArea.appendChild(passResetForm);
  
    const passResetH1 = document.createElement("h1");
    passResetH1.innerText = "Reset your password";
    passResetForm.appendChild(passResetH1);
  
    const userInfoSection = document.createElement("section");
    userInfoSection.setAttribute("id", "userInfo");
    passResetForm.appendChild(userInfoSection);
  
    const emailPElement = document.createElement("p");
    userInfoSection.appendChild(emailPElement);
    const emailLabel = document.createElement("label");
    emailPElement.appendChild(emailLabel);
    emailLabel.htmlFor = "logInEmail";
    emailLabel.innerText = "Email:";
    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "resetEmail");
    emailInput.setAttribute("required", true);
    emailPElement.appendChild(emailInput);
  
    const errorMsg = document.createElement("p");
    userInfoSection.appendChild(errorMsg);
    errorMsg.classList.add("passResetErrorMsg");
  
    const btnSection = document.createElement("section");
    passResetForm.appendChild(btnSection);
    btnSection.classList.add("btn-section");
    const btnSectionPElement = document.createElement("p");
    btnSection.appendChild(btnSectionPElement);
    const passResetButton = document.createElement("button");
    passResetButton.setAttribute("type", "submit");
    passResetButton.setAttribute("id", "passResetButton");
    passResetButton.innerText = "Submit";
    btnSectionPElement.appendChild(passResetButton);
    
  

  }
  

  export function generateContactForm() {
    const contentArea = document.querySelector(".content-area");
    contentArea.innerHTML = "";
  
    const contactForm = document.createElement("form");
    contactForm.classList.add("contact-form");
    //contactForm.setAttribute("action", "");
    //contactForm.setAttribute("method", "post");
    contentArea.appendChild(contactForm);
  
    const contactH1 = document.createElement("h1");
    contactH1.innerText = "Contact us";
    contactForm.appendChild(contactH1);
  
    const userInfoSection = document.createElement("section");
    contactForm.appendChild(userInfoSection);
    const namePElement = document.createElement("p");
    userInfoSection.appendChild(namePElement);
    const nameLabel = document.createElement("label");
    namePElement.appendChild(nameLabel);
    nameLabel.htmlFor = "name";
    nameLabel.innerText = "Name:";
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "name");
    nameInput.setAttribute("name", "user_name");
    nameInput.setAttribute("required", "");
    namePElement.appendChild(nameInput);
  
    const emailPElement = document.createElement("p");
    userInfoSection.appendChild(emailPElement);
    const emailLabel = document.createElement("label");
    emailPElement.appendChild(emailLabel);
    emailLabel.htmlFor = "contactEmail";
    emailLabel.innerText = "Email:";
    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "contactEmail");
    emailInput.setAttribute("name", "user_email");
    emailInput.setAttribute("required", "");
    emailPElement.appendChild(emailInput);
  
    const subjectPElement = document.createElement("p");
    contactForm.appendChild(subjectPElement);
    const subjectLabel = document.createElement("label");
    subjectPElement.appendChild(subjectLabel);
    subjectLabel.htmlFor = "emailSubject";
    subjectLabel.innerText = "Subject:";
    const subjectInput = document.createElement("input");
    subjectInput.setAttribute("type", "text");
    subjectInput.setAttribute("id", "emailSubject");
    subjectInput.setAttribute("name", "subject");
    subjectInput.setAttribute("required", "");
    subjectPElement.appendChild(subjectInput);
    
    const textPElement = document.createElement("p");
    contactForm.appendChild(textPElement);
    const textLabel = document.createElement("label"); 
    textPElement.appendChild(textLabel);
    textLabel.htmlFor = "contact-text";
    textLabel.innerText = "Your message:";
    const textArea = document.createElement("textArea");
    textArea.setAttribute("placeholder", "Describe your problem or suggestion in detail. What device are you using?");
    textArea.setAttribute("id", "contact-text");
    textArea.setAttribute("name", "message");
    textArea.setAttribute("required", "");
    textPElement.appendChild(textArea);

    const errorMsg = document.createElement("p");
    contactForm.appendChild(errorMsg);
    errorMsg.classList.add("contactErrorMsg");
  
    const btnSection = document.createElement("section");
    contactForm.appendChild(btnSection);
    btnSection.classList.add("btn-section");
    
    const contactBtn = document.createElement("input");
 
    contactBtn.setAttribute("type", "submit");
    contactBtn.setAttribute("value", "Send");
    contactBtn.setAttribute("id", "contactBtn");
    //contactBtn.innerText = "Submit";

    btnSection.appendChild(contactBtn);

    
  }

  

  export function showContactEmail() {
    const contentArea = document.querySelector(".content-area");
      contentArea.innerHTML = "";
  
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("successDiv");
    contentArea.appendChild(contactDiv);
  
    const contactMsg = document.createElement("h1");
    contactMsg.innerText = "Contact us";
    contactDiv.appendChild(contactMsg);
  
    const contactMsgExpl = document.createElement("p");
    contactMsgExpl.classList.add("successMsgExpl");
    contactMsgExpl.innerText =
      "To report a problem or share your suggestions, please send an email to vladimir@lingway.net.";
      contactDiv.appendChild(contactMsgExpl);
  
  }


  export async function generateSubscriptionPage() {
    
    try {
      const stripeCustomerID = await getStripeCustomerID();
      console.log("stripeCustomerID", stripeCustomerID);

      const contentArea = document.querySelector(".content-area");
    contentArea.innerHTML = "";
  
    const portalForm = document.createElement("form");
    portalForm.classList.add("subscription-portal-form");
    portalForm.setAttribute("action", "/api/create-portal-session");
    portalForm.setAttribute("method", "post");
    contentArea.appendChild(portalForm);
  
    const contactH1 = document.createElement("h1");
    contactH1.innerText = "Manage your subscription";
    portalForm.appendChild(contactH1);
  
    const descriptionPEl = document.createElement("p");
    portalForm.appendChild(descriptionPEl);

    descriptionPEl.classList.add("portal-description");
    descriptionPEl.textContent = "Click the button below to manage your subscription.";

    const hiddenInput = document.createElement("input");
    hiddenInput.setAttribute("type", "hidden");
    hiddenInput.setAttribute("id", "stripeCustomerID");
    hiddenInput.setAttribute("name", "stripeCustomerID");
    hiddenInput.value = stripeCustomerID;
    portalForm.appendChild(hiddenInput);


    const btnSection = document.createElement("section");
    portalForm.appendChild(btnSection);
    btnSection.classList.add("btn-section");

    const portalButton = document.createElement("button");
    portalButton.setAttribute("type", "submit");
    portalButton.setAttribute("id", "portal-button");
    portalButton.innerText = "Start";
    btnSection.appendChild(portalButton);
    } catch(error) {
      console.error("Error generating Subscription page ", error);

      showErrorMsg();

    }
    


    

  }