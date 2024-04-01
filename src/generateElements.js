import { showNoMorePhrasesPage } from "./pagesetup.js";

// A function generating a unique index and displaying a verb and a phrase corresponding to the index
export function generateElements(data, indexArray, k, score, phraseStats) {
  if (indexArray.length !== data.data.length) {
    // Generate a random and unique index
    k = Math.floor(Math.random() * data.data.length);
    do {
      k = Math.floor(Math.random() * data.data.length);
    } while (indexArray.includes(k));
    indexArray.push(k);
    console.log(k);
    console.log(indexArray);
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
  const msgArea = document.querySelector(".msg-section");
  // Select the input element
  const inputArea = document.querySelector(".type-section input");
  inputArea.removeAttribute("disabled");
  inputArea.classList.remove("bold");

  // Selecting the special character buttons
  const specialBtns = document.querySelectorAll(".letters-section button");
  specialBtns.forEach((button) => {
    button.removeAttribute("disabled");
  });

  msgArea.innerHTML = "";
  inputArea.value = "";

  k = generateElements(data, indexArray, k, score, phraseStats);
  nextSection.style.display = "none";
  submitSection.style.display = "flex";
  return k;
}
