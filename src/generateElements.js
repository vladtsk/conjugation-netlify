import { showNoMorePhrasesPage } from "./pagesetup.js";

import { filterVerbs } from "./verbFilter.js";

// A function generating a unique index and displaying a verb and a phrase corresponding to the index
export function generateElements({data, indexArray, k, score, phraseStats, phraseType}) {
  
  let filteredVerbsIndexArray = [];

  filterVerbs(data, phraseType, filteredVerbsIndexArray);

  // Generate a random and unique index
  if (indexArray.length !== data.data.length) {
    
    let loopAttempts = 0;
    
    if (filteredVerbsIndexArray.length !== 0) {

      
        do {
          k = Math.floor(Math.random() * data.data.length);
          loopAttempts ++;
          if(loopAttempts > data.data.length) {
            throw new Error("Exceeded maximum attempts to find a valid index.");
          }
          
    
        } while (indexArray.includes(k) || !filteredVerbsIndexArray.includes(k));
  
         
    
      } else {
       do {
       k = Math.floor(Math.random() * data.data.length);
        } while (indexArray.includes(k));
    }

    indexArray.push(k);

    console.log("phraseStats", phraseStats);

    let questionN = phraseStats.length + 1;
    displayVerb(data, k, questionN);
    displayPhrase(data, k);
    displayOptions(data, k)
  } else {
    console.log("No more phrases to practise!");
    showNoMorePhrasesPage(score, phraseStats); // the data is not added to DB here
    
  }

  return k;
}

// A function that displays a verb to conjugate
function displayVerb(data, k, phraseCount) {
  // Selecting the verb display section
  const verbDisplay = document.querySelector(".verb-display p");
  const questionSection = document.querySelector(".questionSection");

  if (data && data.data.length > 0 && verbDisplay) {
    verbDisplay.textContent = data.data[k].verb;
  } else if (data && data.data.length > 0 && questionSection) {

    questionSection.innerHTML = "";
    const question = document.createElement("p");
    question.innerHTML = `Question ${phraseCount} / 5`;
    questionSection.appendChild(question);

    const verbQ = document.createElement("div");
    verbQ.innerHTML = `<p>Select the correct conjugation of&nbsp;the&nbsp;verb</p> <p class="verbP">${data.data[k].verb}</p>`;
    questionSection.appendChild(verbQ);

  }



}

// A function that displays a phrase (the context)
function displayPhrase(data, k) {
  // Selecting the phrase section
  const phraseDisplay = document.querySelector(".phrase-section");
  if (data && data.data.length > 0) {
    phraseDisplay.textContent = data.data[k].phrase;
  }
}

// A function that displays options in the quiz mode
function displayOptions(data, k) {
  // Selecting the option elements
  const option1 = document.querySelector(".option1");
  const option2 = document.querySelector(".option2");
  const option3 = document.querySelector(".option3");
  const option4 = document.querySelector(".option4");

  const optionsSection = document.querySelector(".options-section");

  const options = [option1, option2, option3, option4];
  let p; // index
  let indices = [];

  if (data && data.data.length > 0 && optionsSection) {
    const optionAnswers = [data.data[k].answer, data.data[k].incorrect1, data.data[k].incorrect2, data.data[k].incorrect3];

    for(let i = 0; i < options.length; i++) {

    do {
      p = Math.floor(Math.random() * options.length);
    }  while (indices.includes(p));

    console.log("k, p ", k, p);

    indices.push(p);

    options[p].textContent = optionAnswers[i];

    if(i === 0) {
      options[p].classList.add("correct-option");
    }

    
  }
    
  }
}

// A function displaying the tense
export function displayTense(data) {
  // Selecting the tense display section
  const tenseDisplay = document.querySelector(".tense-display p");
  // Displaying the tense
  if (data && data.data.length > 0 && tenseDisplay) {
    tenseDisplay.textContent = data.data[0].tense;
  }
}

// Display the next element
export function displayNext({data, indexArray, k, score, phraseStats, phraseType}) {
  // Select the 'next' section
  const nextSection = document.querySelector(".next-section");

  // Selecting the submit section
  const submitSection = document.querySelector(".submit-section");

  // Selecting the message "p" element
  const msgArea = document.querySelector(".msg-section");
  // Select the input element
  const inputArea = document.querySelector(".type-section input");
  if(indexArray && inputArea) {
    inputArea.removeAttribute("disabled");
    inputArea.classList.remove("bold");
  }
  

  // Selecting the special character section
  /*const specialBtns = document.querySelectorAll(".letters-section button");
  if(specialBtns) {
    specialBtns.forEach((button) => {
      button.removeAttribute("disabled");
    });
  }*/

  const lettersSection = document.querySelector(".letters-section");
  if(lettersSection) {
    lettersSection.style.display = "flex";
  }
  

  msgArea.innerHTML = "";

  if(inputArea) {
    inputArea.value = "";
  }
  


  try {
    k = generateElements({data, indexArray, k, score, phraseStats, phraseType});
  } catch (error) {
    console.error(error.message);
    showNoMorePhrasesPage(score, phraseStats); 
  }

  if(nextSection) {
    nextSection.style.display = "none";
  }
  

  if(submitSection) {
    submitSection.style.display = "flex";
  }
  
  console.log("k", k)
  return k;
}

