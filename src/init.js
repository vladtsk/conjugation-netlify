// Functions used in the first part of the application

import {
  showFirstPage,
  buildPageStructure,
  setSpecialBtns,
  showResultPage,
} from "./pagesetup.js";

import { onValue } from "./config.js";

import { launchApp } from "./script.js";

export async function launchFirstPage() {
  showFirstPage(); // Building the first page structure
  let phraseNumber = 5; // Making sure the phrase number is back to its default value

  // Fetching the present tense data by default

  let response = await fetch("../src/present.json");
  let jsonData = await response.json();

  const selectElement = document.getElementById("tense");
  const selectPhrNb = document.getElementById("phraseNb");
  const startBtn = document.getElementById("start-btn");

  // Adding an event listener in case the user changes the tense
  if (selectElement) {
    selectElement.addEventListener("change", async () => {
      response = await fetch(`../src/${selectElement.value}.json`);
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
      launchApp(jsonData, phraseNumber);
    });
  }
}

export function readDataFromDb(timeRef, boxes, indexArray) {
  onValue(
    timeRef,
    (snapshot) => {
      const dbRefData = snapshot.val();
      if (dbRefData) {
        if (dbRefData.box1) {
          boxes[0] = dbRefData.box1;
        }
        if (dbRefData.box2) {
          boxes[1] = dbRefData.box2;
        }
        if (dbRefData.box3) {
          boxes[2] = dbRefData.box3;
        }
        if (dbRefData.box4) {
          boxes[3] = dbRefData.box4;
        }
        if (dbRefData.box5) {
          boxes[4] = dbRefData.box5;
        }
        if (dbRefData.box6) {
          boxes[5] = dbRefData.box6;
        }
      }

      // Checking the first 5 boxes for the repetition date (the last one is not shown by default)
      for (let i = 0; i < boxes.length - 1; i++) {
        checkRepetDate(boxes[i], indexArray);
      }
      //Excluding the elements in the Box6
      excludeBox6(boxes, indexArray);
    },
    {
      onlyOnce: true,
    }
  );
}

export function readStatsFromDb(timeRef) {
  return new Promise((resolve, reject) => {
    onValue(
      timeRef,
      (snapshot) => {
        const dbRefData = snapshot.val();
        console.log(dbRefData);
        if (dbRefData) {
          resolve(dbRefData);
          //stats = dbRefData;
        } else {
          reject(new Error("Statistics not found in DB"));
        }
      },
      {
        onlyOnce: true,
      }
    );
  });
}

// A function selecting phrases (actually their IDs) not to show based on the scheduled repetition date (i.e. indices to exclude)
function checkRepetDate(box, indexArray) {
  const today = new Date();

  for (let i = 0; i < box.length; i++) {
    if (box[i].repetDate > today.getTime()) {
      indexArray.push(box[i].id - 1);
    }
  }
}

// A function excluding the elements in the Box6
function excludeBox6(boxes, indexArray) {
  for (let i = 0; i < boxes[5].length; i++) {
    if (boxes[5][i].repetDate !== 0) {
      indexArray.push(boxes[5][i].id - 1);
    }
  }
}
