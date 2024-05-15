// A popup with information triggered when a user makes a mistake and clicks "learn more"

import {
  getPresentMessages,
  getPastcompMessages,
  getPastimpMessages,
} from "./messages.js";

import {
  showPresentTenseMessage,
  showPastCompMessage,
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
        messages = getPastimpMessages(verb);
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
