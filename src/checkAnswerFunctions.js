import { playAudio, playCorrect, playIncorrect } from "./playAudio.js";

export function handleCorrectAnswer(phraseDivCorrect, fullPhrase) {
    
    const phraseDisplay = document.querySelector(".phrase-section p"); // the phrase display section
    const inputArea = document.querySelector(".type-section input"); // the input area
    const msgArea = document.querySelector(".msg-section"); // the message display area

    phraseDisplay.appendChild(phraseDivCorrect);
    const speaker = document.getElementById("speaker"); // the speaker icon
      playCorrect();
    
      inputArea.style.color = "#169c47";
      
      msgArea.innerText = "Correct!";
      
      if (speaker) {
        speaker.addEventListener("click", () => {
          playAudio(fullPhrase);
        });
      }

}

export function handleAlmostCorrectAnswer(phraseDivCorrect, fullPhrase) {
    
    const phraseDisplay = document.querySelector(".phrase-section p"); // the phrase display section
    const inputArea = document.querySelector(".type-section input"); // the input area
    const msgArea = document.querySelector(".msg-section"); // the message display area
    const learnMoreSection = document.querySelector(".learnMore"); // 'learn more' section
    
    phraseDisplay.appendChild(phraseDivCorrect);
      const speaker = document.getElementById("speaker");
      playCorrect();

      inputArea.style.color = "#d96e38";

      msgArea.innerHTML = "<p class='almost'>Almost correct.</p>";
      
      learnMoreSection.style.display = "block";

      if (speaker) {
        speaker.addEventListener("click", () => {
          playAudio(fullPhrase);
        });
      }

}

export function handleIncorrectAnswer(phraseDiv, fullPhrase, correctAnswer, lives) {
    
    const phraseDisplay = document.querySelector(".phrase-section p"); // the phrase display section
    const inputArea = document.querySelector(".type-section input"); // the input area
    const msgArea = document.querySelector(".msg-section"); // the message display area
    const learnMoreSection = document.querySelector(".learnMore"); // 'learn more' section
    const livesPElement = document.querySelector(".lives p");
    
    phraseDisplay.appendChild(phraseDiv);
      const speaker = document.getElementById("speaker");
      playIncorrect();


      if (speaker) {
        speaker.addEventListener("click", () => {
          playAudio(fullPhrase);
        });
      }
      inputArea.style.color = "#ef233c";
      msgArea.innerText = `Incorrect. The correct answer is: "${correctAnswer}"`;

      learnMoreSection.style.display = "block";

      if(livesPElement) {
        livesPElement.textContent = lives;
      } else {
        console.error("Lives element not found in HandleIncorrectAnswer");
      }
  }
      
