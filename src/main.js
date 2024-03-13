// Functions used in the main part

import { playAudio, movePhraseForward, movePhraseBackward } from "./final.js";

import { onAuthStateChanged, app, getAuth } from "./config.js";

import { showNoMorePhrasesPage } from "./pagesetup.js";

const auth = getAuth(app);

// Fetching verb conjugation tables
const responseConjug = await fetch("../src/conjugation.json");
const jsonConjug = await responseConjug.json();

// Getting the user ID
let userId;
onAuthStateChanged(auth, (user) => {
  if (user) {
    userId = auth.currentUser.uid;
  }
});

// A function generating a unique index and displaying a verb and a phrase corresponding to the index
export function generateElements(data, indexArray, k, score, phraseStats) {
  if (indexArray.length !== data.data.length) {
    // Generate a random and unique index
    k = Math.floor(Math.random() * data.data.length);
    do {
      k = Math.floor(Math.random() * data.data.length);
    } while (indexArray.includes(k));
    indexArray.push(k);
    displayVerb(data, k);
    displayPhrase(data, k);
  } else {
    console.log("No more phrases to practise!");
    showNoMorePhrasesPage(score, phraseStats);
  }

  return k;
}

// A function that displays a verb to conjugate
function displayVerb(data, k) {
  // Selecting the verb display section
  const verbDisplay = document.querySelector(".verb-display p");

  if (data && data.data.length > 0) {
    verbDisplay.textContent = data.data[k].verb;
  }
}

// A function that displays a phrase (the context)
function displayPhrase(data, k) {
  // Selecting the phrase display section (the "p" element)
  const phraseDisplay = document.querySelector(".phrase-section p");
  if (data && data.data.length > 0) {
    phraseDisplay.textContent = data.data[k].phrase;
  }
}

// A function displaying the tense
export function displayTense(data) {
  // Selecting the tense display section
  const tenseDisplay = document.querySelector(".tense-display p");
  // Displaying the tense
  if (data && data.data.length > 0) {
    tenseDisplay.textContent = data.data[0].tense;
  }
}

// Display the next element
export function displayNext(data, indexArray, k, score, phraseStats) {
  // Select the 'next' section
  const nextSection = document.querySelector(".next-section");

  // Selecting the submit section
  const submitSection = document.querySelector(".submit-section");

  // Selecting the message "p" element
  const msgArea = document.querySelector(".msg-section p");
  // Select the input element
  const inputArea = document.querySelector(".type-section input");
  inputArea.removeAttribute("disabled");
  inputArea.classList.remove("bold");

  // Selecting the special character buttons
  const specialBtns = document.querySelectorAll(".letters-section button");
  specialBtns.forEach((button) => {
    button.removeAttribute("disabled");
  });

  msgArea.innerText = "";
  inputArea.value = "";

  k = generateElements(data, indexArray, k, score, phraseStats);
  nextSection.style.display = "none";
  submitSection.style.display = "flex";
  return k;
}

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
  };

  let scoreBoxes;

  // Select "p" element for a message to display
  const msgArea = document.querySelector(".msg-section p");
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
      phraseDisplay.innerHTML = `<p><i class="fa-solid fa-square-check"></i> ${data.data[k].fullPhrase} <i class="fa-solid fa-volume-low"></i></p>`;
      phraseDisplay.style.color = "#228b22";
      inputArea.style.color = "#228b22";
      inputArea.classList.add("bold");
      msgArea.innerText = "Correct!";

      phraseStatObject.isCorrect = true;

      inputArea.setAttribute("disabled", "");

      specialBtns.forEach((button) => {
        button.setAttribute("disabled", "");
      });

      // The speaker icon
      const speaker = document.querySelector(".fa-volume-low");

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
      phraseDisplay.textContent = data.data[k].fullPhrase;
      inputArea.style.color = "#ef233c";
      msgArea.innerText = `Incorrect. The correct answer is: "${data.data[k].answer}"`;
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
          console.log(popupMsg);
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

  console.log(phraseStats);

  // Popup close icon
  const popupCloseBtn = document.querySelector(".popup-close");
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
  scoreBoxes = [score, boxes];
  return scoreBoxes;
}
