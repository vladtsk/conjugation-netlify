// A popup with information triggered when a user makes a mistake and clicks "learn more"

import {
  getPresentMessages,
  getPastcompMessages,
  getPastimpMessages,
  getFutureMessages,
  getSubjunctiveMessages
} from "./messages.js";

import {
  showPresentTenseMessage,
  showPastCompMessage,
  showPastImpTenseMessage,
  showFutureTenseMessage,
  showSubjunctiveMessage
} from "./selectMessages.js";

export function showInfoPopup(verbObj, tenseShort, answerType) {
  let messages;
  const verb = verbObj.verb;

  // Selecting the "Learn more section"
  const learnMoreSection = document.querySelector(".learnMore");
  // Selecting the popup section
  const infoPopupSection = document.querySelector(".infoPopupSection");

  learnMoreSection.addEventListener("click", () => {
    learnMoreSection.style.display = "none";
    infoPopupSection.style.display = "none";
    infoPopupSection.innerHTML = `<i class='fa-solid fa-xmark popupInfo-close'></i>`;
    const popupClose = document.querySelector(".popupInfo-close");

    const messageDiv = document.createElement("div");
    messageDiv.classList.add("messageDiv");
    infoPopupSection.appendChild(messageDiv);

    // Getting a message depending on the tense
    switch (tenseShort) {
      case "present":
        messages = getPresentMessages(verb);

        //Show a message for the Present tense
        showPresentTenseMessage(verbObj, answerType, messages);
        break;

      case "pastcomp":
        messages = getPastcompMessages(verb);

        //Show a message for the Passé Composé
        showPastCompMessage(verbObj, answerType, messages);
        break;

      case "pastimp":
        messages = getPastimpMessages();

         //Show a message for the imperfect tense
         showPastImpTenseMessage(verbObj, messages);
        break;

      case "future":
        messages = getFutureMessages(verb);

        //Show a message for the future tense
        showFutureTenseMessage(verbObj, messages);
        break;

      case "subjunctive":
        messages = getSubjunctiveMessages(verb);

         //Show a message for the present subjunctive tense
         showSubjunctiveMessage(verbObj, messages);
         break;

    }

    if (popupClose) {
      // Closing the popup
      popupClose.addEventListener("click", () => {
        infoPopupSection.style.display = "none";
        infoPopupSection.innerHTML = "";
      });
    }
  });
}
