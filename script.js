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

import { launchFirstPage, readDataFromDb } from "./init.js";

import { generateElements, displayTense } from "./main.js";

const auth = getAuth(app);
const database = getDatabase(app);

let userId;

let score;

let boxes = [[], [], [], [], [], []];

//let phraseNumber = 5;

// Create an array of indeces
let indexArray = [];

const responseConjug = await fetch("conjugation.json");
const jsonConjug = await responseConjug.json();

launchFirstPage();

// A function launching the app
export function launchApp(data, phraseNumber) {
  // Making sure all the boxes are empty (to avoid errors when relaunching the app)

  boxes = [[], [], [], [], [], []];

  // An index that will be generated randomly
  let k;

  // Adding a variable counting the nb of phrases that have been shown to the user
  let phraseCount;

  // Initializing the index array
  indexArray = [];

  // Initializing the phrase counter and the score
  phraseCount = 0;

  score = 0;

  userId = 0;

  // Getting information from the database about the user's performance and copying the database information to dbArray
  onAuthStateChanged(auth, (user) => {
    if (user) {
      userId = auth.currentUser.uid;
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

      if (data.data[0].tense === "present (le présent de l'indicatif)") {
        readDataFromDb(presentRef, boxes, indexArray);
      }

      if (data.data[0].tense === "past (le passé composé)") {
        readDataFromDb(pastcompRef, boxes, indexArray);
      }

      if (data.data[0].tense === "imperfect past (l'imparfait)") {
        readDataFromDb(pastimpRef, boxes, indexArray);
      }
    } else {
      console.log("User is signed out");
    }
  });

  // Initializing the array box1 if there is no previous history (all the phrases go to box1)
  if (data && data.data.length > 0 && boxes.every((box) => box.length === 0)) {
    for (let i = 0; i < data.data.length; i++) {
      let object = { id: i + 1, repetDate: 0 };
      boxes[0].push(object);
    }
  }

  buildPageStructure(data);
  displayTense(data);

  setSpecialBtns();

  // Generating a unique index and displaying a verb and a phrase
  generateElements(data, indexArray, phraseCount, k);
  phraseCount++;
  k = generateElements(data, indexArray, phraseCount, k);
  console.log("k", k);

  // Adding an event listener to check the answer when the 'submit' button is clicked

  // Select the submit button
  const submitBtn = document.getElementById("submit-btn");

  submitBtn.addEventListener("click", () => {
    checkAnswer(data, k, phraseCount, phraseNumber);
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
    console.log("phrasecount", phraseCount);
  });

  // Select the finish button
  const finishBtn = document.getElementById("finish-btn");
  finishBtn.addEventListener("click", () => {
    conjugSection.innerHTML = "";
    conjugSection.style.display = "none";
    showResultPage(score, phraseNumber);

    // Adding data to the database
    // Mistake to correct: when user signs up at this point, all the data is erased from the DB

    if (userId) {
      addBoxToDb();
    } else {
      console.log("User is signed out");
    }
  });

  function addBoxToDb() {
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
    generateElements(data, indexArray, phraseCount, k);
    phraseCount++;
    k = generateElements(data, indexArray, phraseCount, k);
    nextSection.style.display = "none";
    submitSection.style.display = "flex";
  }
}

