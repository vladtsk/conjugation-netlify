import {
  app,
  getAuth,
  getDatabase,
  ref,
  set,
  onValue,
  onAuthStateChanged,
} from "./config.js";

import {
  showFirstPage,
  buildPageStructure,
  setSpecialBtns,
  showResultPage,
} from "./pagesetup.js";

const auth = getAuth(app);
const database = getDatabase(app);

let score;

// Creating arrays corresponding to 6 boxes allowing to implement a spaced repetition system
let box1 = [];
let box2 = [];
let box3 = [];
let box4 = [];
let box5 = [];
let box6 = [];

// An index that will be generated randomly
let k;

let phraseNumber = 5;

// Create an array of indeces
let indexArray = [];

// Adding a variable counting the nb of phrases that have been shown to the user
let phraseCount;

const responseConjug = await fetch("conjugation.json");
const jsonConjug = await responseConjug.json();

export async function launchFirstPage() {
  showFirstPage(); // Building the first page structure
  phraseNumber = 5; // Making sure the phrase number is back to its default value
  console.log(phraseNumber);

  // Fetching the present tense data by default

  let response = await fetch("present.json");
  let jsonData = await response.json();

  const selectElement = document.getElementById("tense");
  const selectPhrNb = document.getElementById("phraseNb");
  const startBtn = document.getElementById("start-btn");

  // Adding an event listener in case the user changes the tense

  selectElement.addEventListener("change", async () => {
    response = await fetch(`${selectElement.value}.json`);
    jsonData = await response.json();
  });

  // Customer selecting the number of phrases
  selectPhrNb.addEventListener("change", () => {
    phraseNumber = selectPhrNb.value;
  });

  // Adding an event listener on the start button
  startBtn.addEventListener("click", () => {
    launchApp(jsonData);
    console.log(phraseNumber);
  });
}

launchFirstPage();

