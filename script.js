import {
  app,
  getAuth,
  getDatabase,
  ref,
  set,
  onValue,
  onAuthStateChanged,
} from "./config.js";

const auth = getAuth(app);
const database = getDatabase(app);

let score = 0;

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
let phraseCount = 0;

// Creating an array containig information for database about user performance

// let dbArray = [];

const responseConjug = await fetch("conjugation.json");
const jsonConjug = await responseConjug.json();

// Showing the first page
async function showFirstPage() {
  const mainSection = document.querySelector(".mainSection");

  // Welcome section
  const welcomeDiv = document.createElement("div");
  welcomeDiv.classList.add("welcome");
  mainSection.appendChild(welcomeDiv);

  const welcomeP = document.createElement("p");
  welcomeP.innerText = "Welcome to Conjugation Master!";
  welcomeDiv.appendChild(welcomeP);

  // Tense selection section
  const tenseSelect = document.createElement("div");
  tenseSelect.classList.add("tense-section");
  mainSection.appendChild(tenseSelect);

  const labelTense = document.createElement("label");
  labelTense.htmlFor = "tense";
  labelTense.innerText = "Choose a tense you'd like practise:";
  tenseSelect.appendChild(labelTense);

  const selectElement = document.createElement("select");
  selectElement.name = "tense";
  selectElement.id = "tense";
  tenseSelect.appendChild(selectElement);

  const optionPresent = document.createElement("option");
  optionPresent.value = "present";
  optionPresent.innerText = "present (le présent de l'indicatif)";

  const optionPastComp = document.createElement("option");
  optionPastComp.value = "pastcomp";
  optionPastComp.innerText = "past (le passé composé)";

  const optionPastImp = document.createElement("option");
  optionPastImp.value = "pastimp";
  optionPastImp.innerText = "imperfect past (l'imparfait)";

  selectElement.appendChild(optionPresent);
  selectElement.appendChild(optionPastComp);
  selectElement.appendChild(optionPastImp);

  // The "number of phrases" section
  const phrNbSection = document.createElement("div");
  phrNbSection.classList.add("nb-phrases");
  mainSection.appendChild(phrNbSection);

  const phrNbLabel = document.createElement("label");
  phrNbLabel.htmlFor = "phraseNb";
  phrNbLabel.innerText = "How many phrases would you like to practise?";
  phrNbSection.appendChild(phrNbLabel);

  const selectPhrNb = document.createElement("select");
  selectPhrNb.name = "phraseNb";
  selectPhrNb.id = "phraseNb";
  phrNbSection.appendChild(selectPhrNb);

  const phrNb5 = document.createElement("option");
  phrNb5.value = 5;
  phrNb5.innerText = "5";

  const phrNb10 = document.createElement("option");
  phrNb10.value = 10;
  phrNb10.innerText = "10";

  const phrNb15 = document.createElement("option");
  phrNb15.value = 15;
  phrNb15.innerText = "15";

  selectPhrNb.appendChild(phrNb5);
  selectPhrNb.appendChild(phrNb10);
  selectPhrNb.appendChild(phrNb15);

  // Start button

  const startSection = document.createElement("div");
  startSection.classList.add("start-section");
  mainSection.appendChild(startSection);

  const startBtn = document.createElement("button");
  startBtn.id = "start-btn";
  startBtn.innerText = "Start now!";
  startSection.appendChild(startBtn);

  // Customer selecting the tense

  let response = await fetch("present.json");
  let jsonData = await response.json();

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
  });
}

showFirstPage();

