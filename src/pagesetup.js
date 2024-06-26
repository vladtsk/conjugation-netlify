// Functions that dinamically build the pages

import { launchFirstPage } from "./readDbData.js";
import { generateGraph, buildGraph } from "./graphs.js";



// Building the main page structure
export function buildPageStructure(data) {
  // Deleting all the elements in the "main" section
  const contentArea = document.querySelector(".content-area");
  const mainSection = document.querySelector(".mainSection");

  mainSection.innerHTML = "";

  // Tense display section
  const tenseDisplaySection = document.createElement("div");
  tenseDisplaySection.classList.add("tense-display-section");
  mainSection.appendChild(tenseDisplaySection);

  const tensePElement = document.createElement("p");
  tensePElement.innerText = "The tense:";
  tenseDisplaySection.appendChild(tensePElement);

  const tenseDisplay = document.createElement("div");
  tenseDisplay.classList.add("tense-display");
  tenseDisplaySection.appendChild(tenseDisplay);

  const tenseDisplayP = document.createElement("p");
  tenseDisplay.appendChild(tenseDisplayP);

  // Verb display section
  const verbDisplaySection = document.createElement("div");
  verbDisplaySection.classList.add("verb-display-section");
  mainSection.appendChild(verbDisplaySection);

  const verbPElement = document.createElement("p");
  verbPElement.innerText = "The verb to conjugate:";
  verbDisplaySection.appendChild(verbPElement);

  const verbDisplay = document.createElement("div");
  verbDisplay.classList.add("verb-display");
  verbDisplaySection.appendChild(verbDisplay);

  const verbDisplayP = document.createElement("p");
  verbDisplay.appendChild(verbDisplayP);

  // Phrase section
  const phraseSection = document.createElement("div");
  phraseSection.classList.add("phrase-section");
  mainSection.appendChild(phraseSection);

  const phraseSectionP = document.createElement("p");
  phraseSection.appendChild(phraseSectionP);

  // Letters section
  const lettersSection = document.createElement("div");
  lettersSection.classList.add("letters-section");
  mainSection.appendChild(lettersSection);

  const lettersSectionP1 = document.createElement("p");
  const button1 = document.createElement("button");
  button1.innerText = "é";
  lettersSectionP1.appendChild(button1);
  lettersSection.appendChild(lettersSectionP1);

  const lettersSectionP2 = document.createElement("p");
  const button2 = document.createElement("button");
  button2.innerText = "è";
  lettersSectionP2.appendChild(button2);
  lettersSection.appendChild(lettersSectionP2);

  const lettersSectionP3 = document.createElement("p");
  const button3 = document.createElement("button");
  button3.innerText = "ê";
  lettersSectionP3.appendChild(button3);
  lettersSection.appendChild(lettersSectionP3);

  const lettersSectionP4 = document.createElement("p");
  const button4 = document.createElement("button");
  button4.innerText = "î";
  lettersSectionP4.appendChild(button4);
  lettersSection.appendChild(lettersSectionP4);

  const lettersSectionP5 = document.createElement("p");
  const button5 = document.createElement("button");
  button5.innerText = "ô";
  lettersSectionP5.appendChild(button5);
  lettersSection.appendChild(lettersSectionP5);

  const lettersSectionP6 = document.createElement("p");
  const button6 = document.createElement("button");
  button6.innerText = "û";
  lettersSectionP6.appendChild(button6);
  lettersSection.appendChild(lettersSectionP6);

  const lettersSectionP7 = document.createElement("p");
  const button7 = document.createElement("button");
  button7.innerText = "ç";
  lettersSectionP7.appendChild(button7);
  lettersSection.appendChild(lettersSectionP7);

  // Type section
  const typeSectionDiv = document.createElement("div");
  typeSectionDiv.classList.add("type-section");
  mainSection.appendChild(typeSectionDiv);

  const verbInput = document.createElement("input");
  verbInput.setAttribute("type", "text");
  verbInput.setAttribute("placeholder", "type the verb form");
  typeSectionDiv.appendChild(verbInput);

  // Message section
  const messageSection = document.createElement("div");
  messageSection.classList.add("msg-section");
  mainSection.appendChild(messageSection);

  // 'Learn more' section
  const learnMoreSection = document.createElement("div");
  learnMoreSection.classList.add("learnMore");
  mainSection.appendChild(learnMoreSection);

  learnMoreSection.innerHTML = `<i class="fa-solid fa-circle-info"></i> Learn more`;
  learnMoreSection.style.display = "none";

  // Learn more info popup section
  const main = document.querySelector("main");
  const infoPopupSection = document.createElement("div");
  infoPopupSection.classList.add("infoPopupSection");
  main.appendChild(infoPopupSection);
  infoPopupSection.style.display = "none";

  // Conjugation popup section

  const conjugSection = document.createElement("div");
  conjugSection.classList.add("conjugSection");
  contentArea.appendChild(conjugSection);
  conjugSection.style.display = "none";

  // Sibmit section
  const submitSection = document.createElement("div");
  submitSection.classList.add("submit-section");
  mainSection.appendChild(submitSection);

  const submitBtn = document.createElement("button");
  submitBtn.id = "submit-btn";
  submitBtn.innerText = "submit";
  submitSection.appendChild(submitBtn);

  // Next section
  const nextSection = document.createElement("div");
  nextSection.classList.add("next-section");
  mainSection.appendChild(nextSection);

  const nextBtn = document.createElement("button");
  nextBtn.id = "next-btn";
  nextBtn.innerText = "next";
  nextSection.appendChild(nextBtn);

  // Finish section
  let oldFinish = document.querySelector(".finish-section");
  console.log(oldFinish)

  const finishSection = document.createElement("div");
  finishSection.classList.add("finish-section");
  mainSection.appendChild(finishSection);
  finishSection.style.display = "none";

  const finishBtn = document.createElement("button");
  finishBtn.id = "finish-btn";
  finishBtn.innerText = "finish";
  finishSection.appendChild(finishBtn);
}

