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
import { openBonusPage } from "./bonusPageManager.js";

import { handleStreakAuthUser, handleStreakNonAuthUser } from "./streak.js";



import { addBoxToDb, addStatsToDb } from "./addDataDb.js";


import { checkAuthState, handleAuthClicks, handleLogInLogOutClicks } from "./auth.js";

import { checkAnswer } from "./checkAnswer.js";

import emailjs from '@emailjs/browser';

//import { playEnd } from "./playAudio.js";

import { generateRulesPopupSection, generateBlurContainer } from "./rulesPopup.js";

import { handleCheckoutClick } from "./subscribe.js";

import { reloadAppOnLogoClick } from "./logoClick.js";

import { handleMenuAccountClick, handleMenuHelpClick } from "./account-popup.js";

import { handleClickOutsidePopup } from "./clickOutSidePopup.js";

import { managePracticeBtnClick } from "./menuPracticeBtnClick.js";

import { handleRulesPopup } from "./rulesPopup.js";

import { handleContactBtnClick } from "./account-popup.js";

checkAuthState();

handleAuthClicks();
handleLogInLogOutClicks();


launchFirstPage();


managePracticeBtnClick();

handleMenuAccountClick();
handleMenuHelpClick();

openLearnPage();
openStatsPage();
openBonusPage();

generateBlurContainer()
generateRulesPopupSection();
handleCheckoutClick();
reloadAppOnLogoClick();

handleRulesPopup();

//handleContactBtnClick();

document.addEventListener("click", handleClickOutsidePopup);


// A function launching the app
export async function launchApp(data, phraseType) {
 
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


  let lives;
  let streak;
  let timeDiff;

  const today = new Date();

  // A "lives" system for non-authenticated users
  if(!userId) {
    
    const storedTimeStamp = localStorage.getItem("streakLastChangeTime");

     // Retrieve lives from localStorage or set to default value

    const livesString = localStorage.getItem("lives");
    lives = livesString ? parseInt(livesString) : 7;

    const livesPElement = document.querySelector(".lives p");
    if(livesPElement) {
      livesPElement.textContent = lives;
    } else {
      console.error("Lives element not found");
    }
    
     // Retrieve streak from localStorage or set to default value
    const streakString = localStorage.getItem("streak");

    streak = streakString ? parseInt(streakString) : 0;

    // Check the last streak update date
    if(storedTimeStamp) {
         
      const streakLastChangeTime = parseInt(storedTimeStamp);
      //const streakLastChangeDate = new Date(streakLastChangeTime);

      timeDiff = today.getTime() - streakLastChangeTime;

      console.log("dayDiff", timeDiff/(1000*60*60*24));

      if(timeDiff/(1000*60*60*24) >= 2 ) {
        streak = 0;
    }
  }
  
    const streakEl = document.querySelector(".streak p");
    if(streakEl) {
      streakEl.textContent = streak;
    } else {
      console.error("Streak element not found");
    }
   

    } else {
     
       // Retrieve streak from stats array or set to default value
      const streakString = stats[stats.length - 1]?.streak;
        
      streak = streakString ? parseInt(streakString) : 0;

      const streakEl = document.querySelector(".streak p");
      if(streakEl) {
        streakEl.textContent = streak;
      } else {
        console.error("Streak element not found");
      }
      

    }
  
  

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
  try {
    k = generateElements({data, indexArray, k, score, phraseStats, phraseType});
     phraseCount++;
  } catch (error) {
    console.error(error.message);
    showNoMorePhrasesPage(score, phraseStats); 
  }
  


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

  const accountBtn = document.querySelector(".menu-element.account");
  
  submitBtn.addEventListener("click", ()=> {
    
    let result = checkAnswer({ data, k, phraseCount, score, boxes, phraseStats, lives, userId });
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
        k = displayNext({data, indexArray, k, score, phraseStats, phraseType});
        phraseCount++;
        if(!userId) {
          localStorage.setItem("lives", lives);
        }
        
  })


  finishBtn.addEventListener("click", ()=> {
    infoPopupSection.style.display = "none";
      conjugSection.style.display = "none";
      const statsContainer = document.querySelector(".stats-container");

      //playEnd();

      if(accountBtn) {
        accountBtn.style.display = "none";
      }

      if(statsContainer) {
        statsContainer.style.display = "none";
      }
  
      

   
      let streak; 

      const currenttimestamp = Date.now();

      // Adding data to the database and updating the statistics

      if (userId) {

        const timestampDb = stats[stats.length - 1].timestamp; // new dateDb

        const streakString = stats[stats.length - 1].streak;
        
        // Retreieve streak from DB or assign 0
        streak = streakString ? parseInt(streakString) : 0;

       
        // handle streak of an authenticated user
        streak = handleStreakAuthUser(timestampDb, streak, stats); 
        
        
        console.log("User: streak", streak);

        addBoxToDb(data, boxes, userId, database);
        addStatsToDb(userId, database, stats, phraseStats, streak);
      
      } else {

        streak = localStorage.getItem("streak") || 0;
        console.log("streak no user, before handleStreakNonAuthUser", streak)
        
        // handle streak of an unauthenticated user
        streak = handleStreakNonAuthUser(streak); 

        
        
        console.log("streak no user after handleStreakNonAuthUser", streak);


        localStorage.setItem("lives", lives);
        console.log("User is signed out");
      }

      localStorage.setItem("appLastUseTime", currenttimestamp.toString());
      showResultPage({score, phraseStats, stats, userId, streak});
  })



}

