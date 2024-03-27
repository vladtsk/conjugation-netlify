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

import {
  launchFirstPage,
  readDataFromDb,
  readStatsFromDb,
  checkRepetDate,
  excludeBox6,
} from "./init.js";

import {
  generateElements,
  displayTense,
  displayNext,
  checkAnswer,
} from "./main.js";

import { addBoxToDb, addStatsToDb } from "./final.js";

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

  // Getting information from the database about the user's performance and copying the database information to dbArray
  async function getUser() {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          //userId = auth.currentUser.uid;
          resolve(auth.currentUser.uid);
        } else {
          resolve(null);
        }
      });
    });
  }

  async function getData() {
    userId = await getUser();
    if (userId) {
      console.log(userId);
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

      const statsRef = ref(database, "users/" + userId + "/data/" + "/stats");

      if (data.data[0].tense === "present (le présent de l'indicatif)") {
        await readDataFromDb(presentRef, boxes).then((dbBoxes) => {
          boxes = dbBoxes;
        });
      }

      if (data.data[0].tense === "past (le passé composé)") {
        await readDataFromDb(pastcompRef, boxes).then((dbBoxes) => {
          boxes = dbBoxes;
        });
      }

      if (data.data[0].tense === "imperfect past (l'imparfait)") {
        await readDataFromDb(pastimpRef, boxes).then((dbBoxes) => {
          boxes = dbBoxes;
        });
      }

      readStatsFromDb(statsRef).then((dbStats) => {
        stats = dbStats;
      });

      // Checking the first 5 boxes for the repetition date (the last one is not shown by default)
      for (let i = 0; i < boxes.length - 1; i++) {
        checkRepetDate(boxes[i], indexArray);
      }
      //Excluding the elements in the Box6
      excludeBox6(boxes, indexArray);
    } else {
      console.log("User is signed out");
    }
  }

  await getData();

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
        addStatsToDb(userId, database, stats, phraseStats);
      } else {
        console.log("User is signed out");
      }

      showResultPage(score, phraseStats, stats, userId);
    });
  }
}
