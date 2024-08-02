// Functions that dinamically build the pages

import { launchFirstPage } from "./firstPageLaunch.js";
import { generateGraph, buildGraph } from "./graphs.js";
import { selectPracticeBtn } from "./menuPracticeBtnClick.js";



// Building the main page structure
export function buildPageStructure() {
  // Deleting all the elements in the "main" section
  const contentArea = document.querySelector(".content-area");
  const mainSection = document.querySelector(".mainSection");

  mainSection.innerHTML = "";

  // Tense display section
  const tenseDisplaySection = document.createElement("div");
  tenseDisplaySection.classList.add("tense-display-section");
  mainSection.appendChild(tenseDisplaySection);

  const typeModeH1 = document.createElement("h1");
  typeModeH1.classList.add("modeH1");
  typeModeH1.innerHTML = "<i class='fa-solid fa-bolt'></i> Typing mode";

  mainSection.appendChild(typeModeH1);


  // Question section
  const questionSection = document.createElement("div");
  questionSection.classList.add("questionSection");

  const questionN = document.createElement("p");
  questionN.classList.add("questionNumber");
  questionSection.appendChild(questionN);

  mainSection.appendChild(questionSection);

  /*const tensePElement = document.createElement("p");
  tensePElement.innerText = "The tense:";
  tenseDisplaySection.appendChild(tensePElement);

  const tenseDisplay = document.createElement("div");
  tenseDisplay.classList.add("tense-display");
  tenseDisplaySection.appendChild(tenseDisplay);

  const tenseDisplayP = document.createElement("p");
  tenseDisplay.appendChild(tenseDisplayP);
*/
  // Verb display section
  /*const verbDisplaySection = document.createElement("div");
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
*/
  // Phrase section
  const phraseSection = document.createElement("div");
  phraseSection.classList.add("phrase-section");
  mainSection.appendChild(phraseSection);

  /*const phraseSectionP = document.createElement("p");
  phraseSection.appendChild(phraseSectionP);*/

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

  // 'Learn more' section
  const learnMoreSection = document.createElement("div");
  learnMoreSection.classList.add("learnMore");
  mainSection.appendChild(learnMoreSection);

  learnMoreSection.innerHTML = `<i class="fa-solid fa-circle-info"></i> Learn more`;
  learnMoreSection.style.display = "none";

  // Learn more info popup section
  const main = document.querySelector("main");
  const infoPopupSection = document.createElement("div");
  infoPopupSection.classList.add("infoPopupSection");
  main.appendChild(infoPopupSection);
  infoPopupSection.style.display = "none";

  // Conjugation popup section

  const conjugSection = document.createElement("div");
  conjugSection.classList.add("conjugSection");
  contentArea.appendChild(conjugSection);
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
  finishSection.style.display = "none";

  const finishBtn = document.createElement("button");
  finishBtn.id = "finish-btn";
  finishBtn.innerText = "finish";
  finishSection.appendChild(finishBtn);
}


