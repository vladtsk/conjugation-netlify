// Functions used in the first part of the application



import {
  ref,
  onValue,
  onAuthStateChanged,
  getAuth,
  getDatabase,
  fetchFirebaseConfig
  
} from "./firebaseConfig.js";





let auth, database;

export async function getAuthDatabase() {
  const { app } = await fetchFirebaseConfig();
  auth = getAuth(app);
  database = getDatabase(app);
}

getAuthDatabase();






export async function getJsonData(tenseValue) {
  let jsonData;
    try {
      const response = await fetch(`../src/${tenseValue}.json`);
      jsonData = await response.json();
     
    } catch(error) {
      console.error("Couldn't fetch tense data ", error);
    }
  return jsonData;
  
}


function readDataFromDb(timeRef, boxes) {

  return new Promise((resolve) => {
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
          resolve([]);
        }
      },
      {
        onlyOnce: true,
      }
    );
  });
}

export function readStatsFromDb(statsRef) {
  return new Promise((resolve) => {
    onValue(
      statsRef,
      (snapshot) => {
        const dbRefData = snapshot.val();

        if (dbRefData) {
          resolve(dbRefData);
        } else {
          resolve([]);
        }
      },
      {
        onlyOnce: true,
      }
    );
  });
}

function readSubsDataFromDb(ref) {
  return new Promise((resolve) => {
    onValue(
      ref,
      (snapshot) => {
        const dbSubsData = snapshot.val();

        if (dbSubsData) {
          resolve(dbSubsData);
        } else {
          resolve([]);
        }
      },
      {
        onlyOnce: true,
      }
    );
  });
}

// Getting information from the database about the user's performance and copying the database information to dbArray
export function getUser() {
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

export function getUserEmail(userId) {
  const emailRef = ref(database, "users/" + userId + "/info/email")
  return new Promise((resolve) => {
    onValue(
      emailRef,
      (snapshot) => {
        const userEmail = snapshot.val();

        if (userEmail) {
          resolve(userEmail);
        } 
      },
      {
        onlyOnce: true,
      }
    );
  });
} 

export async function getSubscriptionStatus() {
  let subStatus = "";
  let userId;
  await getAuthDatabase();
  
  try {
    userId = await getUser();
   
    if (userId) {

      const userEmail = await getUserEmail(userId);

      const userEmailWoDots = userEmail.replace(/\./g, ',');
    

      // Reference to the 'subscription' status node
      const subStatusRef = ref(database, "subscription/" + userEmailWoDots + "/status");

      if (subStatusRef) {
        subStatus = await readSubsDataFromDb(subStatusRef);
      } 
      
    } else {
      console.log("User is signed out");
    }

    return { subStatus, userId };
  } catch (error) {
    console.error("error line 215", error.message);
  }
}


// Get Stripe Customer ID

export async function getStripeCustomerID() {
  let stripeCustomerID;
  let userId;
  await getAuthDatabase();
  
  try {
    userId = await getUser();
   
    if (userId) {

      const userEmail = await getUserEmail(userId);

      const userEmailWoDots = userEmail.replace(/\./g, ',');
    

      // Reference to the 'stripe customer ID' node
      const stripeIDRef = ref(database, "subscription/" + userEmailWoDots + "/customerId");

      if (stripeIDRef) {
        stripeCustomerID = await readSubsDataFromDb(stripeIDRef);
      } 
      
    } else {
      console.log("User is signed out");
    }

    return stripeCustomerID;
  } catch (error) {
    console.error("error line 370", error.message);
  }
}
//


export async function getData(data, boxes, stats, indexArray, userId) {
  try {
    userId = await getUser();
    if (userId) {
      const presentRef = ref(
        database,
        "users/" + userId + "/data/" + "/present"
      );
      const pastcompRef = ref(
        database,
        "users/" + userId + "/data/" + "/pastcomp"
      );
      const pastimpRef = ref(
        database,
        "users/" + userId + "/data/" + "/pastimp"
      );
      const futureRef = ref(
        database,
        "users/" + userId + "/data/" + "/future"
      );
      const subjunctiveRef = ref(
        database,
        "users/" + userId + "/data/" + "/subjunctive"
      );

      const statsRef = ref(database, "users/" + userId + "/data/" + "/stats");

      stats = await readStatsFromDb(statsRef);

      switch (data.data[0].tense) {
        case "present (le présent de l'indicatif)":
          boxes = await readDataFromDb(presentRef, boxes);
          break;

        case "past (le passé composé)":
          boxes = await readDataFromDb(pastcompRef, boxes);
          break;

        case "imperfect past (l'imparfait)":
          boxes = await readDataFromDb(pastimpRef, boxes);
          break;
        case "future (le futur simple)":
          boxes = await readDataFromDb(futureRef, boxes);
          break;
        
        case "present subjunctive (le subjonctif présent)":
          boxes = await readDataFromDb(subjunctiveRef, boxes);
          break;
        
          default:
          console.log("unkown tense");
      }

      // Checking the first 5 boxes for the repetition date (the last one is not shown by default)
      if (boxes.length > 0) {
        for (let i = 0; i < boxes.length - 1; i++) {
          checkRepetDate(boxes[i], indexArray);
        }
        //Excluding the elements in the Box6
        excludeBox6(boxes, indexArray);
      }
    } else {
      console.log("User is signed out");
    }

    return { userId, stats };
  } catch (error) {
    console.error(error.message);
  }
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
