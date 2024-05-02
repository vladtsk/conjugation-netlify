// Functions used in the main part

import { movePhraseForward, movePhraseBackward } from "./spacedRepetition.js";

import { playAudio, playCorrect, playIncorrect } from "./playAudio.js";

import { onAuthStateChanged, app, getAuth } from "./config.js";

const auth = getAuth(app);

// Fetching verb conjugation tables
const responseConjug = await fetch("./src/conjugation.json");
const jsonConjug = await responseConjug.json();

// Getting the user ID
let userId;
onAuthStateChanged(auth, (user) => {
  if (user) {
    userId = auth.currentUser.uid;
  }
});

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

  let scoreBoxes;

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

  if (phraseCount < phraseNumber) {
    displaySection = nextSection;
  } else {
    displaySection = finishSection;
  }

  phraseStatObject.phrase = data.data[k].phrase;
  phraseStatObject.input = inputText;
  phraseStatObject.correctAnswer = data.data[k].answer;

  switch (inputText.trim().toLowerCase()) {
    case "":
      msgArea.innerText = "Please type a valid verb";
      break;
    case data.data[k].answer:
      phraseDisplay.innerHTML = `<div><i class="fa-solid fa-square-check"></i> ${data.data[k].fullPhrase} <i class="fa-solid fa-volume-low" id="speaker"></i><p class="translation">${data.data[k].translation}</p></div>`;
      /*phraseDisplay.style.color = "#228b22";*/
      inputArea.style.color = "#228b22";
      inputArea.classList.add("bold");
      msgArea.innerText = "Correct!";
      playCorrect();

      //underlineWord(data, k, phraseDisplay);

      phraseStatObject.isCorrect = true;

      inputArea.setAttribute("disabled", "");

      specialBtns.forEach((button) => {
        button.setAttribute("disabled", "");
      });

      speaker = document.getElementById("speaker");

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
      phraseDisplay.innerHTML = `<div><i class="fa-solid fa-square-check"></i> ${data.data[k].fullPhrase} <i class="fa-solid fa-volume-low" id="speaker"></i><p class="translation">${data.data[k].translation}</p></div>`;
      /*phraseDisplay.style.color = "#fa8950";*/
      inputArea.style.color = "#d96e38";
      inputArea.classList.add("bold");

      if (data.data[k].fem) {
        msgArea.innerHTML =
          "<p class='almost'>Almost correct.</p> <p class='reminder'>Don't forget to add an 'e' to match feminine singular subjects (elle, Anna, etc.) when a verb in conjugated with 'être' in the 'passé composé'.</p> <p class='reminder'> For the subjects 'je' and 'tu', pay attention to hints like '(masc.)' and '(fem.)'.</p> ";
      }
      if (data.data[k].plural) {
        msgArea.innerHTML =
          "<p class='almost'>Almost correct.</p> <p class='reminder'>Don't forget to add an 's' to match plural subjects (ils, les enfants, etc.) when a verb is conjugated with 'être' in the 'passé composé'.</p>";
      }

      phraseStatObject.almostCorrectCorrect = true;

      inputArea.setAttribute("disabled", "");

      specialBtns.forEach((button) => {
        button.setAttribute("disabled", "");
      });

      speaker = document.getElementById("speaker");

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
      phraseDisplay.innerHTML = `<div>${data.data[k].fullPhrase} <i class="fa-solid fa-volume-low" id="speaker"></i>`;
      //underlineWord(data, k, phraseDisplay);
      speaker = document.getElementById("speaker");

      if (speaker) {
        speaker.addEventListener("click", () => {
          playAudio(data.data[k].fullPhrase);
        });
      }
      inputArea.style.color = "#ef233c";
      msgArea.innerText = `Incorrect. The correct answer is: "${data.data[k].answer}"`;
      playIncorrect();
      inputArea.setAttribute("disabled", "");
      inputArea.classList.add("bold");
      specialBtns.forEach((button) => {
        button.setAttribute("disabled", "");
      });

      if (userId) {
        movePhraseBackward(k, boxes);
      }

      try {
        let popupMsg =
          jsonConjug.verbs[`${data.data[k].verb}`][
            `${data.data[0].tenseShort}`
          ];
        if (
          data.data[k].aux &&
          data.data[k].aux === "être" &&
          data.data[k].twoAux
        ) {
          popupMsg = jsonConjug.verbs[`${data.data[k].verb}`]["pastcompEtre"];
        }

        let popupMsgValues = Object.values(popupMsg);
        conjugSection.innerHTML = `<div class="popup-icons"><i class="fa-regular fa-lightbulb bulb-animation" 
      style="color: #ef233c;"></i><i class="fa-solid fa-xmark popup-close"></i></div>`;

        for (let i = 0; i < popupMsgValues.length; i++) {
          conjugSection.innerHTML += `<p>${popupMsgValues[i]}</p>`;
        }
        conjugSection.style.display = "block";
      } catch {
        console.log("Verb " + data.data[k].verb + " is not found in database ");
      }
      phraseStats.push(phraseStatObject);
  }

  /*
  function underlineWord(data, k, phrase) {
    const answerSplit = data.data[k].answer.split(" ");
    console.log(answerSplit);
    console.log(phrase.innerHTML);

    let underlinedPhrase = phrase.innerHTML;
    answerSplit.forEach((el) => {
      const regex = new RegExp("([\\s']|^)(" + el + ")([\\s.,!?]|$)", "g");
      console.log(el);
      underlinedPhrase = underlinedPhrase.replace(regex, function (match) {
        return "<u>" + match + "</u>";
      });
    });

    console.log(underlinedPhrase);
    phrase.innerHTML = underlinedPhrase;
  }

  */

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
  scoreBoxes = [score, boxes];
  return scoreBoxes;
}
