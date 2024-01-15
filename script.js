let jsonData;

// Fetch data from the JSON file and launching the app
async function launchApp() {
  const response = await fetch("verbs.json");
  jsonData = await response.json();

  // Create an array of indeces
  let indexArray = [];
  // An index that will be henerated randomly
  let k;

  async function delay(time) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, time);
    });
  }

  async function generateElements() {
    let i = 0;
    while (i < 5) {
      // Generate a random and unique index
      do {
        k = Math.floor(Math.random() * jsonData.data.length);
      } while (indexArray.includes(k));

      indexArray.push(k);
      displayVerb(k);
      displayPhrase(k);
      checkAnswer(k);
      // Set a delay before displaying the next element
      const msgArea = document.querySelector(".msg-section p");
      if (msgArea.innerText !== "Please type a valid verb") {
        await delay(3000);
        i++;
      }
    }
  }
  generateElements();
}

launchApp();

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
  // Selecting the message section
  const msgSection = document.querySelector(".msg-section");
  // Selecting the submit button
  const submitBtn = document.getElementById("submit-btn");
  // Selecting the input element
  const inputArea = document.querySelector(".type-section input");

  // Creating a "p" element for a message to display
  const msgArea = document.createElement("p");
  msgSection.appendChild(msgArea);

  submitBtn.addEventListener("click", () => {
    const inputText = inputArea.value;
    switch (inputText) {
      case "":
        msgArea.innerText = "Please type a valid verb";
        break;
      case jsonData.data[i].answer:
        msgArea.innerText = "Correct";
        break;
      default:
        msgArea.innerText = `Incorrect. The correct answer is: "${jsonData.data[i].answer}"`;
    }
  });
}
