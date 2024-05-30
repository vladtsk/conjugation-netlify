// Functions used in the main part

import { movePhraseForward, movePhraseBackward } from "./spacedRepetition.js";

import { playAudio, playCorrect, playIncorrect } from "./playAudio.js";

import { fetchFirebaseConfig, onAuthStateChanged, getAuth } from "./firebaseConfig.js";

import { getUser } from "./readDbData.js";
 import { showInfoPopup } from "./infoPopup.js";

//const auth = getAuth(app);

// Fetching verb conjugation tables
const responseConjug = await fetch("../src/conjugation.json");
const jsonConjug = await responseConjug.json();


let userId;

// Getting the user ID
async function getuserId() {
  const { app } = await fetchFirebaseConfig();
  const auth = getAuth(app);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      userId = auth.currentUser.uid;
    }
  });
  //return userId;
}

getuserId();




 //const userId = getUser();

// A function that reads the user input and compares it to the correct answer
export function checkAnswer(data, k, phraseInfo, score, boxes, phraseStats) {


  let phraseCount = phraseInfo[0];
  let phraseNumber = phraseInfo[1];
  //let phraseStats = [];
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
  // Selecting the special character buttons
  const specialBtns = document.querySelectorAll(".letters-section button");

  // The phrase display section
  const phraseDisplay = document.querySelector(".phrase-section p");

  // The speaker icon
  let speaker;

  const inputText = inputArea.value;
  let displaySection;

  console.log(phraseCount, phraseNumber);
  console.log(score)


  if (phraseCount < phraseNumber) {
    displaySection = nextSection;
  } else {
    displaySection = finishSection;
  }

  let oldFinish = document.querySelector(".finish-section");
  console.log(oldFinish)

  phraseStatObject.phrase = data.data[k].phrase;
  phraseStatObject.input = inputText;
  phraseStatObject.correctAnswer = data.data[k].answer;

  let answerType;
  const learnMoreSection = document.querySelector(".learnMore");

  const phraseDivCorrect = document.createElement("div");
  phraseDivCorrect.innerHTML = `<i class="fa-solid fa-square-check"></i> ${data.data[k].fullPhrase} <i class="fa-solid fa-volume-low" id="speaker"></i>
  <p class="translation">${data.data[k].translation}</p>`;

  const phraseDiv = document.createElement("div");
  phraseDiv.innerHTML = `${data.data[k].fullPhrase} <i class="fa-solid fa-volume-low" id="speaker"></i>
  <p class="translation">${data.data[k].translation}</p>`;

  if(inputText.trim().toLowerCase() !== "") {
    inputArea.classList.add("bold");
    phraseDisplay.innerHTML = "";

    specialBtns.forEach((button) => {
      button.setAttribute("disabled", "");
      inputArea.setAttribute("disabled", "");
    });
  }

  switch (inputText.trim().toLowerCase()) {
    case "":
    msgArea.innerText = "Please type a valid verb";
    break;

    case data.data[k].answer:
      phraseDisplay.appendChild(phraseDivCorrect);
      speaker = document.getElementById("speaker");
      playCorrect();
    
      inputArea.style.color = "#228b22";
      
      msgArea.innerText = "Correct!";


      phraseStatObject.isCorrect = true;
      
      if (speaker) {
        speaker.addEventListener("click", () => {
          playAudio(data.data[k].fullPhrase);
        });
      }

      score++;

      if (userId) {
        movePhraseForward(k, boxes);
      }
      phraseStats.push(phraseStatObject);
      break;

      case data.data[k].alternativeAnswer:
      phraseDisplay.appendChild(phraseDivCorrect);
      speaker = document.getElementById("speaker");
      playCorrect();
    
      inputArea.style.color = "#228b22";
      
      msgArea.innerText = "Correct!";


      phraseStatObject.isCorrect = true;
      
      if (speaker) {
        speaker.addEventListener("click", () => {
          playAudio(data.data[k].fullPhrase);
        });
      }

      score++;

      if (userId) {
        movePhraseForward(k, boxes);
      }
      phraseStats.push(phraseStatObject);
      break;

    case data.data[k]?.answerWoS:
      phraseDisplay.appendChild(phraseDivCorrect);
      speaker = document.getElementById("speaker");
      playCorrect();
      inputArea.style.color = "#d96e38";

      answerType = "almostPastComp";

      msgArea.innerHTML = "<p class='almost'>Almost correct.</p>";
      
      learnMoreSection.style.display = "block";

      showInfoPopup(data.data[k], data.data[0].tenseShort, answerType);

      phraseStatObject.almostCorrectCorrect = true;

      if (speaker) {
        speaker.addEventListener("click", () => {
          playAudio(data.data[k].fullPhrase);
        });
      }

      score++;

      if (userId) {
        movePhraseForward(k, boxes);
      }
      phraseStats.push(phraseStatObject);
      break;

    case data.data[k]?.answerWoAccent:
      phraseDisplay.appendChild(phraseDivCorrect);
      speaker = document.getElementById("speaker");
      playCorrect();
      inputArea.style.color = "#d96e38";

      learnMoreSection.style.display = "block";

      msgArea.innerHTML = "<p class='almost'>Almost correct.</p>";
      playCorrect();

      answerType = "almostWoAccent";

      showInfoPopup(data.data[k], data.data[0].tenseShort, answerType);

      phraseStatObject.almostCorrectCorrect = true;

      if (speaker) {
        speaker.addEventListener("click", () => {
          playAudio(data.data[k].fullPhrase);
        });
      }

      score++;

      if (userId) {
        movePhraseForward(k, boxes);
      }
      phraseStats.push(phraseStatObject);
      break;

    default:
      phraseDisplay.appendChild(phraseDiv);
      speaker = document.getElementById("speaker");
      playIncorrect();


      if (speaker) {
        speaker.addEventListener("click", () => {
          playAudio(data.data[k].fullPhrase);
        });
      }
      inputArea.style.color = "#ef233c";
      msgArea.innerText = `Incorrect. The correct answer is: "${data.data[k].answer}"`;

      if (userId) {
        movePhraseBackward(k, boxes);
      }

      showConjugations(data.data[k], data.data[0], conjugSection);

      learnMoreSection.style.display = "block";
      showInfoPopup(data.data[k], data.data[0].tenseShort);

      phraseStats.push(phraseStatObject);

  }


  // Popup close icon
  const popupCloseBtn = document.querySelector(".popup-icons .popup-close");
  if (popupCloseBtn) {
    popupCloseBtn.addEventListener("click", () => {
      console.log(popupCloseBtn);
      conjugSection.innerHTML = "";
      conjugSection.style.display = "none";
    });
  }

  if (inputText.trim().toLowerCase() !== "") {
    submitSection.style.display = "none";
    displaySection.style.display = "flex";
  }

  return { score, boxes };
}

// A function showing a table of conjugations
function showConjugations(verbObj, verb0, conjugSection) {
  console.log(conjugSection);
  try {
    let popupMsg = jsonConjug.verbs[`${verbObj.verb}`][`${verb0.tenseShort}`];
    if (verbObj.aux && verbObj.aux === "être" && verbObj.twoAux) {
      popupMsg = jsonConjug.verbs[`${verbObj.verb}`]["pastcompEtre"];
    }

    let popupMsgValues = Object.values(popupMsg);
    conjugSection.innerHTML = `<div class="popup-icons"><i class="fa-regular fa-lightbulb bulb-animation" 
  style="color: #ef233c;"></i><i class="fa-solid fa-xmark popup-close"></i></div>`;

    for (let i = 0; i < popupMsgValues.length; i++) {
      conjugSection.innerHTML += `<p>${popupMsgValues[i]}</p>`;
    }
    conjugSection.style.display = "block";
  } catch {
    console.log("Verb " + verbObj.verb + " is not found in database ");
  }
}
