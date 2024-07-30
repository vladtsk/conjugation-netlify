// Functions used in the main part

import { movePhraseForward, movePhraseBackward } from "./spacedRepetition.js";

//import { playAudio, playCorrect, playIncorrect } from "./playAudio.js";

//import { fetchFirebaseConfig, onAuthStateChanged, getAuth } from "./firebaseConfig.js";

import { showConjugations } from "./conjugationTablePopup.js";

import { showInfoPopup } from "./infoPopup.js";

import { handleCorrectAnswerQuiz, handleIncorrectAnswerQuiz } from "./checkAnswerFunctions.js";

// Fetching verb conjugation tables

let jsonConjug;

async function fetchConjugations() {
  const responseConjug = await fetch("../src/conjugation.json");
  const conjugations = await responseConjug.json();
  return conjugations;
}

fetchConjugations()
  .then(conjugations => {
    jsonConjug = conjugations;
  })
  .catch(error => {
    console.error('Error fetching conjugations:', error);
  });






// A function that reads the user input and compares it to the correct answer
function checkAnswerQuiz(answer, { data, k, phraseCount, score, boxes, phraseStats, lives, userId }) {

 
  let phraseStatObject = {
    phrase: "",
    input: "",
    correctAnswer: "",
    isCorrect: false,
  };


  // Select "p" element for a message to display
  const msgArea = document.querySelector(".msg-section");
  // Conjugation popup section
  const conjugSection = document.querySelector(".conjugSection");
  

  // Selecting the options section
  const optionsSection = document.querySelector(".options-section");


  // Select the 'next' section
  const nextSection = document.querySelector(".next-section");
  // Select the finish section
  const finishSection = document.querySelector(".finish-section");
  
  // "Lives" element
  const livesEl = document.querySelector(".lives");


  // The phrase display section
  //const phraseDisplay = document.querySelector(".phrase-section p");


  //const inputText = inputArea.value;
  let displaySection;



  if (phraseCount < 5) {
    displaySection = nextSection;
  } else {
    displaySection = finishSection;
  }



  phraseStatObject.phrase = data.data[k].phrase;
  phraseStatObject.input = answer;
  phraseStatObject.correctAnswer = data.data[k].answer;



  const phraseDivCorrect = document.createElement("div");
  phraseDivCorrect.innerHTML = `<i class="fa-solid fa-square-check"></i> ${data.data[k].fullPhrase} <i class="fa-solid fa-volume-low" id="speaker"></i>
  <p class="translation">${data.data[k].translation}</p>`;

  const phraseDiv = document.createElement("div");
  phraseDiv.innerHTML = `${data.data[k].fullPhrase} <i class="fa-solid fa-volume-low" id="speaker"></i>
  <p class="translation">${data.data[k].translation}</p>`;

  
  if(answer === data.data[k].answer) {
    handleCorrectAnswerQuiz(phraseDivCorrect, data.data[k].fullPhrase);
    if (userId) {
      movePhraseForward(k, boxes);
    }
    score++;
    phraseStatObject.isCorrect = true;
    phraseStats.push(phraseStatObject);

  } else {
    if(!userId && lives && lives > 0) {
        lives--;
       
        if(lives === 0) {
         
          if(livesEl) {
            livesEl.style.color = "#ef233c";
          }
        }
       
      }
      
      handleIncorrectAnswerQuiz(phraseDiv, data.data[k].fullPhrase, data.data[k].answer, lives);
      
      if (userId) {
        movePhraseBackward(k, boxes);
      }
      
      /*
      showConjugations(data.data[k], data.data[0], conjugSection, jsonConjug);
      showInfoPopup(data.data[k], data.data[0].tenseShort);
      */
      phraseStats.push(phraseStatObject);
  } 

  // Popup close icon
  /*const popupCloseBtn = document.querySelector(".popup-icons .popup-close");
  if (popupCloseBtn) {
    popupCloseBtn.addEventListener("click", () => {
      
      if(conjugSection) {
        conjugSection.innerHTML = "";
        conjugSection.style.display = "none";
      }
      
    });
  }*/

  if(displaySection) {
    displaySection.style.display = "flex";
  }
  

  return { score, boxes, lives };
}


export function handleQuizAnswerSubmit({ data, k, phraseCount, score, boxes, phraseStats, lives, userId }) {

  return new Promise((resolve, reject) => {
    // Selecting the option elements
  
    const option1 = document.querySelector(".option1");
    const option2 = document.querySelector(".option2");
    const option3 = document.querySelector(".option3");
    const option4 = document.querySelector(".option4");
  

    console.log("before", { score, boxes, lives });

    if(option1 && option2 && option3 && option4) {
      const options = [option1, option2, option3, option4];

      options.forEach((option)=>{
        option.addEventListener("click", handleClick);
      })

        function handleClick(event) {
          console.log("click, event:", event.target)

          let answer = event.target.textContent;
          event.target.classList.add("selectedOption");

            let quizResult = checkAnswerQuiz(answer, { data, k, phraseCount, score, boxes, phraseStats, lives, userId });
            ({ score, boxes, lives } = quizResult);

            console.log("inside", { score, boxes, lives });

            options.forEach((opt)=>{
            opt.removeEventListener("click", handleClick)
            })

            // Resolve the promise with the updated values
            resolve({ score, boxes, lives });
        }

      


    } else {
      // Reject the promise if options are not found
      reject(new Error("Options not found"));
    }
    
  })
    
  }