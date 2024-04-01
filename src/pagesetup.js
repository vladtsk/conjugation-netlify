// Functions that dinamically build the pages

import { launchFirstPage } from "./readDbData.js";
import { generateGraph, buildGraph } from "./stats.js";

// Showing the first page
export async function showFirstPage() {
  const main = document.querySelector("main");
  /*mainSection.innerHTML = "";*/

  // Section containing the main element

  let mainSection = document.querySelector(".mainSection");
  if (!mainSection) {
    mainSection = document.createElement("div");
    mainSection.classList.add("mainSection");
    main.appendChild(mainSection);
  }

  // Welcome section
  const welcomeDiv = document.createElement("div");
  welcomeDiv.classList.add("welcome");

  mainSection.appendChild(welcomeDiv);

  const welcomeP = document.createElement("p");
  welcomeP.innerText = "Welcome to Conjugation Master!";
  welcomeDiv.appendChild(welcomeP);

  // Tense selection section
  const tenseSelect = document.createElement("div");
  tenseSelect.classList.add("tense-section");
  mainSection.appendChild(tenseSelect);

  const labelTense = document.createElement("label");
  labelTense.htmlFor = "tense";
  labelTense.innerText = "Choose a tense you'd like practise:";
  tenseSelect.appendChild(labelTense);

  const selectDiv = document.createElement("div");
  selectDiv.classList.add("selectDiv");
  tenseSelect.appendChild(selectDiv);

  const selectElement = document.createElement("select");
  selectElement.name = "tense";
  selectElement.id = "tense";
  selectDiv.appendChild(selectElement);

  const optionPresent = document.createElement("option");
  optionPresent.value = "present";
  optionPresent.innerText = "present (le présent de l'indicatif)";

  const optionPastComp = document.createElement("option");
  optionPastComp.value = "pastcomp";
  optionPastComp.innerText = "past (le passé composé)";

  const optionPastImp = document.createElement("option");
  optionPastImp.value = "pastimp";
  optionPastImp.innerText = "imperfect past (l'imparfait)";

  selectElement.appendChild(optionPresent);
  selectElement.appendChild(optionPastComp);
  selectElement.appendChild(optionPastImp);

  // The "number of phrases" section
  const phrNbSection = document.createElement("div");
  phrNbSection.classList.add("nb-phrases");
  mainSection.appendChild(phrNbSection);

  const phrNbLabel = document.createElement("label");
  phrNbLabel.htmlFor = "phraseNb";
  phrNbLabel.innerText = "How many phrases would you like to practise?";
  phrNbSection.appendChild(phrNbLabel);

  const selectNbPhrasesDiv = document.createElement("div");
  selectNbPhrasesDiv.classList.add("selectNbPhrasesDiv");
  phrNbSection.appendChild(selectNbPhrasesDiv);

  const selectPhrNb = document.createElement("select");
  selectPhrNb.name = "phraseNb";
  selectPhrNb.id = "phraseNb";
  selectNbPhrasesDiv.appendChild(selectPhrNb);

  const phrNb5 = document.createElement("option");
  phrNb5.value = 5;
  phrNb5.innerText = "5";

  const phrNb10 = document.createElement("option");
  phrNb10.value = 10;
  phrNb10.innerText = "10";

  const phrNb15 = document.createElement("option");
  phrNb15.value = 15;
  phrNb15.innerText = "15";

  selectPhrNb.appendChild(phrNb5);
  selectPhrNb.appendChild(phrNb10);
  selectPhrNb.appendChild(phrNb15);

  // Start button

  const startSection = document.createElement("div");
  startSection.classList.add("start-section");
  mainSection.appendChild(startSection);

  const startBtn = document.createElement("button");
  startBtn.id = "start-btn";
  startBtn.innerText = "Start now!";
  startSection.appendChild(startBtn);
}

// Building the main page structure
export function buildPageStructure(data) {
  // Deleting all the elements in the "main" section
  const main = document.querySelector("main");
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

  /*const messageP = document.createElement("p");
  messageSection.appendChild(messageP);*/

  // Conjugation popup section

  const conjugSection = document.createElement("div");
  conjugSection.classList.add("conjugSection");
  main.appendChild(conjugSection);
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
  const finishSection = document.createElement("div");
  finishSection.classList.add("finish-section");
  mainSection.appendChild(finishSection);

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
  const mainSection = document.querySelector(".mainSection");
  mainSection.innerHTML = "";

  const main = document.querySelector("main");

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

  let summary;
  let chart = document.querySelector(".chart");

  showSummaryBtn.addEventListener("click", () => {
    if (phraseStats.length != 0) {
      showSummary(phraseStats);
      summary = document.querySelector(".summary");
      showSummaryBtn = document.getElementById("showSummary-btn");
      restartSection.removeChild(showSummaryBtn);
    }

    if (chart) {
      main.removeChild(chart);
      chart = null;
    }
  });

  restartBtn.addEventListener("click", () => {
    mainSection.innerHTML = "";

    console.log(summary);

    if (summary) {
      main.removeChild(summary);
      summary = null;
    }

    if (chart) {
      main.removeChild(chart);
      chart = null;
    }

    launchFirstPage();
  });
}

export function showNoMorePhrasesPage(score, phraseStats) {
  const mainSection = document.querySelector(".mainSection");
  mainSection.innerHTML = "";

  const main = document.querySelector("main");

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
    if (phraseStats.length != 0) {
      showSummary(phraseStats);
      summary = document.querySelector(".summary");
      showSummaryBtn = document.getElementById("showSummary-btn");
      restartSection.removeChild(showSummaryBtn);
    }
  });

  restartBtn.addEventListener("click", () => {
    mainSection.innerHTML = "";
    if (summary) {
      main.removeChild(summary);
      summary = null;
    }

    if (chart) {
      main.removeChild(chart);
      chart = null;
    }

    launchFirstPage();
  });
}

function showSummary(phraseStats) {
  const main = document.querySelector("main");
  let summary = document.querySelector(".summary");

  if (!summary) {
    summary = document.createElement("div");
    summary.classList.add("summary");
    main.appendChild(summary);
  }

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
  const main = document.querySelector("main");
  //main.innerHTML = "";

  const signUpForm = document.createElement("form");
  signUpForm.classList.add("signUpForm");
  signUpForm.style.display = "none";
  main.appendChild(signUpForm);

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
  const main = document.querySelector("main");
  //main.innerHTML = "";

  const logInForm = document.createElement("form");
  logInForm.classList.add("logInForm");
  logInForm.style.display = "none";
  main.appendChild(logInForm);

  const logInH1 = document.createElement("h1");
  logInH1.innerText = "Log in";
  logInForm.appendChild(logInH1);

  const userInfoSection = document.createElement("section");
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
}
