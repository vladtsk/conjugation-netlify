import { fetchFirebaseConfig, getDatabase } from "./firebaseConfig.js";

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

import { openLearnPage } from "../public/learnPageManager.js";
import { openStatsPage } from "./stats.js";


import { addBoxToDb, addStatsToDb } from "./addDataDb.js";


import { checkAuthState, handleAuthClicks, handleLogInLogOutClicks } from "./auth.js";

import { checkAnswer } from "./checkAnswer.js";

import { generateRulesPopupSection, generateBlurContainer } from "./rulesPopup.js";

import { handleCheckoutClick } from "./subscribe.js";

import { reloadAppOnLogoClick } from "./logoClick.js";

import { handleMenuAccountClick } from "../public/account-popup.js";

import { handleClickOutsidePopup } from "./clickOutSidePopup.js";

import { managePracticeBtnClick } from "./menuPracticeBtnClick.js";

import { handleRulesPopup } from "./rulesPopup.js";


checkAuthState();

handleAuthClicks();
handleLogInLogOutClicks();

launchFirstPage();

managePracticeBtnClick();

handleMenuAccountClick();

openLearnPage();

openStatsPage();
generateBlurContainer()
generateRulesPopupSection();
handleCheckoutClick();
reloadAppOnLogoClick();

handleRulesPopup();

document.addEventListener("click", handleClickOutsidePopup);


// A function launching the app
export async function launchApp(data, phraseNumber) {
 
  const { app } = fetchFirebaseConfig();
  const database = getDatabase(app);

  // An array containing 6 boxes used for spaced repetition
  let boxes = [[], [], [], [], [], []];

  // An array containing statistics about the user's performance
  let stats = [];

  // An index that will be generated randomly
  let k;

  // Adding a variable counting the nb of phrases that have been shown to the user
  let phraseCount = 0;

  // Initializing the index array
  let indexArray = [];


  let score = 0;

  let userId = 0;

  const result = await getData(data, boxes, stats, indexArray);
  userId = result.userId;
  stats = result.stats;

  // A "lives" system for non-authenticated users
  const livesString = window.localStorage.getItem("lives");
  let lives;

  if(livesString) {
    lives = parseInt(livesString);
  } else {
    lives = 7;
  }

  const livesPElement = document.querySelector(".lives p");
  livesPElement.innerHTML = `${lives}`;
  

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


  let phraseStats = [];


  // Generating a unique index and displaying a verb and a phrase
  k = generateElements(data, indexArray, k, score, phraseStats);
  phraseCount++;


  const conjugSection = document.querySelector(".conjugSection");
  // The phrase section
  const phraseDisplay = document.querySelector(".phrase-section p");
  // The input area
  const inputArea = document.querySelector(".type-section input");

  //const contentArea = document.querySelector(".content-area");
  const learnMoreSection = document.querySelector(".learnMore");

  const infoPopupSection = document.querySelector(".infoPopupSection");

  
  // Adding an event listener for submit, next & finish buttons

  const submitBtn = document.getElementById("submit-btn");
  const nextBtn = document.getElementById("next-btn");
  const finishBtn = document.getElementById("finish-btn");

  submitBtn.addEventListener("click", ()=> {
    let phraseInfo = [phraseCount, phraseNumber];
    let result = checkAnswer({ data, k, phraseInfo, score, boxes, phraseStats, lives });
    ({ score, boxes, lives } = result);
   
  })

  nextBtn.addEventListener("click", ()=> {
    conjugSection.innerHTML = "";
        infoPopupSection.innerHTML = "";
        conjugSection.style.display = "none";
        infoPopupSection.style.display = "none";
        learnMoreSection.style.display = "none";
      
        phraseDisplay.style.color = "black";
        inputArea.style.color = "black";
        k = displayNext(data, indexArray, k, score, phraseStats);
        phraseCount++;
  })


  finishBtn.addEventListener("click", ()=> {
    infoPopupSection.style.display = "none";
      conjugSection.style.display = "none";

      // Adding data to the database and updating the statistics

      if (userId) {
        addBoxToDb(data, boxes, userId, database);
        addStatsToDb(userId, database, stats, phraseStats);
      } else {
        window.localStorage.setItem("lives", lives);
        console.log("User is signed out");
      }

      showResultPage(score, phraseStats, stats, userId);
  })



}

