// A popup explaining how to use the app

// Building the popup structure

import { moveSlides } from "./infoPopupSlides.js";
export function generateBlurContainer() {
  const main = document.querySelector("main");

  const blurContainer = document.createElement("div");
  blurContainer.classList.add("blurContainer");
  main.appendChild(blurContainer);
  blurContainer.style.display = "none";
}

export function generateRulesPopupSection() {

  const main = document.querySelector("main");

  const rulesSection = document.createElement("div");
  rulesSection.classList.add("rulesSection");


  main.appendChild(rulesSection);
  rulesSection.style.display = "none";
  

  const closeBtn = document.createElement("i");
  closeBtn.classList.add("fa-solid", "fa-xmark", "popup-close");
  rulesSection.appendChild(closeBtn);

  const rulesDiv1 = document.createElement("div");
  rulesSection.appendChild(rulesDiv1);
  rulesDiv1.innerHTML = "<h1>How to use the app</h1>";

  generateRulesStart();
  generateRulesQuestion();
  generateRulesQuiz();
  generateRulesAnswer();
  generateRulesPronunciation();
  generateRulesLearnMore();
  
  const buttons = document.createElement("div");
  buttons.classList.add("buttons");
  rulesSection.appendChild(buttons);

  const previousBtn = document.createElement("i");
  previousBtn.classList.add("fa-solid", "fa-circle-arrow-left");
  previousBtn.style.display = "none";
  buttons.appendChild(previousBtn);

  const nextBtn = document.createElement("i");
  nextBtn.classList.add("fa-solid", "fa-circle-arrow-right");
  buttons.appendChild(nextBtn);

  const rulesStartDiv = document.querySelector(".rulesStartDiv");
  const rulesQuestDiv = document.querySelector(".rulesQuestDiv");
  const rulesQuizDiv = document.querySelector(".rulesQuizDiv");
  const rulesAnswerDiv = document.querySelector(".rulesAnswerDiv");
  const rulesPronuncDiv = document.querySelector(".rulesPronuncDiv");
  const rulesLearnMoreDiv = document.querySelector(".rulesLearnMoreDiv");

  const rulesDivArrow = [rulesStartDiv, rulesQuestDiv, rulesQuizDiv, rulesAnswerDiv, rulesPronuncDiv, rulesLearnMoreDiv];

  nextBtn.addEventListener("click", ()=>{
    for(let i=0; i<rulesDivArrow.length-1; i++){
      if(rulesDivArrow[i].style.display !== "none"){
        rulesDivArrow[i].style.display = "none";
        rulesDivArrow[i+1].style.display = "block";
        if(i === 4){
          nextBtn.style.display = "none";
        };
        previousBtn.style.display = "block"; 
        break;
      }
    }
  })

  previousBtn.addEventListener("click", ()=>{
    for(let i=1; i<rulesDivArrow.length; i++){
      if(rulesDivArrow[i].style.display !== "none"){
        rulesDivArrow[i].style.display = "none";
        rulesDivArrow[i-1].style.display = "block";
        if(i === 1){
          previousBtn.style.display = "none";
        } 
        nextBtn.style.display = "block";
        break;
      }
    }
  })


 
}


