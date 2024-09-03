import { playAudio, playCorrect, playIncorrect } from "./playAudio.js";

export function handleCorrectAnswer(phraseDivCorrect, fullPhrase) {
  const phraseSection = document.querySelector(".phrase-section"); // the phrase display section
  const inputArea = document.querySelector(".type-section input"); // the input area
  const msgArea = document.querySelector(".msg-section"); // the message display area

  phraseSection.textContent = "";
  phraseSection.appendChild(phraseDivCorrect);
  const speaker = document.getElementById("speaker"); // the speaker icon

  const soundOn = JSON.parse(localStorage.getItem("soundOn"));
  if (soundOn) {
    playCorrect();
  }

  //inputArea.style.color = "#269e52";
  inputArea.classList.add("correct-answer");

  msgArea.innerText = "Correct!";

  if (speaker) {
    speaker.addEventListener("click", () => {
      playAudio(fullPhrase);
    });
  }
}

export function handleAlmostCorrectAnswer(phraseDivCorrect, fullPhrase) {
  const phraseSection = document.querySelector(".phrase-section"); // the phrase section
  const inputArea = document.querySelector(".type-section input"); // the input area
  const msgArea = document.querySelector(".msg-section"); // the message display area
  const learnMoreSection = document.querySelector(".learnMore"); // 'learn more' section

  phraseSection.textContent = "";
  phraseSection.appendChild(phraseDivCorrect);
  const speaker = document.getElementById("speaker");

  const soundOn = JSON.parse(localStorage.getItem("soundOn"));
  if (soundOn) {
    playCorrect();
  }

  //inputArea.style.color = "#d96e38";
  inputArea.classList.add("almost-correct-answer");

  msgArea.innerHTML = "<p class='almost'>Almost correct.</p>";

  learnMoreSection.style.display = "block";

  if (speaker) {
    speaker.addEventListener("click", () => {
      playAudio(fullPhrase);
    });
  }
}

export function handleIncorrectAnswer(
  phraseDiv,
  fullPhrase,
  correctAnswer,
  lives
) {
  const phraseSection = document.querySelector(".phrase-section"); // the phrase section
  const inputArea = document.querySelector(".type-section input"); // the input area
  const msgArea = document.querySelector(".msg-section"); // the message display area
  const learnMoreSection = document.querySelector(".learnMore"); // 'learn more' section
  const livesPElement = document.querySelector(".lives p");

  phraseSection.textContent = "";
  phraseSection.appendChild(phraseDiv);
  const speaker = document.getElementById("speaker");

  const soundOn = JSON.parse(localStorage.getItem("soundOn"));
  console.log(soundOn);
  if (soundOn) {
    playIncorrect();
  }

  if (speaker) {
    speaker.addEventListener("click", () => {
      playAudio(fullPhrase);
    });
  }
  //inputArea.style.color = "#ef233c";
  inputArea.classList.add("incorrect-answer");

  msgArea.innerText = `Incorrect. The correct answer is: "${correctAnswer}"`;

  learnMoreSection.style.display = "block";

  if (livesPElement) {
    livesPElement.textContent = lives;
  } else {
    console.error("Lives element not found in HandleIncorrectAnswer");
  }
}

export function handleCorrectAnswerQuiz(phraseDivCorrect, fullPhrase) {
  const phraseSection = document.querySelector(".phrase-section"); // the phrase display section
  const selectedOption = document.querySelector(".selectedOption"); // the selected option
  const msgArea = document.querySelector(".msg-section"); // the message display area

  phraseSection.textContent = "";
  phraseSection.appendChild(phraseDivCorrect);
  const speaker = document.getElementById("speaker"); // the speaker icon

  const soundOn = JSON.parse(localStorage.getItem("soundOn"));
  console.log(soundOn);
  if (soundOn) {
    playCorrect();
  }

  if (selectedOption) {
    selectedOption.style.color = "#269e52";
  }

  msgArea.innerText = "Correct!";

  if (speaker) {
    speaker.addEventListener("click", () => {
      playAudio(fullPhrase);
    });
  }
}

export function handleIncorrectAnswerQuiz(
  phraseDiv,
  fullPhrase,
  correctAnswer,
  lives
) {
  const phraseSection = document.querySelector(".phrase-section"); // the phrase display section

  const selectedOption = document.querySelector(".selectedOption"); // the selected option
  const msgArea = document.querySelector(".msg-section"); // the message display area
  const correctOption = document.querySelector(".correct-option"); // the correct option
  const livesPElement = document.querySelector(".lives p");

  phraseSection.textContent = "";
  phraseSection.appendChild(phraseDiv);
  const speaker = document.getElementById("speaker");

  const soundOn = JSON.parse(localStorage.getItem("soundOn"));
  if (soundOn) {
    playIncorrect();
  }

  if (speaker) {
    speaker.addEventListener("click", () => {
      playAudio(fullPhrase);
    });
  }

  if (selectedOption) {
    selectedOption.style.color = "#ef233c";
  }

  if (correctOption) {
    const correctTick = document.createElement("i");
    correctTick.classList.add("fa-solid", "fa-circle-check");
    correctOption.appendChild(correctTick);
  }

  //The correct answer is: "${correctAnswer}"

  msgArea.innerText = `Incorrect`;

  //learnMoreSection.style.display = "block";

  if (livesPElement) {
    livesPElement.textContent = lives;
  } else {
    console.error("Lives element not found in HandleIncorrectAnswerQuiz");
  }
}