// Special characters buttons
export function setSpecialBtns() {
  // Select the input element
  const inputArea = document.querySelector(".type-section input");
  // Select all the buttons
  const specialBtns = document.querySelectorAll(".letters-section button");
  specialBtns.forEach((button) => {
    button.addEventListener("click", () => {
      inputArea.value += button.innerText;
    });
  });
}

export function showResultPage(score, phraseStats, stats, userId) {
  const main = document.querySelector("main");
  const mainSection = document.querySelector(".mainSection");
  mainSection.innerHTML = "";

  const contentArea = document.querySelector(".content-area");
  const infoPopupSection = document.querySelector(".infoPopupSection");
  if(infoPopupSection) {
    main.removeChild(infoPopupSection);
  }


  const conjugSection = document.querySelector(".conjugSection");
  if (conjugSection) {
    contentArea.removeChild(conjugSection);
  }


  const sidebarContainer = document.querySelector(".sidebarContainer");
  const sidebarTabletContainer = document.querySelector(
    ".sidebarTabletContainer"
  );
  const footer = document.querySelector("footer");
  const nav = document.querySelector("nav");
  const livesEl = document.querySelector(".lives");

  const resultDiv = document.createElement("div");
  resultDiv.classList.add("result");
  mainSection.appendChild(resultDiv);

  const resultMsg = document.createElement("p");
  resultMsg.innerText = "You have finished the exercise!";
  resultDiv.appendChild(resultMsg);

  const scoreDiv = document.createElement("div");
  scoreDiv.classList.add("score-section");
  mainSection.appendChild(scoreDiv);

  const trophyIcon = document.createElement("i");
  trophyIcon.classList.add("fa-solid");
  trophyIcon.classList.add("fa-trophy");
  scoreDiv.appendChild(trophyIcon);

  const scoreMsg = document.createElement("p");
  scoreMsg.innerText = `Your score is: ${score}/${phraseStats.length}`;
  scoreDiv.appendChild(scoreMsg);

  const restartSection = document.createElement("div");
  restartSection.classList.add("restart");
  mainSection.appendChild(restartSection);
  const restartBtn = document.createElement("button");
  restartBtn.id = "restart-btn";
  restartBtn.innerText = "restart";
  restartSection.appendChild(restartBtn);

  let showSummaryBtn = document.createElement("button");
  showSummaryBtn.id = "showSummary-btn";
  showSummaryBtn.innerText = "show summary";
  restartSection.appendChild(showSummaryBtn);
  

  if (userId) {
    generateGraph();
    buildGraph(stats);
  }

  nav.style.display = "flex";
  livesEl.style.display = "none";

  let summary;
  let chart = document.querySelector(".chart");

  showSummaryBtn.addEventListener("click", () => {

    const blurContainer = document.querySelector(".blurContainer");

    if (phraseStats.length != 0) {
      showSummary(phraseStats);

      if(blurContainer) {
        blurContainer.style.display = "block";
      }
        //summary = document.querySelector(".summary");
      showSummaryBtn = document.getElementById("showSummary-btn");
      restartSection.removeChild(showSummaryBtn);
    }

    let summaryCloseBtn = document.querySelector(".summaryCloseBtn");
    console.log(summaryCloseBtn);
    //Close summary
    if (summaryCloseBtn) {
      summaryCloseBtn.addEventListener("click", () => {
        summary = document.querySelector(".summary");
        if (summary) {
          main.removeChild(summary);
          summary = null;
        }
        if(blurContainer) {
          blurContainer.style.display = "none";
        }
      });
    }

    if (chart) {
      contentArea.removeChild(chart);
      chart = null;
    }
  });

  restartBtn.addEventListener("click", () => {
    mainSection.innerHTML = "";

    if (summary) {
      main.removeChild(summary);
      summary = null;
    }

    if (chart) {
      contentArea.removeChild(chart);
      chart = null;
    }

    sidebarContainer.style.display = "flex";
    sidebarTabletContainer.style.display = "flex";
    footer.style.display = "block";
    launchFirstPage();
  
  });
}

