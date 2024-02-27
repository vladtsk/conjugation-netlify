// Functions used in the first part of the application

import {
  showFirstPage,
  buildPageStructure,
  setSpecialBtns,
  showResultPage,
} from "./pagesetup.js";

import { launchApp } from "./script.js";

export async function launchFirstPage(phraseNumber) {
  showFirstPage(); // Building the first page structure
  phraseNumber = 5; // Making sure the phrase number is back to its default value

  // Fetching the present tense data by default

  let response = await fetch("present.json");
  let jsonData = await response.json();

  const selectElement = document.getElementById("tense");
  const selectPhrNb = document.getElementById("phraseNb");
  const startBtn = document.getElementById("start-btn");

  // Adding an event listener in case the user changes the tense
  if (selectElement) {
    selectElement.addEventListener("change", async () => {
      response = await fetch(`${selectElement.value}.json`);
      jsonData = await response.json();
    });
  }

  // Customer selecting the number of phrases
  if (selectPhrNb) {
    selectPhrNb.addEventListener("change", () => {
      phraseNumber = selectPhrNb.value;
    });
  }

  // Adding an event listener on the start button
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      launchApp(jsonData);
    });
  }
}
