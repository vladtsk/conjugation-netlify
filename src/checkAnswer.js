// Functions used in the main part

import { movePhraseForward, movePhraseBackward } from "./spacedRepetition.js";

//import { playAudio, playCorrect, playIncorrect } from "./playAudio.js";

//import { fetchFirebaseConfig, onAuthStateChanged, getAuth } from "./firebaseConfig.js";

import { showConjugations } from "./conjugationTablePopup.js";

import { showInfoPopup } from "./infoPopup.js";

import {
  handleCorrectAnswer,
  handleAlmostCorrectAnswer,
  handleIncorrectAnswer,
} from "./checkAnswerFunctions.js";

// Fetching verb conjugation tables

let jsonConjug;

async function fetchConjugations() {
  const responseConjug = await fetch("../src/conjugation.json");
  const conjugations = await responseConjug.json();
  return conjugations;
}

fetchConjugations()
  .then((conjugations) => {
    jsonConjug = conjugations;
  })
  .catch((error) => {
    console.error("Error fetching conjugations:", error);
  });

// A function that reads the user input and compares it to the correct answer
export function checkAnswer({
  data,
  k,
  phraseCount,
  score,
  boxes,
  phraseStats,
  lives,
  userId,
}) {
  let phraseStatObject = {
    phrase: "",
    input: "",
    correctAnswer: "",
    isCorrect: false,
    almostCorrect: false,
  };

  // Select "p" element for a message to display
  const msgArea = document.querySelector(".msg-section");
  // Conjugation popup section
  const conjugSection = document.querySelector(".conjugSection");
  // Selecting the submit section
  const submitSection = document.querySelector(".submit-section");

  // Selecting the input element
  const inputArea = document.querySelector(".type-section input");
  // Select the 'next' section
  const nextSection = document.querySelector(".next-section");
  // Select the finish section
  const finishSection = document.querySelector(".finish-section");
  // Selecting the special character section
  //const specialBtns = document.querySelectorAll(".letters-section button");
  const lettersSection = document.querySelector(".letters-section");
  // "Lives" element
  const livesEl = document.querySelector(".lives");

  // The phrase display section
  const phraseSection = document.querySelector(".phrase-section");

  const inputText = inputArea.value;
  let displaySection;

  if (phraseCount < 5) {
    displaySection = nextSection;
  } else {
    displaySection = finishSection;
  }

  phraseStatObject.phrase = data.data[k].phrase;
  phraseStatObject.input = inputText;
  phraseStatObject.correctAnswer = data.data[k].answer;

  let answerType;

  const phraseDivCorrect = document.createElement("div");
  phraseDivCorrect.innerHTML = `<i class="fa-solid fa-square-check"></i> ${data.data[k].fullPhrase} <i class="fa-solid fa-volume-high" id="speaker"></i>
  <p class="translation">${data.data[k].translation}</p>`;

  const phraseDiv = document.createElement("div");
  phraseDiv.innerHTML = `${data.data[k].fullPhrase} <i class="fa-solid fa-volume-high" id="speaker"></i>
  <p class="translation">${data.data[k].translation}</p>`;

  if (inputText.trim().toLowerCase() !== "") {
    inputArea.classList.add("bold");
    phraseSection.innerHTML = "";

    // Hide the special characters section

    if (lettersSection) {
      lettersSection.style.display = "none";
    }

    inputArea.setAttribute("disabled", "");
  }

  switch (inputText.trim().toLowerCase()) {
    case "":
      msgArea.innerText = "Please type a valid verb";
      break;

    case data.data[k].answer:
      handleCorrectAnswer(phraseDivCorrect, data.data[k].fullPhrase);
      if (userId) {
        movePhraseForward(k, boxes);
      }
      score++;
      phraseStatObject.isCorrect = true;
      phraseStats.push(phraseStatObject);
      break;

    case data.data[k].alternativeAnswer:
      handleCorrectAnswer(phraseDivCorrect, data.data[k].fullPhrase);
      if (userId) {
        movePhraseForward(k, boxes);
      }
      score++;
      phraseStatObject.isCorrect = true;
      phraseStats.push(phraseStatObject);
      break;

    case data.data[k]?.answerWoS:
      answerType = "almostPastComp";
      showInfoPopup(data.data[k], data.data[0].tenseShort, answerType);

      handleAlmostCorrectAnswer(phraseDivCorrect, data.data[k].fullPhrase);

      if (userId) {
        movePhraseForward(k, boxes);
      }
      score++;
      phraseStatObject.almostCorrectCorrect = true;
      phraseStats.push(phraseStatObject);
      break;

    case data.data[k]?.answerWoAccent:
      answerType = "almostWoAccent";
      showInfoPopup(data.data[k], data.data[0].tenseShort, answerType);

      handleAlmostCorrectAnswer(phraseDivCorrect, data.data[k].fullPhrase);

      if (userId) {
        movePhraseForward(k, boxes);
      }
      score++;
      phraseStatObject.almostCorrectCorrect = true;
      phraseStats.push(phraseStatObject);
      break;

    default:
      if (!userId && lives && lives > 0) {
        lives--;

        if (lives === 0) {
          if (livesEl) {
            livesEl.style.color = "#ef233c";
          }

          localStorage.setItem("appLastUseTime", Date.now().toString());
        }
      }

      handleIncorrectAnswer(
        phraseDiv,
        data.data[k].fullPhrase,
        data.data[k].answer,
        lives
      );

      if (userId) {
        movePhraseBackward(k, boxes);
      }

      showConjugations(data.data[k], data.data[0], conjugSection, jsonConjug);
      showInfoPopup(data.data[k], data.data[0].tenseShort);

      phraseStats.push(phraseStatObject);
  }

  // Popup close icon
  const popupCloseBtn = document.querySelector(".popup-icons .popup-close");
  if (popupCloseBtn) {
    popupCloseBtn.addEventListener("click", () => {
      conjugSection.innerHTML = "";
      conjugSection.style.display = "none";
    });
  }

  if (inputText.trim().toLowerCase() !== "") {
    submitSection.style.display = "none";
    displaySection.style.display = "flex";
  }

  return { score, boxes, lives };
}