export function showNoMorePhrasesPage(score, phraseStats) {
  const main = document.querySelector("main");
  const mainSection = document.querySelector(".mainSection");
  mainSection.innerHTML = "";

  const contentArea = document.querySelector(".content-area");

  const noMorePhrDiv = document.createElement("div");
  noMorePhrDiv.classList.add("noMorePhrDiv");
  mainSection.appendChild(noMorePhrDiv);

  const noMorePhrMsg = document.createElement("p");
  noMorePhrMsg.innerText = "You have no more phrases to practise!";
  noMorePhrDiv.appendChild(noMorePhrMsg);

  const noMorePhrExpl = document.createElement("p");
  noMorePhrExpl.classList.add("noMorePhrExpl");
  noMorePhrExpl.innerText =
    "Try another tense or come back later. Our smart repetition system shows you phrases at specific intervals, enhancing your ability to memorize them efficiently.";
  noMorePhrDiv.appendChild(noMorePhrExpl);

  const scoreDiv = document.createElement("div");
  scoreDiv.classList.add("score-section");
  mainSection.appendChild(scoreDiv);

  const trophyIcon = document.createElement("i");
  trophyIcon.classList.add("fa-solid");
  trophyIcon.classList.add("fa-trophy");
  scoreDiv.appendChild(trophyIcon);

  const scoreMsg = document.createElement("p");
  if (phraseStats.length != 0) {
    scoreMsg.innerText = `Your score is: ${score}/${phraseStats.length}`;
    scoreDiv.appendChild(scoreMsg);
  }

  const sidebarContainer = document.querySelector(".sidebarContainer");
  const sidebarTabletContainer = document.querySelector(
    ".sidebarTabletContainer"
  );
  const footer = document.querySelector("footer");
  const nav = document.querySelector("nav");
  const livesEl = document.querySelector(".lives");
  
  const restartSection = document.createElement("div");
  restartSection.classList.add("restart");
  mainSection.appendChild(restartSection);
  const restartBtn = document.createElement("button");
  restartBtn.id = "restart-btn";
  restartBtn.innerText = "restart";
  restartSection.appendChild(restartBtn);

  let showSummaryBtn = document.createElement("button");
  showSummaryBtn.id = "showSummary-btn";
  showSummaryBtn.innerText = "show summary";
  restartSection.appendChild(showSummaryBtn);

  let summary;
  let chart = document.querySelector(".chart");

  showSummaryBtn.addEventListener("click", () => {
  
    const blurContainer = document.querySelector(".blurContainer");

    if (phraseStats.length != 0) {
      showSummary(phraseStats);

      if(blurContainer) {
        blurContainer.style.display = "block";
      }

      summary = document.querySelector(".summary");
      showSummaryBtn = document.getElementById("showSummary-btn");
      restartSection.removeChild(showSummaryBtn);
    }

    nav.style.display = "flex";
    livesEl.style.display = "none";

    let summaryCloseBtn = document.querySelector(".summaryCloseBtn");
  
    //Close summary
    if (summaryCloseBtn) {
      summaryCloseBtn.addEventListener("click", () => {
        summary = document.querySelector(".summary");
        if (summary) {
          main.removeChild(summary);
          summary = null;
        }
        if(blurContainer) {
          blurContainer.style.display = "none";
        }
      });
    }

    if (chart) {
      contentArea.removeChild(chart);
      chart = null;
    }

  });

  restartBtn.addEventListener("click", () => {
    mainSection.innerHTML = "";
    if (summary) {
      main.removeChild(summary);
      summary = null;
    }

    if (chart) {
      contentArea.removeChild(chart);
      chart = null;
    }

    sidebarContainer.style.display = "flex";
    sidebarTabletContainer.style.display = "flex";
    footer.style.display = "block";
    launchFirstPage();
  });
}

