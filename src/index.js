import { fetchFirebaseConfig, getDatabase } from "./firebaseConfig.js";

import {
  buildPageStructure,
  buildPageStructureQuiz,
  setSpecialBtns,
  showResultPage,
} from "./pagesetup.js";

import { getData } from "./readDbData.js";

import { launchFirstPage } from "./firstPageLaunch.js";

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

import {
  checkAuthState,
  handleAuthClicks,
  handleLogInLogOutClicks,
} from "./auth.js";

import { checkAnswer } from "./checkAnswer.js";
import { handleQuizAnswerSubmit } from "./checkAnswerQuiz.js";

//import emailjs from '@emailjs/browser';

import { getAnalytics, logEvent } from "firebase/analytics";

import { playEnd } from "./playAudio.js";

import {
  generateRulesPopupSection,
  generateBlurContainer,
} from "./rulesPopup.js";

import { handleCheckoutClick } from "./subscribe.js";

import { reloadAppOnLogoClick } from "./logoClick.js";

import {
  handleMenuAccountClick,
  handleMenuHelpClick,
} from "./account-popup.js";

import { handleClickOutsidePopup } from "./clickOutSidePopup.js";

import { managePracticeBtnClick } from "./menuPracticeBtnClick.js";

import { handleRulesPopup } from "./rulesPopup.js";

import { handleContactBtnClick } from "./account-popup.js";

import { showNoMorePhrasesPage } from "./pagesetup.js";

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

generateBlurContainer();
generateRulesPopupSection();
handleCheckoutClick();
reloadAppOnLogoClick();

handleRulesPopup();

//handleContactBtnClick();

document.addEventListener("click", handleClickOutsidePopup);

