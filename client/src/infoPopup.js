// A popup with information triggered when a user makes a mistake and clicks "learn more"

import { getMessages } from "./messages.js";

export function showInfoPopup(verbObj, answerType) {
  const verb = verbObj.verb;
  const group = verbObj.group;

  const messages = getMessages(verb);

  // Selectng the "Leaarn more section"
  const learnMoreSection = document.querySelector(".learnMore");
  // Selecting the popup section
  const infoPopupSection = document.querySelector(".infoPopupSection");

  learnMoreSection.addEventListener("click", () => {
    learnMoreSection.style.display = "none";
    infoPopupSection.style.display = "none";
    infoPopupSection.innerHTML = `<i class='fa-solid fa-xmark popupInfo-close'></i>`;
    const popupClose = document.querySelector(".popupInfo-close");

    const messageDiv = document.createElement("div");
    infoPopupSection.appendChild(messageDiv);
    //message = messages.group[1].regular.reflexive;

    // The case of regular 1st group verbs
    if (group === 1 && !verbObj.irregular && !verbObj.reflexive) {
      messageDiv.innerHTML =
        messages.group[1].regular.incorrect.nonReflexive.message;
      infoPopupSection.style.display = "block";
    }

    // The case of regular reflexive 1st group verbs
    if (group === 1 && !verbObj.irregular && verbObj.reflexive) {
      messageDiv.innerHTML =
        messages.group[1].regular.incorrect.reflexive.message;
      infoPopupSection.style.display = "block";
    }

    // The case of irregular 1st group verbs with a spelling change ('e' or 'é')
    if (
      verbObj.irregular &&
      group === 1 &&
      !verbObj.reflexive &&
      verbObj.spellingChange === "accent"
    ) {
      messageDiv.innerHTML =
        messages.group[1].irregular.nonReflexive.spellingChange.message;
      infoPopupSection.style.display = "block";
    }

    // The case of irregular reflexive 1st group verbs with a spelling change ('e' or 'é')
    if (
      verbObj.irregular &&
      group === 1 &&
      verbObj.reflexive &&
      verbObj.spellingChange === "accent"
    ) {
      messageDiv.innerHTML =
        messages.group[1].irregular.reflexive.spellingChange.message;
      infoPopupSection.style.display = "block";
    }

    // The case when a user forgets an accent mark that is the same as in the infinitive form,
    //which is considered as 'almost correct'.

    if (!verbObj.irregular && answerType === "almostWoAccent") {
      messageDiv.innerHTML = messages.group[1].regular.almost.message;
      infoPopupSection.style.display = "block";
    }

    // The case of 2nd group verbs
    if (group === 2) {
      messageDiv.innerHTML = messages.group[2].message;
      infoPopupSection.style.display = "block";
    }

    // 3rd group verbs
    if (group === 3 && verbObj.pattern === "lire") {
      messageDiv.innerHTML = messages.group[3].pattern.lire.message;
      infoPopupSection.style.display = "block";
    }

    if (group === 3 && verbObj.pattern === "mettre") {
      messageDiv.innerHTML = messages.group[3].pattern.mettre.message;
      infoPopupSection.style.display = "block";
    }

    if (group === 3 && verbObj.pattern === "savoir") {
      messageDiv.innerHTML = messages.group[3].pattern.savoir.message;
      infoPopupSection.style.display = "block";
    }

    if (group === 3 && verbObj.pattern === "voir") {
      messageDiv.innerHTML = messages.group[3].pattern.voir.message;
      infoPopupSection.style.display = "block";
    }

    if (group === 3 && verbObj.pattern === "écrire") {
      messageDiv.innerHTML = messages.group[3].pattern.ecrire.message;
      infoPopupSection.style.display = "block";
    }

    if (group === 3 && verbObj.pattern === "vouloir") {
      messageDiv.innerHTML = messages.group[3].pattern.vouloir.message;
      infoPopupSection.style.display = "block";
    }

    if (group === 3 && verbObj.pattern === "attendre") {
      messageDiv.innerHTML = messages.group[3].pattern.attendre.message;
      infoPopupSection.style.display = "block";
    }

    if (group === 3 && verbObj.pattern === "devoir") {
      messageDiv.innerHTML = messages.group[3].pattern.devoir.message;
      infoPopupSection.style.display = "block";
    }

    if (group === 3 && verbObj.pattern === "prendre") {
      messageDiv.innerHTML = messages.group[3].pattern.prendre.message;
      infoPopupSection.style.display = "block";
    }

    if (group === 3 && verbObj.pattern === "boire") {
      messageDiv.innerHTML = messages.group[3].pattern.boire.message;
      infoPopupSection.style.display = "block";
    }

    if (group === 3 && verbObj.pattern === "partir") {
      messageDiv.innerHTML = messages.group[3].pattern.partir.message;
      infoPopupSection.style.display = "block";
    }

    if (group === 3 && verbObj.pattern === "vivre") {
      messageDiv.innerHTML = messages.group[3].pattern.vivre.message;
      infoPopupSection.style.display = "block";
    }

    if (group === 3 && verbObj.pattern === "venir") {
      messageDiv.innerHTML = messages.group[3].pattern.venir.message;
      infoPopupSection.style.display = "block";
    }

    if (group === "irregular") {
      messageDiv.innerHTML = messages.group.irregular.message;
      infoPopupSection.style.display = "block";
    }

    // Closing the popup
    if (popupClose) {
      popupClose.addEventListener("click", () => {
        infoPopupSection.style.display = "none";
        infoPopupSection.innerHTML = "";
      });
    }

    /*
    if (group === 1 && !verbObj.irregular && !verbObj.reflexive)

    // The case of regular 1st group verbs 
    if (!verbObj.irregular && group === 1 && !verbObj.reflexive) {
      const message = document.createElement("div");
      message.innerHTML = `The verb <b>${verb}</b> follows the regular "-er" conjugation pattern.`;
      infoPopupSection.appendChild(message);
      infoPopupSection.style.display = "block";
    }

    // The case of regular reflexive 1st group verbs 
    if (!verbObj.irregular && group === 1 && verbObj.reflexive) {
      const message = document.createElement("div");
      message.innerHTML = `<p>The verb <b>${verb}</b> follows the regular "-er" conjugation pattern.</p> 
      <p>It's also a reflexive verb, so the reflexive pronoun 'se' 
      should change depending on the subject: "Je me...", "tu te...", "il se...", etc. </p>`;
      infoPopupSection.appendChild(message);
      infoPopupSection.style.display = "block";
    }

    // The case of irregular 1st group verbs with a spelling change ('e' or 'é')  
    if (
      verbObj.irregular &&
      group === 1 &&
      !verbObj.reflexive &&
      verbObj.answerWoAccent
    ) {
      const message = document.createElement("div");
      message.innerHTML = `<p>The verb <b>${verb}</b> is one of the verbs that follow the regular "-er" 
      conjugation pattern with spelling changes: 'e' or 'é' => 'è'.</p> 
      <p>The conjugations of 'nous' and 'vous' remain regular. </p>`;
      infoPopupSection.appendChild(message);
      infoPopupSection.style.display = "block";
    }

    // The case of irregular reflexive 1st group verbs with a spelling change ('e' or 'é') 
    if (
      verbObj.irregular &&
      group === 1 &&
      verbObj.reflexive &&
      verbObj.answerWoAccent
    ) {
      const message = document.createElement("div");
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
      const message = document.createElement("div");
      message.innerHTML = `<p>Don't forget the accent marks (é, è, û, etc.). In this case, the accent remains the same as in the infinitive form.</p>
      <p>You can use the buttons above the text field to type letters with an accent mark.</p>`;
      infoPopupSection.appendChild(message);
      infoPopupSection.style.display = "block";
    }

    // The case of 2nd group verbs 
    if (group === 2) {
      const message = document.createElement("div");
      message.innerHTML = `The verb <b>${verb}</b> follows the same pattern as the verbs <i>choisir</i>, <i>finir</i>,
      <i>grandir</i> with the following endings: '-is', '-is', '-it', '-issons', '-issez', '-issent'.`;
      infoPopupSection.appendChild(message);
      infoPopupSection.style.display = "block";
    }

    // 3rd group verbs 
    if (group === 3 && verbObj.pattern === "lire") {
      const message = document.createElement("div");
      message.innerHTML = `<p>The verb <b>${verb}</b> follows the same pattern as the verbs <i>conduire</i>, <i>dire</i>,
      <i>lire</i> with the following endings: '-s', '-s', '-t', '-ons', '-ez', '-ent'.</p>
      <p>The exception is the 'vous' form of <i>'dire'</i>: vous <b>di<span class="red">tes</span></b></p>.`;

      infoPopupSection.appendChild(message);
      infoPopupSection.style.display = "block";
    }

    if (group === 3 && verbObj.pattern === "mettre") {
      const message = document.createElement("div");
      message.innerHTML = `<p>The verb <b>${verb}</b> follows the same pattern as the verbs <i>battre</i>, <i>promettre</i>,
      <i>mettre</i> with the following endings: '-ts', '-ts', '-t', '-ons', '-ez', '-ent'.</p>`;

      infoPopupSection.appendChild(message);
      infoPopupSection.style.display = "block";
    }

    if (group === 3 && verbObj.pattern === "savoir") {
      const message = document.createElement("div");
      message.innerHTML = `<p>The verb <b>${verb}</b> has the following endings in the present tense: 
      '-s', '-s', '-t', '-ons', '-ez', '-ent'.</p> <p>However, it's still quite irregular as it doesn't exactly
      follow any common conjugation pattern.</p>`;

      infoPopupSection.appendChild(message);
      infoPopupSection.style.display = "block";
    }

    if (group === 3 && verbObj.pattern === "voir") {
      const message = document.createElement("div");
      message.innerHTML = `<p>The verb <b>${verb}</b> has the following endings in the present tense: 
      '-s', '-s', '-t', '-ons', '-ez', '-ent'.</p> <p>However, it's still quite irregular as it doesn't exactly
      follow any common conjugation pattern.</p>`;

      infoPopupSection.appendChild(message);
      infoPopupSection.style.display = "block";
    }

    if (group === 3 && verbObj.pattern === "écrire") {
      const message = document.createElement("div");
      message.innerHTML = `<p>The verb <b>${verb}</b> follows the same pattern as the verbs <i>(s')inscrire</i>, <i>décrire</i>,
      <i>écrire</i> with the following endings: '-s', '-s', '-t', '-ons', '-ez', '-ent'.</p>
      <p>Note that the 'nous', 'vous' and 'ils/elles' conjugations have a <b>'-v'</b>: 
      <i>vous écri<span class='red'>v</span>ez</i>, <i>elles s'inscri<span class='red'>v</span>ent</i>, etc.`;

      infoPopupSection.appendChild(message);
      infoPopupSection.style.display = "block";
    }

    if (group === 3 && verbObj.pattern === "vouloir") {
      const message = document.createElement("div");
      message.innerHTML = `<p>The verbs <b>pouvoir</b> and <b>vouloir</b> follow the same pattern
    with the following endings:  -x, -x, -t, -ons, -ez, -ent.</p>`;

      infoPopupSection.appendChild(message);
      infoPopupSection.style.display = "block";
    }

    if (group === 3 && verbObj.pattern === "attendre") {
      const message = document.createElement("div");
      message.innerHTML = `<p>The verb <b>${verb}</b> follows the same pattern as the verbs <i>répondre</i>, <i>attendre</i>,
      <i>entendre</i> with the following endings: -ds, -ds, -d, -ons, -ez, -ent.</p>`;

      infoPopupSection.appendChild(message);
      infoPopupSection.style.display = "block";
    }

    if (group === 3 && verbObj.pattern === "devoir") {
      const message = document.createElement("div");
      message.innerHTML = `<p>The verbs <b>recevoir</b> and <b>devoir</b> follow the same pattern       
      with the following endings in the present tense: 
      '-s', '-s', '-t', '-ons', '-ez', '-ent'.</p> <p>Note that in the verb 'recevoir', 'c' changes to '<b>ç</b>'
      for the <i>je</i>, <i>tu</i> and <i>il/elle/on</i> conjugations.</p>`;

      infoPopupSection.appendChild(message);
      infoPopupSection.style.display = "block";
    }

    if (group === 3 && verbObj.pattern === "prendre") {
      const message = document.createElement("div");
      message.innerHTML = `<p>The verb <b>${verb}</b> follows the same pattern as the verbs <i>apprendre</i>, <i>comprendre</i>,
      <i>prendre</i> with the following endings: -ds, -ds, -d, -ons, -ez, -ent.</p>`;

      infoPopupSection.appendChild(message);
      infoPopupSection.style.display = "block";
    }

    if (group === 3 && verbObj.pattern === "boire") {
      const message = document.createElement("div");
      message.innerHTML = `<p>The verb <b>${verb}</b> has the following endings in the present tense: 
      '-s', '-s', '-t', '-ons', '-ez', '-ent'.</p> <p>However, it's still quite irregular as it doesn't exactly
      follow any common conjugation pattern.</p>`;

      infoPopupSection.appendChild(message);
      infoPopupSection.style.display = "block";
    }

    if (group === 3 && verbObj.pattern === "partir") {
      const message = document.createElement("div");
      message.innerHTML = `<p>The verb <b>${verb}</b> follows the same pattern as the verbs <i>sentir</i>, <i>mentir</i>,
      <i>sortir</i> with the following endings: '-s', '-s', '-t', '-ons', '-ez', '-ent'.</p>`;

      infoPopupSection.appendChild(message);
      infoPopupSection.style.display = "block";
    }

    if (group === 3 && verbObj.pattern === "vivre") {
      const message = document.createElement("div");
      message.innerHTML = `<p>The verbs <b>vivre</b> and <b>suivre</b> follow the same conjugation pattern
      with the following endings: '-s', '-s', '-t', '-ons', '-ez', '-ent'.</p>
      <p>Note that the 'je' conjugation of 'suivre' in the present tense is 'je suis'.</p>`;

      infoPopupSection.appendChild(message);
      infoPopupSection.style.display = "block";
    }

    if (group === 3 && verbObj.pattern === "venir") {
      const message = document.createElement("div");
      message.innerHTML = `<p>The verb <b>${verb}</b> follows the same pattern as the verbs <i>tenir</i>, <i>venir</i>,
      <i>devenir</i> with the following endings: '-s', '-s', '-t', '-ons', '-ez', '-ent'.</p>`;

      infoPopupSection.appendChild(message);
      infoPopupSection.style.display = "block";
    }

    if (group === "irregular") {
      const message = document.createElement("div");
      message.innerHTML = `<p>The verb <b>${verb}</b> is an irregular verb. It doesn't follow a common pattern.</p>`;

      infoPopupSection.appendChild(message);
      infoPopupSection.style.display = "block";
    }

    // Closing the popup 
    if (popupClose) {
      popupClose.addEventListener("click", () => {
        infoPopupSection.style.display = "none";
        infoPopupSection.innerHTML = "";
      });
    }
    */
  });
}
