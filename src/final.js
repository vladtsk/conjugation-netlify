// Functions used in the final part

import { set, ref } from "./config.js";

// A function playing an audio
export function playAudio(text) {
  let speech = new SpeechSynthesisUtterance();
  speech.lang = "fr-FR";
  speech.volume = 1;
  speech.rate = 1;
  speech.text = text;
  speechSynthesis.speak(speech);
}

// A function that moves a phrase to the next box and changes the next repetition date
export function movePhraseForward(k, boxes) {
  const today = new Date();
  const newRepetDate = new Date(today);

  const repetDateArrow = [3, 7, 14, 30, 0];
  for (let i = 4; i >= 0; i--) {
    const foundElement = boxes[i].find(({ id }) => id === k + 1);
    if (foundElement) {
      const foundIndex = boxes[i].indexOf(foundElement);
      newRepetDate.setDate(today.getDate() + repetDateArrow[i]);
      foundElement.repetDate = newRepetDate.getTime();
      boxes[i + 1].push(foundElement); // adding the element to the next box
      boxes[i].splice(foundIndex, 1); // deleting it from the current box

      // Note: the elements from box6 won't be shown again
    }
  }
}

// A function that moves a phrase to the box below (when a user makes a mistake) and changes the next repetition date
export function movePhraseBackward(k, boxes) {
  const today = new Date();
  const newRepetDate = new Date(today);

  newRepetDate.setDate(today.getDate() + 1); // The next repetition is in 1 day for all the elements in all boxes

  for (let i = 0; i <= 4; i++) {
    const foundElement = boxes[i].find(({ id }) => id === k + 1);
    if (foundElement) {
      const foundIndex = boxes[i].indexOf(foundElement);
      foundElement.repetDate = newRepetDate.getTime();
      if (i !== 0) {
        boxes[i - 1].push(foundElement); // the element goes one box down
        boxes[i].splice(foundIndex, 1); // deleting it from the current box
      }
    }
  }
}

export function addBoxToDb(data, boxes, userId, database) {
  let tense;

  switch (data.data[0].tense) {
    case "present (le présent de l'indicatif)":
      tense = "/present/";
      break;
    case "past (le passé composé)":
      tense = "/pastcomp/";
      break;

    case "imperfect past (l'imparfait)":
      tense = "/pastimp/";
      break;
  }
  for (let i = 0; i < boxes.length; i++) {
    let boxName = "box" + (i + 1);
    let boxRef = ref(database, "users/" + userId + "/data" + tense + boxName);
    set(boxRef, boxes[i])
      .then(() => {
        console.log("Box " + boxName + " added successfully do DB");
      })
      .catch((error) => {
        console.error("Error adding the box " + boxName + " : ", error);
      });
  }
}

export function addStatsToDb(userId, database, stats, phraseStats) {
  const today = new Date();
  //today.setHours(0, 0, 0, 0);

  let nbPhrases = phraseStats.length;
  let nbCorrect = 0;

  for (let i = 0; i < nbPhrases; i++) {
    if (phraseStats[i].isCorrect) {
      nbCorrect++;
    }
  }

  // Checking if the last object's date is the same as today
  const dateDb = new Date(stats[stats.length - 1]?.timestamp);

  if (dateDb.getDate() === today.getDate()) {
    stats[stats.length - 1].nbOfPhrPractised += nbPhrases;
    stats[stats.length - 1].nbOfCorrectPhr += nbCorrect;
  } else {
    let statObject = {
      timestamp: today.getTime(),
      nbOfPhrPractised: nbPhrases,
      nbOfCorrectPhr: nbCorrect,
    };

    stats.push(statObject);
  }

  let statsRef = ref(database, "users/" + userId + "/data/" + "/stats");

  set(statsRef, stats)
    .then(() => {
      console.log("Stats added successfully do DB");
    })
    .catch((error) => {
      console.error("Error adding the stats ", error);
    });
}