// A function launching the app
function launchApp(data) {
  // Making sure all the boxes are empty (to avoid errors when relaunching the app)
  box1 = [];
  box2 = [];
  box3 = [];
  box4 = [];
  box5 = [];
  box6 = [];

  // Initializing the index array
  indexArray = [];

  // Initializing the phrase counter and the score
  phraseCount = 0;

  score = 0;

  // Getting information from the database about the user's performance and copying the database information to dbArray
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const presentRef = ref(database, "users/" + user.uid + "/present");
      const pastcompRef = ref(database, "users/" + user.uid + "/pastcomp");
      const pastimpRef = ref(database, "users/" + user.uid + "/pastimp");

      if (data.data[0].tense === "present (le présent de l'indicatif)") {
        readDataFromDb(presentRef);
      }

      if (data.data[0].tense === "past (le passé composé)") {
        readDataFromDb(pastcompRef);
      }

      if (data.data[0].tense === "imperfect past (l'imparfait)") {
        readDataFromDb(pastimpRef);
      }

      function readDataFromDb(timeRef) {
        onValue(
          timeRef,
          (snapshot) => {
            const dbRefData = snapshot.val();
            if (dbRefData) {
              if (dbRefData.box1) {
                box1 = dbRefData.box1;
              }
              if (dbRefData.box2) {
                box2 = dbRefData.box2;
              }
              if (dbRefData.box3) {
                box3 = dbRefData.box3;
              }
              if (dbRefData.box4) {
                box4 = dbRefData.box4;
              }
              if (dbRefData.box5) {
                box5 = dbRefData.box5;
              }
              if (dbRefData.box6) {
                box6 = dbRefData.box6;
              }
            }
            checkRepetDate(box1);
            checkRepetDate(box2);
            checkRepetDate(box3);
            checkRepetDate(box4);
            checkRepetDate(box5);
          },
          {
            onlyOnce: true,
          }
        );
      }
    } else {
      console.log("User is signed out");
    }
  });

  // Initializing the array box1 if there is no previous history (all the phrases go to box1)
  if (
    data &&
    data.data.length > 0 &&
    box1.length === 0 &&
    box2.length === 0 &&
    box3.length === 0 &&
    box4.length === 0 &&
    box5.length === 0 &&
    box6.length === 0
  ) {
    for (let i = 0; i < data.data.length; i++) {
      let object = { id: i + 1, repetDate: 0 };
      box1.push(object);
    }
  }

  buildPageStructure(data);
  displayTense(data);

  setSpecialBtns();

  // A function selecting phrases (actually their IDs) not to show based on the scheduled repetition date (i.e. indices to exclude)
  function checkRepetDate(box) {
    const today = new Date();
    for (let i = 0; i < box.length; i++) {
      if (box[i].repetDate > today.getTime()) {
        indexArray.push(box[i].id - 1);
      }
    }
  }

  //Excluding the elements in the Box6
  for (let i = 0; i < box6.length; i++) {
    if (box6[i].repetDate !== 0) {
      indexArray.push(box6[i].id - 1);
    }
  }

  generateElements(data);

  function generateElements(data) {
    if (indexArray.length !== data.data.length) {
      // Generate a random and unique index
      k = Math.floor(Math.random() * data.data.length);
      do {
        k = Math.floor(Math.random() * data.data.length);
      } while (indexArray.includes(k));
      console.log(k);
      indexArray.push(k);
    } else {
      console.log("No more phrases to practise!");
    }

    displayVerb(data);
    displayPhrase(data);
  }

  // Adding an event listener to check the answer when the 'submit' button is clicked

  // Select the submit button
  const submitBtn = document.getElementById("submit-btn");

  submitBtn.addEventListener("click", () => {
    checkAnswer(data);
    console.log(box2);
  });

  // Adding an event listener to display the next phrase to test

  // Select the 'next' button and the conjugation popup section
  const nextBtn = document.getElementById("next-btn");
  const conjugSection = document.querySelector(".conjugSection");
  // The phrase section
  const phraseDisplay = document.querySelector(".phrase-section p");
  // The input area
  const inputArea = document.querySelector(".type-section input");

  nextBtn.addEventListener("click", () => {
    conjugSection.innerHTML = "";
    conjugSection.style.display = "none";
    phraseDisplay.style.color = "black";
    inputArea.style.color = "black";
    displayNext(data);
  });

  // Select the finish button
  const finishBtn = document.getElementById("finish-btn");
  finishBtn.addEventListener("click", () => {
    conjugSection.innerHTML = "";
    conjugSection.style.display = "none";
    showResultPage(score, phraseNumber);

    // Adding data to the database

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const presentRef = ref(database, "users/" + user.uid + "/present");
        addBoxToDb(user);
      } else {
        console.log("User is signed out");
      }
    });
  });

  function addBoxToDb(user) {
    let tense;
    const boxes = [box1, box2, box3, box4, box5, box6];

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
      let boxRef = ref(database, "users/" + user.uid + tense + boxName);
      set(boxRef, boxes[i])
        .then(() => {
          console.log("Box " + boxName + " added successfully do DB");
        })
        .catch((error) => {
          console.error("Error adding the box " + boxName + " : ", error);
        });
    }
  }

  // Display the next element
  function displayNext(data) {
    // Select the 'next' section
    const nextSection = document.querySelector(".next-section");

    // Selecting the submit section
    const submitSection = document.querySelector(".submit-section");

    // Selecting the message "p" element
    const msgArea = document.querySelector(".msg-section p");
    // Select the input element
    const inputArea = document.querySelector(".type-section input");

    msgArea.innerText = "";
    inputArea.value = "";
    generateElements(data);
    nextSection.style.display = "none";
    submitSection.style.display = "flex";
  }
}

// A function that displays a verb to conjugate
function displayVerb(data) {
  // Selecting the verb display section
  const verbDisplay = document.querySelector(".verb-display p");

  if (data && data.data.length > 0) {
    verbDisplay.textContent = data.data[k].verb;
  }
  phraseCount++;
}

// A function that displays a phrase (the context)
function displayPhrase(data) {
  // Selecting the phrase display section (the "p" element)
  const phraseDisplay = document.querySelector(".phrase-section p");
  if (data && data.data.length > 0) {
    phraseDisplay.textContent = data.data[k].phrase;
  }
}