// A function launching the app
function launchApp(data) {
  // Getting information from the database about the user's performance and copying the database information to dbArray
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const presentRef = ref(database, "users/" + user.uid + "/present");
      const pastcompRef = ref(database, "users/" + user.uid + "/pastcomp");
      const pastimpRef = ref(database, "users/" + user.uid + "/pastimp");

      onValue(
        presentRef,
        (snapshot) => {
          const dbPresentRefData = snapshot.val();
          if (
            data.data[0].tense === "present (le présent de l'indicatif)" &&
            dbPresentRefData
          ) {
            if (dbPresentRefData.box1) {
              box1 = dbPresentRefData.box1;
            }
            if (dbPresentRefData.box2) {
              box2 = dbPresentRefData.box2;
            }
            if (dbPresentRefData.box3) {
              box3 = dbPresentRefData.box3;
            }
            if (dbPresentRefData.box4) {
              box4 = dbPresentRefData.box4;
            }
            if (dbPresentRefData.box5) {
              box5 = dbPresentRefData.box5;
            }
            if (dbPresentRefData.box6) {
              box6 = dbPresentRefData.box6;
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

      onValue(
        pastcompRef,
        (snapshot) => {
          const dbPastcompRefData = snapshot.val();
          if (
            data.data[0].tense === "past (le passé composé)" &&
            dbPastcompRefData
          ) {
            box1 = dbPastcompRefData.box1;
            box2 = dbPastcompRefData.box2;
            box3 = dbPastcompRefData.box3;
            box4 = dbPastcompRefData.box4;
            box5 = dbPastcompRefData.box5;
            box6 = dbPastcompRefData.box6;
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

      onValue(
        pastimpRef,
        (snapshot) => {
          const dbPastimpRefData = snapshot.val();
          if (
            data.data[0].tense === "imperfect past (l'imparfait)" &&
            dbPastimpRefData
          ) {
            box1 = dbPastimpRefData.box1;
            box2 = dbPastimpRefData.box2;
            box3 = dbPastimpRefData.box3;
            box4 = dbPastimpRefData.box4;
            box5 = dbPastimpRefData.box5;
            box6 = dbPastimpRefData.box6;
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
    showResultPage();

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

// Building the main page structure
function buildPageStructure(data) {
  // Deleting all the elements in the "main" section
  const main = document.querySelector("main");
  const mainSection = document.querySelector(".mainSection");

  mainSection.innerHTML = "";

  // Tense display section
  const tenseDisplaySection = document.createElement("div");
  tenseDisplaySection.classList.add("tense-display-section");
  mainSection.appendChild(tenseDisplaySection);

  const tensePElement = document.createElement("p");
  tensePElement.innerText = "The tense:";
  tenseDisplaySection.appendChild(tensePElement);

  const tenseDisplay = document.createElement("div");
  tenseDisplay.classList.add("tense-display");
  tenseDisplaySection.appendChild(tenseDisplay);

  const tenseDisplayP = document.createElement("p");
  tenseDisplay.appendChild(tenseDisplayP);

  // Verb display section
  const verbDisplaySection = document.createElement("div");
  verbDisplaySection.classList.add("verb-display-section");
  mainSection.appendChild(verbDisplaySection);

  const verbPElement = document.createElement("p");
  verbPElement.innerText = "The verb to conjugate:";
  verbDisplaySection.appendChild(verbPElement);

  const verbDisplay = document.createElement("div");
  verbDisplay.classList.add("verb-display");
  verbDisplaySection.appendChild(verbDisplay);

  const verbDisplayP = document.createElement("p");
  verbDisplay.appendChild(verbDisplayP);

  // Phrase section
  const phraseSection = document.createElement("div");
  phraseSection.classList.add("phrase-section");
  mainSection.appendChild(phraseSection);

  const phraseSectionP = document.createElement("p");
  phraseSection.appendChild(phraseSectionP);

  // Letters section
  const lettersSection = document.createElement("div");
  lettersSection.classList.add("letters-section");
  mainSection.appendChild(lettersSection);

  const lettersSectionP1 = document.createElement("p");
  const button1 = document.createElement("button");
  button1.innerText = "é";
  lettersSectionP1.appendChild(button1);
  lettersSection.appendChild(lettersSectionP1);

  const lettersSectionP2 = document.createElement("p");
  const button2 = document.createElement("button");
  button2.innerText = "è";
  lettersSectionP2.appendChild(button2);
  lettersSection.appendChild(lettersSectionP2);

  const lettersSectionP3 = document.createElement("p");
  const button3 = document.createElement("button");
  button3.innerText = "ê";
  lettersSectionP3.appendChild(button3);
  lettersSection.appendChild(lettersSectionP3);

  const lettersSectionP4 = document.createElement("p");
  const button4 = document.createElement("button");
  button4.innerText = "î";
  lettersSectionP4.appendChild(button4);
  lettersSection.appendChild(lettersSectionP4);

  const lettersSectionP5 = document.createElement("p");
  const button5 = document.createElement("button");
  button5.innerText = "ô";
  lettersSectionP5.appendChild(button5);
  lettersSection.appendChild(lettersSectionP5);

  const lettersSectionP6 = document.createElement("p");
  const button6 = document.createElement("button");
  button6.innerText = "û";
  lettersSectionP6.appendChild(button6);
  lettersSection.appendChild(lettersSectionP6);

  const lettersSectionP7 = document.createElement("p");
  const button7 = document.createElement("button");
  button7.innerText = "ç";
  lettersSectionP7.appendChild(button7);
  lettersSection.appendChild(lettersSectionP7);

  // Type section
  const typeSectionDiv = document.createElement("div");
  typeSectionDiv.classList.add("type-section");
  mainSection.appendChild(typeSectionDiv);

  const verbInput = document.createElement("input");
  verbInput.setAttribute("type", "text");
  verbInput.setAttribute("placeholder", "type the verb form");
  typeSectionDiv.appendChild(verbInput);

  // Message section
  const messageSection = document.createElement("div");
  messageSection.classList.add("msg-section");
  mainSection.appendChild(messageSection);

  const messageP = document.createElement("p");
  messageSection.appendChild(messageP);

  // Conjugation popup section
  const conjugSection = document.createElement("div");
  conjugSection.classList.add("conjugSection");
  main.appendChild(conjugSection);
  conjugSection.style.display = "none";

  // Sibmit section
  const submitSection = document.createElement("div");
  submitSection.classList.add("submit-section");
  mainSection.appendChild(submitSection);

  const submitBtn = document.createElement("button");
  submitBtn.id = "submit-btn";
  submitBtn.innerText = "submit";
  submitSection.appendChild(submitBtn);

  // Next section
  const nextSection = document.createElement("div");
  nextSection.classList.add("next-section");
  mainSection.appendChild(nextSection);

  const nextBtn = document.createElement("button");
  nextBtn.id = "next-btn";
  nextBtn.innerText = "next";
  nextSection.appendChild(nextBtn);

  // Finish section
  const finishSection = document.createElement("div");
  finishSection.classList.add("finish-section");
  mainSection.appendChild(finishSection);

  const finishBtn = document.createElement("button");
  finishBtn.id = "finish-btn";
  finishBtn.innerText = "finish";
  finishSection.appendChild(finishBtn);
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
      phraseDisplay.innerHTML = `<p><i class="fa-solid fa-square-check"></i> ${data.data[k].fullPhrase}</p>`;
      phraseDisplay.style.color = "#228b22";
      msgArea.innerText = "Correct!";
      score++;
      movePhraseForward();

      break;
    default:
      phraseDisplay.textContent = data.data[k].fullPhrase;
      inputArea.style.color = "#ef233c";
      msgArea.innerText = `Incorrect. The correct answer is: "${data.data[k].answer}"`;
      if (jsonConjug) {
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
      }
      conjugSection.style.display = "block";

      movePhraseBackward();
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

// Special characters buttons
function setSpecialBtns() {
  // Select the input element
  const inputArea = document.querySelector(".type-section input");
  // Select all the buttons
  const specialBtns = document.querySelectorAll(".letters-section button");
  specialBtns.forEach((button) => {
    button.addEventListener("click", () => {
      inputArea.value += button.innerText;
    });
  });
}

function showResultPage() {
  const mainSection = document.querySelector(".mainSection");
  mainSection.innerHTML = "";

  const resultDiv = document.createElement("div");
  resultDiv.classList.add("result");
  mainSection.appendChild(resultDiv);

  const resultMsg = document.createElement("p");
  resultMsg.innerText = "You have finished the exercise!";
  resultDiv.appendChild(resultMsg);

  const scoreDiv = document.createElement("div");
  scoreDiv.classList.add("score-section");
  mainSection.appendChild(scoreDiv);

  const trophyIcon = document.createElement("i");
  trophyIcon.classList.add("fa-solid");
  trophyIcon.classList.add("fa-trophy");
  scoreDiv.appendChild(trophyIcon);

  const scoreMsg = document.createElement("p");
  scoreMsg.innerText = `Your score is: ${score}/${phraseNumber}`;
  scoreDiv.appendChild(scoreMsg);

  const restartSection = document.createElement("div");
  restartSection.classList.add("restart");
  mainSection.appendChild(restartSection);
  const restartBtn = document.createElement("button");
  restartBtn.id = "restart-btn";
  restartBtn.innerText = "restart";
  restartSection.appendChild(restartBtn);

  restartBtn.addEventListener("click", () => {
    mainSection.innerHTML = "";
    score = 0;
    phraseNumber = 5;
    phraseCount = 0;
    indexArray = [];
    dbArray = [];
    showFirstPage();
  });
}
