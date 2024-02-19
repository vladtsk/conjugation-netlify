import { launchFirstPage } from "./script.js";

// Showing the first page
export async function showFirstPage() {
  const mainSection = document.querySelector(".mainSection");

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

  const selectElement = document.createElement("select");
  selectElement.name = "tense";
  selectElement.id = "tense";
  tenseSelect.appendChild(selectElement);

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

  const selectPhrNb = document.createElement("select");
  selectPhrNb.name = "phraseNb";
  selectPhrNb.id = "phraseNb";
  phrNbSection.appendChild(selectPhrNb);

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

  const messageP = document.createElement("p");
  messageSection.appendChild(messageP);

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

export function showResultPage(score, phraseNumber) {
  const mainSection = document.querySelector(".mainSection");
  mainSection.innerHTML = "";

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
  scoreMsg.innerText = `Your score is: ${score}/${phraseNumber}`;
  scoreDiv.appendChild(scoreMsg);

  const restartSection = document.createElement("div");
  restartSection.classList.add("restart");
  mainSection.appendChild(restartSection);
  const restartBtn = document.createElement("button");
  restartBtn.id = "restart-btn";
  restartBtn.innerText = "restart";
  restartSection.appendChild(restartBtn);

  restartBtn.addEventListener("click", () => {
    mainSection.innerHTML = "";
    launchFirstPage();
  });
}