function generateRulesStart() {
  const rulesSection = document.querySelector(".rulesSection");



  const rulesStartDiv = document.createElement("div");

  rulesSection.appendChild(rulesStartDiv);
  rulesStartDiv.classList.add("rulesStartDiv");

  const rulesH = document.createElement("div");
  rulesH.classList.add("rulesH");
  rulesStartDiv.appendChild(rulesH);
  rulesH.innerHTML =
    "<i class='fa-solid fa-rocket'></i><h2>Getting started</h2>";

  const rulesExplanation = document.createElement("div");
  rulesStartDiv.appendChild(rulesExplanation);

  const rulesP1 = document.createElement("p");
  rulesExplanation.appendChild(rulesP1);
  rulesP1.innerHTML =
    "You can get started by simply choosing a tense and a level of difficulty and clicking <span class='bold'>'Start now'</span> on the main page (welcome page).";

  const rulesStartP2 = document.createElement("p");
  rulesExplanation.appendChild(rulesStartP2);
  rulesStartP2.innerHTML =
    `If you choose <b>'easy'</b>, you can practice regular conjugations. Selecting <b>'medium'</b> includes regular and irregular verbs, while <b>'hard'</b> covers only 
    irregular verbs.`;

    const rulesP3 = document.createElement("p");
  rulesExplanation.appendChild(rulesP3);
  rulesP3.innerHTML =
    "On the second page, choose a type of exercise: 'Quiz Mode' or 'Typing Mode'.";

  const photosDiv = document.createElement("div");
  photosDiv.classList.add("photosDiv");
  rulesExplanation.appendChild(photosDiv);

  const carouselContainer = document.createElement("div");
  carouselContainer.classList.add("carouselContainer");
  photosDiv.appendChild(carouselContainer);

  const slide1 = document.createElement("div");
  slide1.classList.add("slide", "slide1");
  const image1 = document.createElement("img");
  image1.setAttribute("src", "./public/start1.png");
  slide1.appendChild(image1);

  const slide2 = document.createElement("div");
  slide2.classList.add("slide", "slide2");
  const image2 = document.createElement("img");
  image2.setAttribute("src", "./public/start2.png");
  slide2.appendChild(image2);

  const slide3 = document.createElement("div");
  slide3.classList.add("slide", "slide3");
  const image3 = document.createElement("img");
  image3.setAttribute("src", "./public/start3.png");
  slide3.appendChild(image3);

  carouselContainer.appendChild(slide1);
  carouselContainer.appendChild(slide2);
  carouselContainer.appendChild(slide3);

  moveSlides();

  } 

  function generateRulesQuestion() {
    const rulesSection = document.querySelector(".rulesSection");
    
    const rulesQuestDiv = document.createElement("div");
    rulesQuestDiv.style.display = "none";

    rulesSection.appendChild(rulesQuestDiv);
    rulesQuestDiv.classList.add("rulesQuestDiv");

    const rulesH = document.createElement("div");
    rulesH.classList.add("rulesH");
    rulesQuestDiv.appendChild(rulesH);
    rulesH.innerHTML =
      "<i class='fa-regular fa-circle-question'></i> <h2>Understand the question</h2>";

    const rulesExplanation = document.createElement("div");
    rulesQuestDiv.appendChild(rulesExplanation);

    const rulesP1 = document.createElement("p");
    rulesExplanation.appendChild(rulesP1);
    rulesP1.innerHTML =
      `You'll see a verb you need to conjugate in the selected tense (e.g.: 'vouloir'). 
      Under the verb, you'll see a sentence with one or more spaces that you need to complete with the conjugated verb.`;

    const photoDiv = document.createElement("div");
    photoDiv.classList.add("photoDiv");
    rulesExplanation.appendChild(photoDiv);

    const exampleImage = document.createElement("img");
    exampleImage.setAttribute("src", "./public/question.png");
   
    photoDiv.appendChild(exampleImage);

    
} 

function generateRulesQuiz() {
  const rulesSection = document.querySelector(".rulesSection");
  
  const rulesQuizDiv = document.createElement("div");
  rulesQuizDiv.style.display = "none";

  rulesSection.appendChild(rulesQuizDiv);
  rulesQuizDiv.classList.add("rulesQuizDiv");

  const quizsH = document.createElement("div");
  quizsH.classList.add("rulesH");
  rulesQuizDiv.appendChild(quizsH);
  quizsH.innerHTML =
    "<i class='fa-regular fa-circle-question'></i> <h2>Choose the correct answer (quiz mode)</h2>";

  const quizExplanation = document.createElement("div");
  rulesQuizDiv.appendChild(quizExplanation);

  const quizP1 = document.createElement("p");
  quizExplanation.appendChild(quizP1);
  quizP1.innerHTML =
    `In quiz mode, simply choose the correct answer from 4 options.`;

  const photoDiv = document.createElement("div");
  photoDiv.classList.add("photoDiv");
  quizExplanation.appendChild(photoDiv);

  const exampleImage = document.createElement("img");
  exampleImage.setAttribute("src", "./public/quiz-question.png");
 
  photoDiv.appendChild(exampleImage);

  
} 

