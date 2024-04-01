import { app, getAuth, getDatabase } from "./config.js";

import {
  buildPageStructure,
  setSpecialBtns,
  showResultPage,
} from "./pagesetup.js";

import { launchFirstPage, getData } from "./readDbData.js";

import {
  generateElements,
  displayTense,
  displayNext,
} from "./generateElements.js";

import { checkAnswer } from "./checkAnswer.js";

import { addBoxToDb, addStatsToDb } from "./addDataDb.js";

const auth = getAuth(app);
const database = getDatabase(app);

let userId;

let score;

let boxes = [[], [], [], [], [], []];

// An array containing statistics about the user's performance
let stats;

// Create an array of indeces
let indexArray = [];

launchFirstPage();

// A function launching the app
export async function launchApp(data, phraseNumber) {
  // Making sure all the boxes are empty (to avoid errors when relaunching the app)

  boxes = [[], [], [], [], [], []];
  stats = [];

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

  const result = await getData(data, boxes, stats, indexArray);
  userId = result.userId;
  stats = result.stats;

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

  // An array containing the score variable and the boxes array
  let scoreBoxes;

  let phraseStats = [];

  // Generating a unique index and displaying a verb and a phrase
  k = generateElements(data, indexArray, k, score, phraseStats);
  phraseCount++;

  // Adding an event listener to check the answer when the 'submit' button is clicked

  // Select the submit button
  const submitBtn = document.getElementById("submit-btn");

  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      let phraseInfo = [phraseCount, phraseNumber];
      scoreBoxes = checkAnswer(data, k, phraseInfo, score, boxes, phraseStats);
      score = scoreBoxes[0];
      boxes = scoreBoxes[1];
    });
  }

  // Adding an event listener to display the next phrase to test

  // Select the 'next' button and the conjugation popup section
  const nextBtn = document.getElementById("next-btn");
  const conjugSection = document.querySelector(".conjugSection");
  // The phrase section
  const phraseDisplay = document.querySelector(".phrase-section p");
  // The input area
  const inputArea = document.querySelector(".type-section input");

  const main = document.querySelector("main");

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      conjugSection.innerHTML = "";
      conjugSection.style.display = "none";
      phraseDisplay.style.color = "black";
      inputArea.style.color = "black";
      k = displayNext(data, indexArray, k, score, phraseStats);
      phraseCount++;
    });
  }

  // Select the finish button
  const finishBtn = document.getElementById("finish-btn");
  if (finishBtn) {
    finishBtn.addEventListener("click", () => {
      /*conjugSection.innerHTML = "";
      conjugSection.style.display = "none"; */

      if (conjugSection) {
        main.removeChild(conjugSection);
      }

      // Adding data to the database and updating the statistics

      if (userId) {
        addBoxToDb(data, boxes, userId, database);
        console.log(stats);
        addStatsToDb(userId, database, stats, phraseStats);
      } else {
        console.log("User is signed out");
      }

      showResultPage(score, phraseStats, stats, userId);
    });
  }
}