function showSummary(phraseStats) {
  //const contentArea = document.querySelector(".content-area");
  const main = document.querySelector("main");
  let summary = document.querySelector(".summary");

  if (!summary) {
    summary = document.createElement("div");
    summary.classList.add("summary");
    main.appendChild(summary);
  }
  const summaryCloseBtn = document.createElement("i");
  summaryCloseBtn.classList.add("fa-solid", "fa-xmark", "summaryCloseBtn");
  summary.appendChild(summaryCloseBtn);

  const summaryH = document.createElement("h1");
  summary.appendChild(summaryH);
  summaryH.innerText = "Summary";

  const summaryList = document.createElement("ul");
  summary.appendChild(summaryList);
  for (let i = 0; i < phraseStats.length; i++) {
    const listEl = document.createElement("li");
    summaryList.appendChild(listEl);

    listEl.innerHTML = `Question ${i + 1}: <span style="font-weight: bold;">${
      phraseStats[i].phrase
    }</span>
    <p>Your answer: <span style="font-weight: bold;">${
      phraseStats[i].input
    }</span> <i class="fa-solid fa-square-check correctCheck"></i></p>
    <p class="correctAnswer">The correct answer: <span style="font-weight: bold;">${
      phraseStats[i].correctAnswer
    }</span></p>`;

    const correctCheck = listEl.querySelector(".correctCheck");
    const correctAnswer = listEl.querySelector(".correctAnswer");

    if (phraseStats[i].isCorrect) {
      correctCheck.style.display = "inline";
      correctAnswer.style.display = "none";
    } else {
      correctAnswer.style.display = "inline";
      correctCheck.style.display = "none";
    }

    if (phraseStats[i].almostCorrectCorrect) {
      correctCheck.style.display = "inline";
    }
  }
}

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
  

  /*
  const switchSection = document.createElement("section");
  passResetForm.appendChild(switchSection);
  switchSection.classList.add("switch-section");

  const dontHaveAccountPElement = document.createElement("p");
  dontHaveAccountPElement.innerText = "Don't have an account yet?";
  switchSection.appendChild(dontHaveAccountPElement);
  const signUpSwitchPElement = document.createElement("p");
  switchSection.appendChild(signUpSwitchPElement);
  const signUpSwitchLink = document.createElement("a");
  signUpSwitchLink.setAttribute("id", "signUpSwitch");
  signUpSwitchLink.innerText = "Sign up";
  signUpSwitchPElement.appendChild(signUpSwitchLink);*/
}
