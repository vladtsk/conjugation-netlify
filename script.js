let jsonData;

// Fetch data from the JSON file and launching the app
async function launchApp() {
  const response = await fetch("verbs.json");
  jsonData = await response.json();

  // Create an array of indeces
  let indexArray = [];
  // An index that will be henerated randomly
  let k;

  setSpecialBtns();

  function generateElements() {
    // Generate a random and unique index
    do {
      k = Math.floor(Math.random() * jsonData.presentind.length);
    } while (indexArray.includes(k));

    indexArray.push(k);
    displayVerb(k);
    displayPhrase(k);
    checkAnswer(k);
  }
  generateElements();
  displayNext();

  // Display the next element
  function displayNext() {
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
      generateElements();
      nextSection.style.display = "none";
      submitSection.style.display = "flex";
    });
  }
}

launchApp();

// A function that displays a verb to conjugate
function displayVerb(i) {
  // Selecting the verb display section
  const verbDisplay = document.querySelector(".verb-display p");
  if (jsonData && jsonData.presentind.length > 0) {
    verbDisplay.textContent = jsonData.presentind[i].verb;
  }
}

// A function that displays a phrase (the context)
function displayPhrase(i) {
  // Selecting the phrase display section (the "p" element)
  const phraseDisplay = document.querySelector(".phrase-section p");
  if (jsonData && jsonData.presentind.length > 0) {
    phraseDisplay.textContent = jsonData.presentind[i].phrase;
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
      case jsonData.presentind[i].answer:
        msgArea.innerText = "Correct";
        submitSection.style.display = "none";
        nextSection.style.display = "flex";
        break;
      default:
        msgArea.innerText = `Incorrect. The correct answer is: "${jsonData.presentind[i].answer}"`;
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
