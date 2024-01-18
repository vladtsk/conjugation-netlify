let jsonData;

// Fetch data from the JSON file and launching the app
function launchApp(jsonInfo) {
  jsonData = jsonInfo;

  // Create an array of indeces
  let indexArray = [];
  // An index that will be henerated randomly
  let k;

  buildPageStructure(jsonData);

  setSpecialBtns();

  function generateElements(jsonInfo) {
    jsonData = jsonInfo;

    // Generate a random and unique index
    do {
      k = Math.floor(Math.random() * jsonData.data.length);
    } while (indexArray.includes(k));

    indexArray.push(k);
    displayVerb(k);
    displayPhrase(k);
    checkAnswer(k);
  }
  generateElements(jsonData);
  displayNext(jsonData);

  // Display the next element
  function displayNext(jsonInfo) {
    jsonData = jsonInfo;
    // Select the 'next' section
    const nextSection = document.querySelector(".next-section");
    // Select the 'next' button
    const nextBtn = document.getElementById("next-btn");
    // Selecting the submit section
    const submitSection = document.querySelector(".submit-section");
    // Selecting the message "p" element
    const msgArea = document.querySelector(".msg-section p");
    // Select the input element
    const inputArea = document.querySelector(".type-section input");

    nextBtn.addEventListener("click", () => {
      msgArea.innerText = "";
      inputArea.value = "";
      generateElements(jsonData);
      nextSection.style.display = "none";
      submitSection.style.display = "flex";
    });
  }
}

showFirstPage();

// Showing the first page
async function showFirstPage() {
  const mainSection = document.querySelector("main");

  // Welcome section
  const welcomeDiv = document.createElement("div");
  welcomeDiv.classList.add("welcome");
  mainSection.appendChild(welcomeDiv);

  const welcomeP = document.createElement("p");
  welcomeP.innerText = "Welcome to Conjugation master!";
  welcomeDiv.appendChild(welcomeP);

  // Tense selection section
  const tenseSelect = document.createElement("div");
  tenseSelect.classList.add("tense-section");
  mainSection.appendChild(tenseSelect);

  const labelTense = document.createElement("label");
  labelTense.htmlFor = "tense";
  labelTense.innerText = "Choose a tense:";
  tenseSelect.appendChild(labelTense);

  const selectElement = document.createElement("select");
  selectElement.name = "tense";
  selectElement.id = "tense";
  tenseSelect.appendChild(selectElement);

  const optionPresent = document.createElement("option");
  optionPresent.value = "present";
  optionPresent.innerText = "le présent (indicatif)";

  const optionPastComp = document.createElement("option");
  optionPastComp.value = "pastcomp";
  optionPastComp.innerText = "le passé composé";

  const optionPastImp = document.createElement("option");
  optionPastImp.value = "pastimp";
  optionPastImp.innerText = "l'imparfait";

  selectElement.appendChild(optionPresent);
  selectElement.appendChild(optionPastComp);
  selectElement.appendChild(optionPastImp);

  // Start button

  const startSection = document.createElement("div");
  startSection.classList.add("start-section");
  mainSection.appendChild(startSection);

  const startBtn = document.createElement("start");
  startBtn.id = "start-btn";
  startBtn.innerText = "start";
  startSection.appendChild(startBtn);

  // Customer selecting the tense

  let response = await fetch("present.json");
  jsonData = await response.json();

  selectElement.addEventListener("change", async () => {
    response = await fetch(`${selectElement.value}.json`);
    jsonData = await response.json();
  });

  // Adding an event listener on the start button
  startBtn.addEventListener("click", () => {
    launchApp(jsonData);
  });
}

// Building the main page structure
function buildPageStructure(jsonInfo) {
  jsonData = jsonInfo;
  // Deleting all the elements in the "main" section
  const mainSection = document.querySelector("main");
  mainSection.innerHTML = "";

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
}

// A function that displays a verb to conjugate
function displayVerb(i) {
  // Selecting the verb display section
  const verbDisplay = document.querySelector(".verb-display p");
  if (jsonData && jsonData.data.length > 0) {
    verbDisplay.textContent = jsonData.data[i].verb;
  }
}

// A function that displays a phrase (the context)
function displayPhrase(i) {
  // Selecting the phrase display section (the "p" element)
  const phraseDisplay = document.querySelector(".phrase-section p");
  if (jsonData && jsonData.data.length > 0) {
    phraseDisplay.textContent = jsonData.data[i].phrase;
  }
}

// A function that reads the user input and compares it to the correct answer
function checkAnswer(i) {
  // Select the message section
  const msgSection = document.querySelector(".msg-section");
  // Select "p" element for a message to display
  const msgArea = document.querySelector(".msg-section p");
  // Selecting the submit section
  const submitSection = document.querySelector(".submit-section");
  // Select the submit button
  const submitBtn = document.getElementById("submit-btn");
  // Selecting the input element
  const inputArea = document.querySelector(".type-section input");
  // Select the 'next' section
  const nextSection = document.querySelector(".next-section");

  submitBtn.addEventListener("click", () => {
    const inputText = inputArea.value;
    switch (inputText) {
      case "":
        msgArea.innerText = "Please type a valid verb";
        break;
      case jsonData.data[i].answer:
        msgArea.innerText = "Correct";
        submitSection.style.display = "none";
        nextSection.style.display = "flex";
        break;
      default:
        msgArea.innerText = `Incorrect. The correct answer is: "${jsonData.data[i].answer}"`;
        submitSection.style.display = "none";
        nextSection.style.display = "flex";
    }
  });
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