// A function displaying the tense
function displayTense(data) {
  // Selecting the tense display section
  const tenseDisplay = document.querySelector(".tense-display p");
  // Displaying the tense
  if (data && data.data.length > 0) {
    tenseDisplay.textContent = data.data[0].tense;
  }
}

// A function that reads the user input and compares it to the correct answer
function checkAnswer(data) {
  // Select "p" element for a message to display
  const msgArea = document.querySelector(".msg-section p");
  // Conjugation popup section
  const conjugSection = document.querySelector(".conjugSection");
  // Selecting the submit section
  const submitSection = document.querySelector(".submit-section");

  // Selecting the input element
  const inputArea = document.querySelector(".type-section input");
  // Select the 'next' section
  const nextSection = document.querySelector(".next-section");
  // Select the finish section
  const finishSection = document.querySelector(".finish-section");

  // The phrase display section
  const phraseDisplay = document.querySelector(".phrase-section p");

  const inputText = inputArea.value;
  let displaySection;

  if (phraseCount < phraseNumber) {
    displaySection = nextSection;
  } else {
    displaySection = finishSection;
  }

  switch (inputText) {
    case "":
      msgArea.innerText = "Please type a valid verb";
      break;
    case data.data[k].answer:
      phraseDisplay.innerHTML = `<p><i class="fa-solid fa-square-check"></i> ${data.data[k].fullPhrase} <i class="fa-solid fa-volume-low"></i></p>`;
      phraseDisplay.style.color = "#228b22";
      msgArea.innerText = "Correct!";

      // The speaker icon
      const speaker = document.querySelector(".fa-volume-low");

      if (speaker) {
        speaker.addEventListener("click", () => {
          playAudio(`"${data.data[k].fullPhrase}"`);
        });
      }

      //pronouncePhrase(`"${data.data[k].fullPhrase}"`);
      score++;
      movePhraseForward();

      break;
    default:
      phraseDisplay.textContent = data.data[k].fullPhrase;
      inputArea.style.color = "#ef233c";
      msgArea.innerText = `Incorrect. The correct answer is: "${data.data[k].answer}"`;
      try {
        let popupMsg =
          jsonConjug.verbs[`${data.data[k].verb}`][
            `${data.data[0].tenseShort}`
          ];

        let popupMsgValues = Object.values(popupMsg);
        conjugSection.innerHTML = `<div class="popup-icons"><i class="fa-regular fa-lightbulb bulb-animation" 
      style="color: #ef233c;"></i><i class="fa-solid fa-xmark popup-close"></i></div>`;

        for (let i = 0; i < popupMsgValues.length; i++) {
          conjugSection.innerHTML += `<p>${popupMsgValues[i]}</p>`;
        }
        conjugSection.style.display = "block";
      } catch {
        console.log("Verb " + data.data[k].verb + " is not found in database ");
      }

      movePhraseBackward();
  }

  // A function playing an audio
  function playAudio(text) {
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "fr-FR";
    speech.volume = 1;
    speech.rate = 1;
    speech.text = text;
    speechSynthesis.speak(speech);
  }

  // Popup close icon
  const popupCloseBtn = document.querySelector(".popup-close");
  if (popupCloseBtn) {
    popupCloseBtn.addEventListener("click", () => {
      conjugSection.innerHTML = "";
      conjugSection.style.display = "none";
    });
  }

  if (inputText !== "") {
    submitSection.style.display = "none";
    displaySection.style.display = "flex";
  }
}