// A function that reads the user input and compares it to the correct answer
function checkAnswer(data, k, phraseCount, phraseNumber) {
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

  console.log(phraseCount, phraseNumber);

  if (phraseCount < phraseNumber) {
    displaySection = nextSection;
  } else {
    displaySection = finishSection;
  }

  console.log("box2", boxes[1]);
  console.log("indexArray", indexArray);

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
          playAudio(data.data[k].fullPhrase);
        });
      }

      //pronouncePhrase(`"${data.data[k].fullPhrase}"`);
      score++;
      movePhraseForward(k);

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

      movePhraseBackward(k);
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
function movePhraseForward(k) {
  const today = new Date();
  const newRepetDate = new Date(today);

  const foundElementBox5 = boxes[4].find(({ id }) => id === k + 1);
  if (foundElementBox5) {
    const foundIndex = boxes[4].indexOf(foundElementBox5);

    // The phrase won't be shown again (we don't show phrases from box6)

    foundElementBox5.repetDate = 0;

    boxes[5].push(foundElementBox5); // adding the element to box6

    boxes[4].splice(foundIndex, 1); // deleting it from box5
  }

  const foundElementBox4 = boxes[3].find(({ id }) => id === k + 1);
  if (foundElementBox4) {
    const foundIndex = boxes[3].indexOf(foundElementBox4);

    newRepetDate.setDate(today.getDate() + 30); // The next repetition is in 30 days
    console.log(newRepetDate.toDateString());

    foundElementBox4.repetDate = newRepetDate.getTime();

    boxes[4].push(foundElementBox4); // adding the element to box5

    boxes[3].splice(foundIndex, 1); // deleting it from box4
  }

  const foundElementBox3 = boxes[2].find(({ id }) => id === k + 1);
  if (foundElementBox3) {
    const foundIndex = boxes[2].indexOf(foundElementBox3);

    newRepetDate.setDate(today.getDate() + 14); // The next repetition is in 14 days
    console.log(newRepetDate.toDateString());

    foundElementBox3.repetDate = newRepetDate.getTime();

    boxes[3].push(foundElementBox3); // adding the element to box4

    boxes[2].splice(foundIndex, 1); // deleting it from box3
  }

  const foundElementBox2 = boxes[1].find(({ id }) => id === k + 1);
  if (foundElementBox2) {
    const foundIndex = boxes[1].indexOf(foundElementBox2);

    newRepetDate.setDate(today.getDate() + 7); // The next repetition is in 7 days
    console.log(newRepetDate.toDateString());

    foundElementBox2.repetDate = newRepetDate.getTime();

    boxes[2].push(foundElementBox2); // adding the element to box3

    boxes[1].splice(foundIndex, 1); // deleting it from box2
  }

  const foundElementBox1 = boxes[0].find(({ id }) => id === k + 1);
  if (foundElementBox1) {
    const foundIndex = boxes[0].indexOf(foundElementBox1);

    newRepetDate.setDate(today.getDate() + 3); // The next repetition is in 3 days
    console.log(newRepetDate.toDateString());

    foundElementBox1.repetDate = newRepetDate.getTime();

    boxes[1].push(foundElementBox1); // adding the element to box2

    boxes[0].splice(foundIndex, 1); // deleting it from box1
  }
}

// A function that moves a phrase to a lower box (when a user makes a mistake) and changes the next repetition date
function movePhraseBackward(k) {
  const today = new Date();
  const newRepetDate = new Date(today);

  newRepetDate.setDate(today.getDate() + 1); // The next repetition is in 1 day for all the elements in all boxes
  console.log(newRepetDate.getTime());

  const foundElementBox1 = boxes[0].find(({ id }) => id === k + 1);
  if (foundElementBox1) {
    const foundIndex = boxes[0].indexOf(foundElementBox1);

    foundElementBox1.repetDate = newRepetDate.getTime();

    // The element stays in the same box
  }

  const foundElementBox2 = boxes[1].find(({ id }) => id === k + 1);
  if (foundElementBox2) {
    const foundIndex = boxes[1].indexOf(foundElementBox2);

    foundElementBox2.repetDate = newRepetDate.getTime();

    boxes[0].push(foundElementBox2); // adding the element to box1

    boxes[1].splice(foundIndex, 1); // deleting it from box2
  }

  const foundElementBox3 = boxes[2].find(({ id }) => id === k + 1);
  if (foundElementBox3) {
    const foundIndex = boxes[2].indexOf(foundElementBox3);

    foundElementBox3.repetDate = newRepetDate.getTime();

    boxes[1].push(foundElementBox3); // adding the element to box2

    boxes[2].splice(foundIndex, 1); // deleting it from box3
  }

  const foundElementBox4 = boxes[3].find(({ id }) => id === k + 1);
  if (foundElementBox4) {
    const foundIndex = boxes[3].indexOf(foundElementBox4);

    foundElementBox4.repetDate = newRepetDate.getTime();

    boxes[1].push(foundElementBox4); // adding the element to box2 (it goes 2 boxes lower)

    boxes[3].splice(foundIndex, 1); // deleting it from box4
  }

  const foundElementBox5 = boxes[4].find(({ id }) => id === k + 1);
  if (foundElementBox5) {
    const foundIndex = boxes[4].indexOf(foundElementBox5);

    foundElementBox5.repetDate = newRepetDate.getTime();

    boxes[2].push(foundElementBox5); // adding the element to box3 (it goes 2 boxes lower)

    boxes[4].splice(foundIndex, 1); // deleting it from box5
  }
  console.log(boxes[0]);
}