function generateRulesAnswer() {
  const rulesSection = document.querySelector(".rulesSection");
  
  

  const rulesAnswerDiv = document.createElement("div");
  rulesAnswerDiv.style.display = "none";

  rulesSection.appendChild(rulesAnswerDiv);
  rulesAnswerDiv.classList.add("rulesAnswerDiv");

  const rulesH = document.createElement("div");
  rulesH.classList.add("rulesH");
  rulesAnswerDiv.appendChild(rulesH);
  rulesH.innerHTML =
    "<i class='fa-solid fa-keyboard'></i> <h2>Type your answer (typing mode)</h2>";

  const rulesExplanation = document.createElement("div");
  rulesAnswerDiv.appendChild(rulesExplanation);

  const rulesP1 = document.createElement("p");
  rulesExplanation.appendChild(rulesP1);
  rulesP1.innerHTML =
    `In the example below, you need to conjugate <b>'vouloir'</b> in the present tense with the pronoun <b>'tu'</b>, which gives 'tu veux'.
So we should type <b>'veux'</b> to complete the sentence.`;
  
  const rulesP2 = document.createElement("p");
  rulesExplanation.appendChild(rulesP2);
  rulesP2.innerHTML = "Use <u>the keyboard on your device</u> to type your answers. You can also use the buttons with <u>special characters</u> such as 'é' or 'ç' to type faster."
  

  const photoDiv = document.createElement("div");
  photoDiv.classList.add("photoDiv");
  rulesExplanation.appendChild(photoDiv);

  const exampleImage = document.createElement("img");
  exampleImage.setAttribute("src", "./public/answer.png");
 
  photoDiv.appendChild(exampleImage);

} 

  function generateRulesPronunciation(){
    const rulesSection = document.querySelector(".rulesSection");

  
    const rulesPronuncDiv = document.createElement("div");
    rulesPronuncDiv.style.display = "none";

    rulesSection.appendChild(rulesPronuncDiv);
    rulesPronuncDiv.classList.add("rulesPronuncDiv");
    
    const rulesPronuncH = document.createElement("div");
    rulesPronuncH.classList.add("rulesH");
    rulesPronuncDiv.appendChild(rulesPronuncH);

    rulesPronuncH.innerHTML =
      "<i class='fa-solid fa-volume-low'></i><h2>The pronunciation</h2>";

    const rulesExplanation = document.createElement("div");
    rulesPronuncDiv.appendChild(rulesExplanation);

    const rulesPronuncP1 = document.createElement("p");
    rulesExplanation.appendChild(rulesPronuncP1);
    rulesPronuncP1.innerHTML =
      `Once you've submitted your answer, you'll see a <span class='bold'>speaker icon</span> appear next to the phrase. 
      Click on it to hear an automatically generated pronunciation of the phrase.`;

    const rulesPronuncP2 = document.createElement("p");
    rulesExplanation.appendChild(rulesPronuncP2);
    rulesPronuncP2.innerHTML =
      "Note that this feature might not be available in all browsers, so we recommend using <u>Chrome</u>, <u>Edge</u>, or <u>Safari</u>.";


    const photoDiv = document.createElement("div");
    photoDiv.classList.add("photoDiv");
    rulesExplanation.appendChild(photoDiv);
    
    const exampleImage = document.createElement("img");
    exampleImage.setAttribute("src", "./public/correct-answer.png");
     
    photoDiv.appendChild(exampleImage);
    
}

function generateRulesLearnMore() {
  const rulesSection = document.querySelector(".rulesSection");
  

  const rulesLearnMoreDiv = document.createElement("div");
  rulesLearnMoreDiv.style.display = "none";
  rulesSection.appendChild(rulesLearnMoreDiv);
  rulesLearnMoreDiv.classList.add("rulesLearnMoreDiv");

  const rulesH = document.createElement("div");
  rulesH.classList.add("rulesH");
  rulesLearnMoreDiv.appendChild(rulesH);
  rulesH.innerHTML =
    "<i class='fa-solid fa-circle-info'></i> <h2>See explanations</h2>";

  const rulesExplanation = document.createElement("div");
  rulesLearnMoreDiv.appendChild(rulesExplanation);

  const rulesP1 = document.createElement("p");
  rulesExplanation.appendChild(rulesP1);
  rulesP1.innerHTML =
    `If the answer you've typed is incorrect, you can click on 'learn more' to see additional information to help you master French conjugation.`;
  

  const photoDiv = document.createElement("div");
  photoDiv.classList.add("photoDiv");
  rulesExplanation.appendChild(photoDiv);

  const exampleImage = document.createElement("img");
  exampleImage.setAttribute("src", "./public/incorrect-answer.png");
 
  photoDiv.appendChild(exampleImage);

 
} 


export function handleRulesPopup() {
  const rulesBtn = document.querySelector(".rules-button");
  const rulesSection = document.querySelector(".rulesSection");
  const blurContainer = document.querySelector(".blurContainer");
  const closeBtn = document.querySelector(".popup-close"); 

  if(rulesBtn) {
    rulesBtn.addEventListener("click", (event) => {
      rulesSection.style.display = "block";
      blurContainer.style.display = "block";
      event.stopPropagation();
    
    });
  }
  
  if(closeBtn) {
    closeBtn.addEventListener("click", (event) => {
      rulesSection.style.display = "none";
      blurContainer.style.display = "none";
      event.stopPropagation();
    });
  }
  
}