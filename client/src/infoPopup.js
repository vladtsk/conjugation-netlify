// A popup with information triggered when a user makes a mistake and clicks "learn more"

export function showInfoPopup(verbObj, answerType) {
  const verb = verbObj.verb;
  const group = verbObj.group;

  // Selectng the "Leaarn more section"
  const learnMoreSection = document.querySelector(".learnMore");
  // Selecting the popup section
  const infoPopupSection = document.querySelector(".infoPopupSection");

  learnMoreSection.addEventListener("click", () => {
    learnMoreSection.style.display = "none";
    infoPopupSection.style.display = "none";
    infoPopupSection.innerHTML = `<i class='fa-solid fa-xmark popupInfo-close'></i>`;
    const popupClose = document.querySelector(".popupInfo-close");

    /* The case of regular 1st group verbs */
    if (!verbObj.irregular && group === 1 && !verbObj.reflexive) {
      console.log("group 1");
      const message = document.createElement("p");
      message.innerHTML = `The verb <b>${verb}</b> follows the regular "-er" conjugation pattern.`;
      infoPopupSection.appendChild(message);
      infoPopupSection.style.display = "block";
    }

    /* The case of regular reflexive 1st group verbs */
    if (!verbObj.irregular && group === 1 && verbObj.reflexive) {
      console.log("group 1");
      const message = document.createElement("p");
      message.innerHTML = `<p>The verb <b>${verb}</b> follows the regular "-er" conjugation pattern.</p> 
      <p>However, it's a reflexive verb, so the reflexive pronoun 'se' 
      should change depending on the subject: "Je me...", "tu te...", "il se...", etc. </p>`;
      infoPopupSection.appendChild(message);
      infoPopupSection.style.display = "block";
    }

    /* The case of irregular 1st group verbs with a spelling change ('e' or 'é')  */
    if (
      verbObj.irregular &&
      group === 1 &&
      !verbObj.reflexive &&
      verbObj.answerWoAccent
    ) {
      const message = document.createElement("p");
      message.innerHTML = `<p>The verb <b>${verb}</b> is one of the verbs that follow the regular "-er" 
      conjugation pattern with spelling changes: 'e' or 'é' => 'è'.</p> 
      <p>The conjugations of 'nous' and 'vous' remain regular. </p>`;
      infoPopupSection.appendChild(message);
      infoPopupSection.style.display = "block";
    }

    /* The case of irregular reflexive 1st group verbs with a spelling change ('e' or 'é') */
    if (
      verbObj.irregular &&
      group === 1 &&
      verbObj.reflexive &&
      verbObj.answerWoAccent
    ) {
      const message = document.createElement("p");
      message.innerHTML = `<p>The verb <b>${verb}</b> is one of the verbs that follow the regular "-er" 
      conjugation pattern with spelling changes: 'e' or 'é' => 'è'.</p> 
      <p>The conjugations of 'nous' and 'vous' remain regular. </p>
      <p>It's also a reflexive verb, so the reflexive pronoun 'se' 
      should change depending on the subject: "Je me...", "tu te...", "il se...", etc. </p>`;
      infoPopupSection.appendChild(message);
      infoPopupSection.style.display = "block";
    }

    // The case when a user forgets an accent mark that is the same as in the infinitive form,
    //which is considered as 'almost correct'.

    if (!verbObj.irregular && answerType === "almostWoAccent") {
      console.log("almost");
      const message = document.createElement("div");
      message.innerHTML = `<p>Don't forget the accent marks (é, è, û, etc.). In this case, the accent remains the same as in the infinitive form.</p>
      <p>You can use the buttons above the text field to type letters with an accent mark.</p>`;
      infoPopupSection.appendChild(message);
      infoPopupSection.style.display = "block";
    }

    /* The case of 2nd group verbs */
    if (group === 2) {
      const message = document.createElement("p");
      message.innerHTML = `The verb <b>${verb}</b> follows the same pattern as the verbs <i>choisir</i>, <i>finir</i>,
      <i>grandir</i> with the following endings: '-is', '-is', '-it', '-issons', '-issez', '-issent'.`;
      infoPopupSection.appendChild(message);
      infoPopupSection.style.display = "block";
    }

    /* Closing the popup */
    if (popupClose) {
      popupClose.addEventListener("click", () => {
        infoPopupSection.style.display = "none";
        infoPopupSection.innerHTML = "";
      });
    }
  });
}
