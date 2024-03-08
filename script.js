import {
  app,
  getAuth,
  getDatabase,
  ref,
  set,
  onValue,
  onAuthStateChanged,
} from "./config.js";

import {
  showFirstPage,
  buildPageStructure,
  setSpecialBtns,
  showResultPage,
} from "./pagesetup.js";

import { launchFirstPage, readDataFromDb } from "./init.js";

import {
  generateElements,
  displayTense,
  displayNext,
  checkAnswer,
} from "./main.js";

import { addBoxToDb } from "./final.js";

const auth = getAuth(app);
const database = getDatabase(app);

let userId;

let score;

let boxes = [[], [], [], [], [], []];

// Create an array of indeces
let indexArray = [];

launchFirstPage();

// A function launching the app
export function launchApp(data, phraseNumber) {
  // Making sure all the boxes are empty (to avoid errors when relaunching the app)

  boxes = [[], [], [], [], [], []];

  // An index that will be generated randomly
  let k;

  // Adding a variable counting the nb of phrases that have been shown to the user
  let phraseCount;

  // Initializing the index array
  indexArray = [];

  // Initializing the phrase counter and the score
  phraseCount = 0;

  score = 0;

  userId = 0;

  // Getting information from the database about the user's performance and copying the database information to dbArray
  onAuthStateChanged(auth, (user) => {
    if (user) {
      userId = auth.currentUser.uid;
      const presentRef = ref(
        database,
        "users/" + userId + "/data/" + "/present"
      );
      const pastcompRef = ref(
        database,
        "users/" + userId + "/data/" + "/pastcomp"
      );
      const pastimpRef = ref(
        database,
        "users/" + userId + "/data/" + "/pastimp"
      );

      if (data.data[0].tense === "present (le présent de l'indicatif)") {
        readDataFromDb(presentRef, boxes, indexArray);
      }

      if (data.data[0].tense === "past (le passé composé)") {
        readDataFromDb(pastcompRef, boxes, indexArray);
      }

      if (data.data[0].tense === "imperfect past (l'imparfait)") {
        readDataFromDb(pastimpRef, boxes, indexArray);
      }
    } else {
      console.log("User is signed out");
    }
  });

  // Initializing the array box1 if there is no previous history (all the phrases go to box1)
  if (data && data.data.length > 0 && boxes.every((box) => box.length === 0)) {
    for (let i = 0; i < data.data.length; i++) {
      let object = { id: i + 1, repetDate: 0 };
      boxes[0].push(object);
    }
  }

  buildPageStructure(data);
  displayTense(data);

  setSpecialBtns();

  // Generating a unique index and displaying a verb and a phrase
  k = generateElements(data, indexArray, phraseCount, k);
  phraseCount++;

  // Adding an event listener to check the answer when the 'submit' button is clicked

  // Select the submit button
  const submitBtn = document.getElementById("submit-btn");

  // An array containing the score variable and the boxes array
  let scoreBoxes;

  let phraseStats = [];

  submitBtn.addEventListener("click", () => {
    let phraseInfo = [phraseCount, phraseNumber];
    scoreBoxes = checkAnswer(data, k, phraseInfo, score, boxes, phraseStats);
    score = scoreBoxes[0];
    boxes = scoreBoxes[1];
  });

  // Adding an event listener to display the next phrase to test

  // Select the 'next' button and the conjugation popup section
  const nextBtn = document.getElementById("next-btn");
  const conjugSection = document.querySelector(".conjugSection");
  // The phrase section
  const phraseDisplay = document.querySelector(".phrase-section p");
  // The input area
  const inputArea = document.querySelector(".type-section input");

  nextBtn.addEventListener("click", () => {
    conjugSection.innerHTML = "";
    conjugSection.style.display = "none";
    phraseDisplay.style.color = "black";
    inputArea.style.color = "black";
    k = displayNext(data, indexArray, phraseCount, k);
    phraseCount++;
  });

  // Select the finish button
  const finishBtn = document.getElementById("finish-btn");
  finishBtn.addEventListener("click", () => {
    conjugSection.innerHTML = "";
    conjugSection.style.display = "none";
    showResultPage(score, phraseNumber, phraseStats);

    // Adding data to the database

    if (userId !== 0) {
      addBoxToDb(data, boxes, userId, database);
    } else {
      console.log("User is signed out");
    }
  });
}
