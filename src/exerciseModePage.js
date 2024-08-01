import { getJsonData } from "./readDbData.js";
import { launchApp } from "./index.js";

// Selecting the exercise mode

export async function buildModePage(tenseValue, phraseType, userId) {

  const livesEl = document.querySelector(".lives");
  const statsContainer = document.querySelector(".stats-container");
  
  const jsonData = await getJsonData(tenseValue);

  const contentArea = document.querySelector(".content-area");
  contentArea.innerHTML = "";
  
  // Section containing the main element
  
  let mainSection = document.querySelector(".mainSection");
  if (!mainSection) {
    mainSection = document.createElement("div");
    mainSection.classList.add("mainSection");
    contentArea.appendChild(mainSection);
  }
  
  const modeSection = document.createElement("div");
  modeSection.classList.add("modeSection");

  const modeH = document.createElement("h1");
  modeH.innerText = "Select an exercise type";
  modeSection.appendChild(modeH);

  // The section with modes to select

  const modeDiv = document.createElement("div");
  modeDiv.classList.add("mode-div");
  
  modeSection.appendChild(modeDiv);
  
  
  
  // Type mode section
  const typeMode = document.createElement("div");
  typeMode.classList.add("type-mode");
  modeDiv.appendChild(typeMode);
  
  const typeModeImage = document.createElement("img");
  typeModeImage.setAttribute("src", "../public/typing.png");
  typeModeImage.setAttribute("alt", "Type mode image");
  typeModeImage.setAttribute('width', '100px');
  typeModeImage.classList.add("typeModeImage");
  typeModeImage.setAttribute('loading', 'lazy');
  
  typeMode.appendChild(typeModeImage);

  const typeModeBox = document.createElement("div");
  typeModeBox.classList.add("typeModeBox");
  typeMode.appendChild(typeModeBox);

  const typeModeH = document.createElement("h2");
  typeModeH.textContent = "Typing mode";
  typeModeBox.appendChild(typeModeH);

  const typeModeDescrip = document.createElement("p");
  typeModeDescrip.textContent = "Improve your verb conjugation skills by typing the correct forms of given verbs.";
  typeModeBox.appendChild(typeModeDescrip);


  // Type quiz section
  const quizMode = document.createElement("div");
  quizMode.classList.add("quiz-mode");
  modeDiv.appendChild(quizMode);
  
  const quizModeImage = document.createElement("img");
  quizModeImage.setAttribute("src", "../public/quiz.png");
  quizModeImage.setAttribute("alt", "Type mode image");
  quizModeImage.setAttribute('width', '100px');
  quizModeImage.classList.add("quizModeImage");
  typeModeImage.setAttribute('loading', 'lazy');
  
  quizMode.appendChild(quizModeImage);

  const quizModeBox = document.createElement("div");
  quizModeBox.classList.add("quizModeBox");
  quizMode.appendChild(quizModeBox);

  const quizModeH = document.createElement("h2");
  quizModeH.textContent = "Quiz mode";
  quizModeBox.appendChild(quizModeH);

  const quizModeDescrip = document.createElement("p");
  quizModeDescrip.textContent = "Practise verb conjugation by selecting the correct verb form from multiple-choice options.";
  quizModeBox.appendChild(quizModeDescrip);

  mainSection.appendChild(modeSection);

  let mode;

  typeMode.addEventListener("click", ()=>{
    mode = "typeMode";

    if(!userId) {
      livesEl.style.display = "flex";
      livesEl.style.color = "#2b2d42";
    } else {
      livesEl.style.display = "none";
    }
      
    statsContainer.style.display = "flex";

    launchApp(jsonData, phraseType, mode);

  })

  quizMode.addEventListener("click", ()=>{
    mode = "quizMode";

    if(!userId) {
      livesEl.style.display = "flex";
      livesEl.style.color = "#2b2d42";
    } else {
      livesEl.style.display = "none";
    }
      
    statsContainer.style.display = "flex";

    launchApp(jsonData, phraseType, mode);
  })
  
  
  // Start button
  
  /*const startSection = document.createElement("div");
  startSection.classList.add("start-section");
  mainSection.appendChild(startSection);
  
  const startBtn = document.createElement("button");
  startBtn.id = "start-btn";
  startBtn.innerText = "Start now!";
  startSection.appendChild(startBtn);

  startBtn.addEventListener("click", ()=>{
    

    if(mode !== "") {
     
    }
  })*/
  
    
  }


 
    
    
  
  