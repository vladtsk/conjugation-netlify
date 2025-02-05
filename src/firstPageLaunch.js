import { showNoSubMessage } from "./noSubPageMessage.js";

import { checkTimeDifference } from "./livesManager.js";

import { showNoMoreLivesMessage } from "./noLivesPageMessage.js";

import { generateLoader, hideLoader } from "./loader.js";

import { getAuthDatabase } from "./readDbData.js";

import { getJsonData } from "./readDbData.js";

import { buildFirstPage } from "./firstPage.js";

import { getSubscriptionStatus } from "./readDbData.js";

import { buildModePage } from "./exerciseModePage.js";

export async function launchFirstPage() {
  const contentArea = document.querySelector(".content-area");
  contentArea.innerHTML = "";

  generateLoader();

  await getAuthDatabase();

  const { subStatus, userId } = await getSubscriptionStatus();

  let livesString = localStorage.getItem("lives");
  let lives;

  if (livesString && livesString !== "undefined") {
    lives = parseInt(livesString);
  } else {
    lives = 7;
    localStorage.setItem("lives", 7);
  }

  let timeDifferenceMnts = checkTimeDifference(); // the time difference between the last time the user used the app and now (in minutes)

  if (userId) {
    if (subStatus === "active") {
      await buildFirstPage(userId);
    } else {
      showNoSubMessage();
    }
  } else if (lives > 0) {
    await buildFirstPage(userId);
  } else if (lives === 0 && timeDifferenceMnts >= 60) {
    lives = 7;
    localStorage.setItem("lives", 7);

    await buildFirstPage(userId);
  } else {
    showNoMoreLivesMessage();
  }

  hideLoader();

  const firstNextBtn = document.getElementById("first-next-btn");

  const sidebarContainer = document.querySelector(".sidebarContainer");
  const sidebarTabletContainer = document.querySelector(
    ".sidebarTabletContainer"
  );
  const footer = document.querySelector("footer");
  const nav = document.querySelector("nav");

  // Adding an event listener on the first next button (to open an exercise mode page)

  if (firstNextBtn) {
    firstNextBtn.addEventListener("click", async () => {
      const phraseTypeEl = document.getElementById("phraseType");

      //phraseNumber = parseInt(phraseNb.textContent);
      const phraseType = phraseTypeEl.innerText;

      const { selectedTense, tenseValue } = getTenseFromSelectElement();

      // Remember the choice in the browser
      localStorage.setItem("phraseType", phraseType);
      localStorage.setItem("selectedTense", selectedTense);

      buildModePage(tenseValue, phraseType, userId);

      nav.style.display = "none";
      sidebarContainer.style.display = "none";
      sidebarTabletContainer.style.display = "none";
      footer.style.display = "none";
    });
  }
}

function getTenseFromSelectElement() {
  let tenseValue;
  const currentTenseEl = document.querySelector(".currentTense");
  const selectedTense = currentTenseEl.textContent;
  switch (selectedTense) {
    case "present (le présent de l'indicatif)":
      tenseValue = "present";
      break;

    case "past (le passé composé)":
      tenseValue = "pastComp";
      break;

    case "imperfect past (l'imparfait)":
      tenseValue = "pastImp";
      break;

    case "future (le futur simple)":
      tenseValue = "future";
      break;

    case "present subjunctive (le subjonctif présent)":
      tenseValue = "subjunctive";
      break;

    default:
      console.log("unkown tense");
  }
  return { selectedTense, tenseValue };
}