// A function that moves a phrase to the next box and changes the next repetition date
function movePhraseForward() {
  const today = new Date();
  const newRepetDate = new Date(today);

  const foundElementBox5 = box5.find(({ id }) => id === k + 1);
  if (foundElementBox5) {
    const foundIndex = box5.indexOf(foundElementBox5);

    // The phrase won't be shown again (we don't show phrases from box6)

    foundElementBox5.repetDate = 0;

    box6.push(foundElementBox5); // adding the element to box6

    box5.splice(foundIndex, 1); // deleting it from box5
  }

  const foundElementBox4 = box4.find(({ id }) => id === k + 1);
  if (foundElementBox4) {
    const foundIndex = box4.indexOf(foundElementBox4);

    newRepetDate.setDate(today.getDate() + 30); // The next repetition is in 30 days
    console.log(newRepetDate.toDateString());

    foundElementBox4.repetDate = newRepetDate.getTime();

    box5.push(foundElementBox4); // adding the element to box5

    box4.splice(foundIndex, 1); // deleting it from box4
  }

  const foundElementBox3 = box3.find(({ id }) => id === k + 1);
  if (foundElementBox3) {
    const foundIndex = box3.indexOf(foundElementBox3);

    newRepetDate.setDate(today.getDate() + 14); // The next repetition is in 14 days
    console.log(newRepetDate.toDateString());

    foundElementBox3.repetDate = newRepetDate.getTime();

    box4.push(foundElementBox3); // adding the element to box4

    box3.splice(foundIndex, 1); // deleting it from box3
  }

  const foundElementBox2 = box2.find(({ id }) => id === k + 1);
  if (foundElementBox2) {
    const foundIndex = box2.indexOf(foundElementBox2);

    newRepetDate.setDate(today.getDate() + 7); // The next repetition is in 7 days
    console.log(newRepetDate.toDateString());

    foundElementBox2.repetDate = newRepetDate.getTime();

    box3.push(foundElementBox2); // adding the element to box3

    box2.splice(foundIndex, 1); // deleting it from box2
  }

  const foundElementBox1 = box1.find(({ id }) => id === k + 1);
  if (foundElementBox1) {
    const foundIndex = box1.indexOf(foundElementBox1);

    newRepetDate.setDate(today.getDate() + 3); // The next repetition is in 3 days
    console.log(newRepetDate.toDateString());

    foundElementBox1.repetDate = newRepetDate.getTime();

    box2.push(foundElementBox1); // adding the element to box2

    box1.splice(foundIndex, 1); // deleting it from box1
  }
}

// A function that moves a phrase to a lower box (when a user makes a mistake) and changes the next repetition date
function movePhraseBackward() {
  const today = new Date();
  const newRepetDate = new Date(today);

  newRepetDate.setDate(today.getDate() + 1); // The next repetition is in 1 day for all the elements in all boxes
  console.log(newRepetDate.getTime());

  const foundElementBox1 = box1.find(({ id }) => id === k + 1);
  if (foundElementBox1) {
    const foundIndex = box1.indexOf(foundElementBox1);

    foundElementBox1.repetDate = newRepetDate.getTime();

    // The element stays in the same box
  }

  const foundElementBox2 = box2.find(({ id }) => id === k + 1);
  if (foundElementBox2) {
    const foundIndex = box2.indexOf(foundElementBox2);

    foundElementBox2.repetDate = newRepetDate.getTime();

    box1.push(foundElementBox2); // adding the element to box1

    box2.splice(foundIndex, 1); // deleting it from box2
  }

  const foundElementBox3 = box3.find(({ id }) => id === k + 1);
  if (foundElementBox3) {
    const foundIndex = box3.indexOf(foundElementBox3);

    foundElementBox3.repetDate = newRepetDate.getTime();

    box2.push(foundElementBox3); // adding the element to box2

    box3.splice(foundIndex, 1); // deleting it from box3
  }

  const foundElementBox4 = box4.find(({ id }) => id === k + 1);
  if (foundElementBox4) {
    const foundIndex = box4.indexOf(foundElementBox4);

    foundElementBox4.repetDate = newRepetDate.getTime();

    box2.push(foundElementBox4); // adding the element to box2 (it goes 2 boxes lower)

    box4.splice(foundIndex, 1); // deleting it from box4
  }

  const foundElementBox5 = box5.find(({ id }) => id === k + 1);
  if (foundElementBox5) {
    const foundIndex = box5.indexOf(foundElementBox5);

    foundElementBox5.repetDate = newRepetDate.getTime();

    box3.push(foundElementBox5); // adding the element to box3 (it goes 2 boxes lower)

    box5.splice(foundIndex, 1); // deleting it from box5
  }
  console.log(box1);
}