// Building the main page structure for the quiz mode
export function buildPageStructureQuiz() {
  // Deleting all the elements in the "main" section
  const contentArea = document.querySelector(".content-area");
  const mainSection = document.querySelector(".mainSection");

  mainSection.innerHTML = "";

  // Tense display section
  const tenseDisplaySection = document.createElement("div");
  tenseDisplaySection.classList.add("tense-display-section");
  mainSection.appendChild(tenseDisplaySection);

  const quizH1 = document.createElement("h1");
  quizH1.classList.add("modeH1")
  quizH1.innerHTML = "<i class='fa-solid fa-bolt'></i> Quiz";

  mainSection.appendChild(quizH1);
  


  // Question section
  const questionSection = document.createElement("div");
  questionSection.classList.add("questionSection");

  const questionN = document.createElement("p");
  questionN.classList.add("questionNumber");
  questionSection.appendChild(questionN);

  mainSection.appendChild(questionSection);



  // Phrase section
  const phraseSection = document.createElement("div");
  phraseSection.classList.add("phrase-section");
  mainSection.appendChild(phraseSection);

  /*const phraseSectionP = document.createElement("p");
  phraseSection.appendChild(phraseSectionP);*/

  

  // Options section
  const optionsSectionDiv = document.createElement("div");
  optionsSectionDiv.classList.add("options-section");
  mainSection.appendChild(optionsSectionDiv);

  const option1 = document.createElement("div");
  option1.classList.add("option1");
  optionsSectionDiv.appendChild(option1);

  const option2 = document.createElement("div");
  option2.classList.add("option2");
  optionsSectionDiv.appendChild(option2);

  const option3 = document.createElement("div");
  option3.classList.add("option3");
  optionsSectionDiv.appendChild(option3);

  const option4 = document.createElement("div");
  option4.classList.add("option4");
  optionsSectionDiv.appendChild(option4);


  // Message section
  const messageSection = document.createElement("div");
  messageSection.classList.add("msg-section");
  mainSection.appendChild(messageSection);

  // 'Learn more' section
  const learnMoreSection = document.createElement("div");
  learnMoreSection.classList.add("learnMore");
  mainSection.appendChild(learnMoreSection);

  learnMoreSection.innerHTML = `<i class="fa-solid fa-circle-info"></i> Learn more`;
  learnMoreSection.style.display = "none";

  // Learn more info popup section
  const main = document.querySelector("main");
  const infoPopupSection = document.createElement("div");
  infoPopupSection.classList.add("infoPopupSection");
  main.appendChild(infoPopupSection);
  infoPopupSection.style.display = "none";

  // Conjugation popup section

  const conjugSection = document.createElement("div");
  conjugSection.classList.add("conjugSection");
  contentArea.appendChild(conjugSection);
  conjugSection.style.display = "none";

  // Sibmit section
  /*const submitSection = document.createElement("div");
  submitSection.classList.add("submit-section");
  mainSection.appendChild(submitSection);

  const submitBtn = document.createElement("button");
  submitBtn.id = "submit-btn";
  submitBtn.innerText = "submit";
  submitSection.appendChild(submitBtn); */

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
  finishSection.style.display = "none";

  const finishBtn = document.createElement("button");
  finishBtn.id = "finish-btn";
  finishBtn.innerText = "finish";
  finishSection.appendChild(finishBtn);
}
//

