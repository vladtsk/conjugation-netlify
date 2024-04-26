// Functions used in the final part

import { set, ref, update } from "./config.js";

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

  let nbPhrases = phraseStats.length;
  let nbCorrect = 0;

  for (let i = 0; i < nbPhrases; i++) {
    if (phraseStats[i].isCorrect || phraseStats[i].almostCorrectCorrect) {
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

export function addStripeCustomerIdToDb(userId, stripeCustomerId) {
  const stripeCustomerIdRef = ref(
    database,
    "users/" + userId + "/subscription/stripeCustomerId"
  );
  set(stripeCustomerIdRef, stripeCustomerId)
    .then(() => {
      console.log("Stripe customer ID added successfully do DB");
    })
    .catch((error) => {
      console.error("Error adding the stripe customer ID ", error);
    });
}

export function updateStripeStatus(userId, stripeStatus) {
  // Reference to the 'subscription status' node

  const subStatusRef = ref(
    database,
    "users/" + userId + "/subscription/status"
  );

  //let updates = {};
  //updates["status"] = newStripeStatus;
  //update(subsRef, updates)

  set(subStatusRef, stripeStatus)
    .then(() => {
      console.log("Status updated successfully in the database");
    })
    .catch((error) => {
      console.error("Error updating status in the database:", error);
    });
}
