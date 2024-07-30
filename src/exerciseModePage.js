// Selecting the exercise mode

// Building the first page
export async function buildModePage(userId) {
    

    const contentArea = document.querySelector(".content-area");
    contentArea.innerHTML = "";
  
    // Section containing the main element
  
    let mainSection = document.querySelector(".mainSection");
    if (!mainSection) {
      mainSection = document.createElement("div");
      mainSection.classList.add("mainSection");
      contentArea.appendChild(mainSection);
    }
  
    // Welcome section
    const welcomeDiv = document.createElement("div");
    welcomeDiv.classList.add("welcome");
  
    mainSection.appendChild(welcomeDiv);
  
    const welcomeP = document.createElement("h1");
    welcomeP.innerText = "Select an exercise type (mode)";
    welcomeDiv.appendChild(welcomeP);
  
    // Type mode section
    const typeMode = document.createElement("div");
    typeMode.classList.add("type-mode");
    mainSection.appendChild(typeMode);
  
    const typeModeImage = document.createElement("img");
    typeModeImage.setAttribute("src", "../public/typing.png");
    typeModeImage.setAttribute("alt", "Type mode image");
    typeModeImage.classList.add("typeModeImage");
  
    typeMode.appendChild(typeModeImage);

    const typeModeH = document.createElement("h2");
    typeModeH.textContent = "Type mode";
    typeMode.appendChild(typeModeH);

    const typeModeDescrip = document.createElement("div");
    typeModeDescrip.textContent = "Improve your verb conjugation skills by typing the correct forms of given verbs.";
    typeMode.appendChild(typeModeDescrip);


    // Type quiz section
    const quizMode = document.createElement("div");
    quizMode.classList.add("type-mode");
    mainSection.appendChild(quizMode);
  
    const quizModeImage = document.createElement("img");
    quizModeImage.setAttribute("src", "../public/quiz.png");
    quizModeImage.setAttribute("alt", "Type mode image");
    quizModeImage.classList.add("quizModeImage");
  
    quizMode.appendChild(quizModeImage);

    const quizModeH = document.createElement("h2");
    quizModeH.textContent = "Quiz mode";
    quizMode.appendChild(quizModeH);

    const quizModeDescrip = document.createElement("div");
    quizModeDescrip.textContent = "Practise verb conjugation by selecting the correct verb form from multiple-choice options.";
    quizMode.appendChild(quizModeDescrip);



  
  
    // Start button
  
    const startSection = document.createElement("div");
    startSection.classList.add("start-section");
    mainSection.appendChild(startSection);
  
    const startBtn = document.createElement("button");
    startBtn.id = "start-btn";
    startBtn.innerText = "Start now!";
    startSection.appendChild(startBtn);

    
  }