// A function launching the app
export async function launchApp(data, phraseType, mode) {
  const { app } = fetchFirebaseConfig();
  const database = getDatabase(app);

  const analytics = getAnalytics(app);

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

  const safeUserId = userId || "guest";

  if (analytics) {
    logEvent(analytics, "app_launch", {
      appUserId: safeUserId,
      exercise_mode: mode,
    });
  }

  let lives;
  let streak;
  let timeDiff;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // A "lives" qnd streak system for non-authenticated users
  if (!userId) {
    const storedTimeStamp = localStorage.getItem("streakLastChangeTime");

    // Retrieve lives from localStorage or set to default value

    const livesString = localStorage.getItem("lives");
    lives = livesString ? parseInt(livesString) : 7;

    const livesPElement = document.querySelector(".lives p");
    if (livesPElement) {
      livesPElement.textContent = lives;
    } else {
      console.error("Lives element not found");
    }

    // Retrieve streak from localStorage or set to default value
    const streakString = localStorage.getItem("streak");

    streak = streakString ? parseInt(streakString) : 0;

    // Check the last streak update date
    if (storedTimeStamp) {
      const streakLastChangeTime = parseInt(storedTimeStamp);
      //const streakLastChangeDate = new Date(streakLastChangeTime);

      timeDiff = today.getTime() - streakLastChangeTime;

      if (timeDiff / (1000 * 60 * 60 * 24) >= 2) {
        streak = 0;
      }
    }

    const streakEl = document.querySelector(".streak p");
    if (streakEl) {
      streakEl.textContent = streak;
    } else {
      console.error("Streak element not found");
    }
  } else {
    // Retrieve streak from stats array or set to default value
    const streakString = stats[stats.length - 1]?.streak;

    const streakLastChangeTime =
      parseInt(stats[stats.length - 1]?.timestamp) || 0;

    streak = streakString ? parseInt(streakString) : 0;

    timeDiff = today.getTime() - streakLastChangeTime;

    if (timeDiff / (1000 * 60 * 60 * 24) >= 2) {
      streak = 0;
    }

    const streakEl = document.querySelector(".streak p");
    if (streakEl) {
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

  if (mode === "typeMode") {
    buildPageStructure();
  } else {
    buildPageStructureQuiz();
  }

  displayTense(data);

  setSpecialBtns();

  let phraseStats = [];

  // Generating a unique index and displaying a verb and a phrase
  try {
    k = generateElements({
      data,
      indexArray,
      k,
      score,
      phraseStats,
      phraseType,
      mode,
    });

    phraseCount++;

    let quizResult;
    if (mode === "quizMode") {
      quizResult = await handleQuizAnswerSubmit({
        data,
        k,
        phraseCount,
        score,
        boxes,
        phraseStats,
        lives,
        userId,
      });
      ({ score, boxes, lives } = quizResult);
    }
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

  // Submit button listener for the type mode
  if (mode === "typeMode" && submitBtn) {
    submitBtn.addEventListener("click", () => {
      let result = checkAnswer({
        data,
        k,
        phraseCount,
        score,
        boxes,
        phraseStats,
        lives,
        userId,
      });
      ({ score, boxes, lives } = result);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", async () => {
      if (conjugSection) {
        conjugSection.innerHTML = "";
        conjugSection.style.display = "none";
      }

      if (infoPopupSection) {
        infoPopupSection.innerHTML = "";
        infoPopupSection.style.display = "none";
      }

      if (learnMoreSection) {
        learnMoreSection.style.display = "none";
      }

      if (phraseDisplay) {
        phraseDisplay.style.color = "black";
      }

      if (inputArea) {
        //inputArea.style.color = "black";
        inputArea.classList.remove(
          "almost-correct-answer",
          "correct-answer",
          "incorrect-answer"
        );
      }

      const selectedOption = document.querySelector(".selectedOption");
      const correctOption = document.querySelector(".correct-option");

      if (selectedOption) {
        selectedOption.style.color = "black";
        selectedOption.classList.remove("selectedOption");
      }

      const correctTick = document.querySelector(".fa-circle-check");
      if (correctOption && correctTick) {
        correctOption.removeChild(correctTick);
      }

      if (correctOption) {
        correctOption.classList.remove("correct-option");
      }

      k = displayNext({
        data,
        indexArray,
        k,
        score,
        phraseStats,
        phraseType,
        mode,
      });
      phraseCount++;

      let quizNewResult;
      if (mode === "quizMode") {
        quizNewResult = await handleQuizAnswerSubmit({
          data,
          k,
          phraseCount,
          score,
          boxes,
          phraseStats,
          lives,
          userId,
        });
        ({ score, boxes, lives } = quizNewResult);
      }

      if (!userId) {
        localStorage.setItem("lives", lives);
      }
    });
  }

  finishBtn.addEventListener("click", () => {
    if (infoPopupSection) {
      infoPopupSection.style.display = "none";
    }

    if (conjugSection) {
      conjugSection.style.display = "none";
    }
    const statsContainer = document.querySelector(".stats-container");

    playEnd();

    if (accountBtn) {
      accountBtn.style.display = "none";
    }

    if (statsContainer) {
      statsContainer.style.display = "none";
    }

    //let streak;
    console.log("streak", streak);

    const currenttimestamp = Date.now();

    // Adding data to the database and updating the statistics

    if (userId) {
      const timestampDb = stats[stats.length - 1]?.timestamp;

      const streakString = stats[stats.length - 1]?.streak;

      // Retreieve streak from DB or assign 0
      streak = streakString ? parseInt(streakString) : 0;

      // Handle streak of an authenticated user
      streak = handleStreakAuthUser(timestampDb, streak, stats);

      addBoxToDb(data, boxes, userId, database);
      addStatsToDb(userId, database, stats, phraseStats);
    } else {
      streak = localStorage.getItem("streak") || 0;

      // handle streak of an unauthenticated user
      streak = handleStreakNonAuthUser(streak);

      localStorage.setItem("lives", lives);
    }

    if (!userId) {
      localStorage.setItem("appLastUseTime", currenttimestamp.toString());
    }

    showResultPage({ score, phraseStats, stats, userId, streak });

    if (analytics) {
      logEvent(analytics, "app_finish", {
        appUserId: safeUserId,
        streak: streak,
        score: score,
      });
    }
  });
}