// Special characters buttons
export function setSpecialBtns() {
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

export function showResultPage({score, phraseStats, stats, userId, streak}) {

  const img = new Image();
  img.src = "../public/trophy.png";

  const main = document.querySelector("main");
  const mainSection = document.querySelector(".mainSection");
  const contentArea = document.querySelector(".content-area");
  const infoPopupSection = document.querySelector(".infoPopupSection");

  if(infoPopupSection) {
    main.removeChild(infoPopupSection);
  }


  const conjugSection = document.querySelector(".conjugSection");
  if (conjugSection) {
    contentArea.removeChild(conjugSection);
  }


  const sidebarContainer = document.querySelector(".sidebarContainer");
  const sidebarTabletContainer = document.querySelector(
    ".sidebarTabletContainer"
  );
  const footer = document.querySelector("footer");
  const nav = document.querySelector("nav");
  //const livesEl = document.querySelector(".lives");

  const resultSection = document.createElement("div");
  resultSection.classList.add("resultSection");


  const resultDiv = document.createElement("div");
  resultDiv.classList.add("result");
  

  const resultMsg = document.createElement("p");
  resultMsg.innerText = "You have finished the exercise!";
  resultDiv.appendChild(resultMsg);

  resultSection.appendChild(resultDiv);

  const trophyImage = document.createElement("img");
  
  trophyImage.src = img.src;
  trophyImage.setAttribute("alt", "Trophy");
  trophyImage.classList.add("trophyImage");

  trophyImage.setAttribute('width', '180px');
  trophyImage.setAttribute('loading', 'lazy');

  resultSection.appendChild(trophyImage);

  const scoreDiv = document.createElement("div");
  scoreDiv.classList.add("score-section");
  resultSection.appendChild(scoreDiv);

  /*const trophyIcon = document.createElement("i");
  trophyIcon.classList.add("fa-solid");
  trophyIcon.classList.add("fa-trophy");
  scoreDiv.appendChild(trophyIcon);*/

  const scoreMsg = document.createElement("p");
  scoreMsg.innerHTML = `Your score: ${score}/${phraseStats.length}`;
  scoreDiv.appendChild(scoreMsg);



  const streakDiv = document.createElement("div");
  streakDiv.classList.add("streak-section");
  resultSection.appendChild(streakDiv);

  streakDiv.innerHTML = `Your streak: <i class="fa-solid fa-fire"></i> ${streak}`;
  

  const restartSection = document.createElement("div");
  restartSection.classList.add("restart");
  resultSection.appendChild(restartSection);

  const restartBtn = document.createElement("button");
  restartBtn.id = "restart-btn";
  restartBtn.innerText = "restart";
  restartSection.appendChild(restartBtn);

  let showSummaryBtn = document.createElement("button");
  showSummaryBtn.id = "showSummary-btn";
  showSummaryBtn.innerText = "show summary";
  restartSection.appendChild(showSummaryBtn);

  //resultSection.style.display = "none";

  img.onload = ()=>{
    mainSection.innerHTML = "";
    mainSection.appendChild(resultSection);

    //resultSection.style.display = "flex";
  }
  
  
/*
  if (userId) {
    generateGraph();
    buildGraph(stats);
  }
    */

  nav.style.display = "flex";
  //livesEl.style.display = "none";

  let summary;
  let chart = document.querySelector(".chart");

  showSummaryBtn.addEventListener("click", () => {

    const blurContainer = document.querySelector(".blurContainer");

    if (phraseStats.length != 0) {
      showSummary(phraseStats);

      if(blurContainer) {
        blurContainer.style.display = "block";
      }
        //summary = document.querySelector(".summary");
      showSummaryBtn = document.getElementById("showSummary-btn");
      restartSection.removeChild(showSummaryBtn);
    }

    let summaryCloseBtn = document.querySelector(".summaryCloseBtn");
   
    //Close summary
    if (summaryCloseBtn) {
      summaryCloseBtn.addEventListener("click", () => {
        summary = document.querySelector(".summary");
        if (summary) {
          main.removeChild(summary);
          summary = null;
        }
        if(blurContainer) {
          blurContainer.style.display = "none";
        }
      });
    }

    if (chart) {
      contentArea.removeChild(chart);
      chart = null;
    }
  });

  restartBtn.addEventListener("click", () => {
    mainSection.innerHTML = "";
    const statsContainer = document.querySelector(".stats-container");

    const accountBtn = document.querySelector(".menu-element.account");
    if(accountBtn) {
      accountBtn.style.display = "flex";
    }
    

    if (summary) {
      main.removeChild(summary);
      summary = null;
    }

    if (chart) {
      contentArea.removeChild(chart);
      chart = null;
    }

    sidebarContainer.style.display = "flex";
    sidebarTabletContainer.style.display = "flex";
    footer.style.display = "block";
    statsContainer.style.display = "none";
    launchFirstPage();
    selectPracticeBtn();
  
  });
}

export function showNoMorePhrasesPage(score, phraseStats) {
  const main = document.querySelector("main");
  const mainSection = document.querySelector(".mainSection");
  mainSection.innerHTML = "";

  const contentArea = document.querySelector(".content-area");

  const noMorePhrDiv = document.createElement("div");
  noMorePhrDiv.classList.add("noMorePhrDiv");
  mainSection.appendChild(noMorePhrDiv);

  const noMorePhrMsg = document.createElement("p");
  noMorePhrMsg.innerText = "You have no more phrases to practise!";
  noMorePhrDiv.appendChild(noMorePhrMsg);

  const noMorePhrExpl = document.createElement("p");
  noMorePhrExpl.classList.add("noMorePhrExpl");
  noMorePhrExpl.innerText =
    "Please try another tense, change the level, or come back later. Our smart repetition system shows you phrases at specific intervals, enhancing your ability to memorize them efficiently.";
  noMorePhrDiv.appendChild(noMorePhrExpl);

  const scoreDiv = document.createElement("div");
  scoreDiv.classList.add("score-section");
  mainSection.appendChild(scoreDiv);

  const trophyIcon = document.createElement("i");
  trophyIcon.classList.add("fa-solid");
  trophyIcon.classList.add("fa-trophy");
  scoreDiv.appendChild(trophyIcon);

  const scoreMsg = document.createElement("p");
  if (phraseStats.length != 0) {
    scoreMsg.innerText = `Your score is: ${score}/${phraseStats.length}`;
    scoreDiv.appendChild(scoreMsg);
  }

  const sidebarContainer = document.querySelector(".sidebarContainer");
  const sidebarTabletContainer = document.querySelector(
    ".sidebarTabletContainer"
  );
  const footer = document.querySelector("footer");
  const nav = document.querySelector("nav");
  const livesEl = document.querySelector(".lives");
  const statsContainer = document.querySelector(".stats-container");
  
  const restartSection = document.createElement("div");
  restartSection.classList.add("restart");
  mainSection.appendChild(restartSection);
  const restartBtn = document.createElement("button");
  restartBtn.id = "restart-btn";
  restartBtn.innerText = "restart";
  restartSection.appendChild(restartBtn);

  let showSummaryBtn = document.createElement("button");
  showSummaryBtn.id = "showSummary-btn";
  showSummaryBtn.innerText = "show summary";
  restartSection.appendChild(showSummaryBtn);

  let summary;
  let chart = document.querySelector(".chart");

  showSummaryBtn.addEventListener("click", () => {
  
    const blurContainer = document.querySelector(".blurContainer");

    if (phraseStats.length != 0) {
      showSummary(phraseStats);

      if(blurContainer) {
        blurContainer.style.display = "block";
      }

      summary = document.querySelector(".summary");
      showSummaryBtn = document.getElementById("showSummary-btn");
      restartSection.removeChild(showSummaryBtn);
    }

    nav.style.display = "flex";
    livesEl.style.display = "none";

    let summaryCloseBtn = document.querySelector(".summaryCloseBtn");
  
    //Close summary
    if (summaryCloseBtn) {
      summaryCloseBtn.addEventListener("click", () => {
        summary = document.querySelector(".summary");
        if (summary) {
          main.removeChild(summary);
          summary = null;
        }
        if(blurContainer) {
          blurContainer.style.display = "none";
        }
      });
    }

    if (chart) {
      contentArea.removeChild(chart);
      chart = null;
    }

  });

  restartBtn.addEventListener("click", () => {
    mainSection.innerHTML = "";
    if (summary) {
      main.removeChild(summary);
      summary = null;
    }

    if (chart) {
      contentArea.removeChild(chart);
      chart = null;
    }

    sidebarContainer.style.display = "flex";
    sidebarTabletContainer.style.display = "flex";
    footer.style.display = "block";

    if(statsContainer) {
      statsContainer.style.display = "none";
    }

    if(nav) {
      console.log("nav")
      nav.style.display = "flex";
    }
    
    
    launchFirstPage();
  });
}

function showSummary(phraseStats) {
  //const contentArea = document.querySelector(".content-area");
  const main = document.querySelector("main");
  let summary = document.querySelector(".summary");

  if (!summary) {
    summary = document.createElement("div");
    summary.classList.add("summary");
    main.appendChild(summary);
  }
  const summaryCloseBtn = document.createElement("i");
  summaryCloseBtn.classList.add("fa-solid", "fa-xmark", "summaryCloseBtn");
  summary.appendChild(summaryCloseBtn);

  const summaryH = document.createElement("h1");
  summary.appendChild(summaryH);
  summaryH.innerText = "Summary";

  const summaryList = document.createElement("ul");
  summary.appendChild(summaryList);
  for (let i = 0; i < phraseStats.length; i++) {
    const listEl = document.createElement("li");
    summaryList.appendChild(listEl);

    listEl.innerHTML = `Question ${i + 1}: <span style="font-weight: bold;">${
      phraseStats[i].phrase
    }</span>
    <p>Your answer: <span style="font-weight: bold;">${
      phraseStats[i].input
    }</span> <i class="fa-solid fa-square-check correctCheck"></i></p>
    <p class="correctAnswer">The correct answer: <span style="font-weight: bold;">${
      phraseStats[i].correctAnswer
    }</span></p>`;

    const correctCheck = listEl.querySelector(".correctCheck");
    const correctAnswer = listEl.querySelector(".correctAnswer");

    if (phraseStats[i].isCorrect) {
      correctCheck.style.display = "inline";
      correctAnswer.style.display = "none";
    } else {
      correctAnswer.style.display = "inline";
      correctCheck.style.display = "none";
    }

    if (phraseStats[i].almostCorrectCorrect) {
      correctCheck.style.display = "inline";
    }
  }
}

export function showContactSuccessMsg() {
  const contentArea = document.querySelector(".content-area");
    contentArea.innerHTML = "";

  const successDiv = document.createElement("div");
  successDiv.classList.add("successDiv");
  contentArea.appendChild(successDiv);

  const successMsg = document.createElement("h1");
  successMsg.innerHTML = "<i class='fa-regular fa-envelope'></i> Thank you for your message!";
  successDiv.appendChild(successMsg);

  const successMsgExpl = document.createElement("p");
  successMsgExpl.classList.add("successMsgExpl");
  successMsgExpl.innerText =
    "Thank you for contacting us! We'll be in touch shortly.";
    successDiv.appendChild(successMsgExpl);

}

export function showErrorMsg() {
  const contentArea = document.querySelector(".content-area");
    contentArea.innerHTML = "";

  const failDiv = document.createElement("div");
  failDiv.classList.add("successDiv");
  contentArea.appendChild(failDiv);

  const failMsg = document.createElement("h1");
  failMsg.innerText = "An error has occurred";
  failDiv.appendChild(failMsg);

  const failMsgExpl = document.createElement("p");
  failMsgExpl.classList.add("successMsgExpl");
  failMsgExpl.innerText =
    "An error has occurred. Please send an email to vladimir@lingway.net.";
    failDiv.appendChild(failMsgExpl);

}