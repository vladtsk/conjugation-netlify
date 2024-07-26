// Functions used in the final part

import { set, ref } from "./firebaseConfig.js";

export function addBoxToDb(data, boxes, userId, database) {
  let tense = data.data[0].tenseShort;
     
  for (let i = 0; i < boxes.length; i++) {
    let boxName = "box" + (i + 1);
    let boxRef = ref(database, "users/" + userId + "/data/"  + tense + "/" + boxName);
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
  today.setHours(0, 0, 0, 0);

  let nbPhrases = phraseStats.length;
  let nbCorrect = 0;

  for (let i = 0; i < nbPhrases; i++) {
    if (phraseStats[i].isCorrect || phraseStats[i].almostCorrectCorrect) {
      nbCorrect++;
    }
  }

  // Checking if the last timestamp corresponds to today

  const timestampDb = stats[stats.length - 1]?.timestamp;

    if(timestampDb) {
      const lastTimeStamp = parseInt(timestampDb) || 0;

      //const streakLastChangeDate = new Date(streakLastChangeTime);
      if(today.getTime() === lastTimeStamp) {

        // check if there is already data from the same date

        if(stats[stats.length - 1].nbOfPhrPractised && stats[stats.length - 1].nbOfCorrectPhr) {
          stats[stats.length - 1].nbOfPhrPractised += nbPhrases;
          stats[stats.length - 1].nbOfCorrectPhr += nbCorrect;

           console.log("there is already data from the same date", stats[stats.length - 1])
        } else {
          stats[stats.length - 1].nbOfPhrPractised = nbPhrases;
          stats[stats.length - 1].nbOfCorrectPhr = nbCorrect;
        }
        
      } else {
        stats.push({
          nbOfPhrPractised: nbPhrases,
          nbOfCorrectPhr: nbCorrect,
          timestamp: today.getTime(),
        })
      }

    } else {
      stats.push({
        nbOfPhrPractised: nbPhrases,
        nbOfCorrectPhr: nbCorrect,
        timestamp: today.getTime(),
      })
    }



  /*const dateDb = new Date(stats[stats.length - 1]?.timestamp);

  if (dateDb.getDate() === today.getDate() &&
  dateDb.getMonth() === today.getMonth() &&
  dateDb.getFullYear() === today.getFullYear()) {
    console.log("the dates are equal")
    stats[stats.length - 1].nbOfPhrPractised += nbPhrases;
    stats[stats.length - 1].nbOfCorrectPhr += nbCorrect;
  } else {
    let statObject = {
      timestamp: today.getTime(),
      nbOfPhrPractised: nbPhrases,
      nbOfCorrectPhr: nbCorrect,
      
    };

    stats.push(statObject);
  }*/

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


  set(subStatusRef, stripeStatus)
    .then(() => {
      console.log("Status updated successfully in the database");
    })
    .catch((error) => {
      console.error("Error updating status in the database:", error);
    });
}
