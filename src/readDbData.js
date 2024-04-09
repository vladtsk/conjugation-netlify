// Functions used in the first part of the application

import { showFirstPage } from "./pagesetup.js";

import {
  ref,
  onValue,
  onAuthStateChanged,
  app,
  getAuth,
  getDatabase,
} from "./config.js";

import { launchApp } from "./script.js";

const auth = getAuth(app);
const database = getDatabase(app);

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

function readDataFromDb(timeRef, boxes) {
  return new Promise((resolve, reject) => {
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

          resolve(boxes);
        } else {
          reject(new Error("Boxes not found in DB"));
        }
      },
      {
        onlyOnce: true,
      }
    );
  });
}

function readStatsFromDb(timeRef) {
  return new Promise((resolve, reject) => {
    onValue(
      timeRef,
      (snapshot) => {
        const dbRefData = snapshot.val();

        if (dbRefData) {
          resolve(dbRefData);
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

// Getting information from the database about the user's performance and copying the database information to dbArray
async function getUser() {
  return new Promise((resolve) => {
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

export async function getData(data, boxes, stats, indexArray, userId) {
  userId = await getUser();
  if (userId) {
    console.log(userId);
    const presentRef = ref(database, "users/" + userId + "/data/" + "/present");
    const pastcompRef = ref(
      database,
      "users/" + userId + "/data/" + "/pastcomp"
    );
    const pastimpRef = ref(database, "users/" + userId + "/data/" + "/pastimp");

    const statsRef = ref(database, "users/" + userId + "/data/" + "/stats");

    await readStatsFromDb(statsRef).then((dbStats) => {
      stats = dbStats;
    });

    switch (data.data[0].tense) {
      case "present (le présent de l'indicatif)":
        await readDataFromDb(presentRef, boxes).then((dbBoxes) => {
          boxes = dbBoxes;
        });
        break;

      case "past (le passé composé)":
        await readDataFromDb(pastcompRef, boxes).then((dbBoxes) => {
          boxes = dbBoxes;
        });
        break;

      case "imperfect past (l'imparfait)":
        await readDataFromDb(pastimpRef, boxes).then((dbBoxes) => {
          boxes = dbBoxes;
        });
        break;
    }

    // Checking the first 5 boxes for the repetition date (the last one is not shown by default)
    for (let i = 0; i < boxes.length - 1; i++) {
      checkRepetDate(boxes[i], indexArray);
    }
    //Excluding the elements in the Box6
    excludeBox6(boxes, indexArray);
  } else {
    console.log("User is signed out");
  }

  return { userId, stats };
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
export function excludeBox6(boxes, indexArray) {
  for (let i = 0; i < boxes[5].length; i++) {
    if (boxes[5][i].repetDate !== 0) {
      indexArray.push(boxes[5][i].id - 1);
    }
  }
}
