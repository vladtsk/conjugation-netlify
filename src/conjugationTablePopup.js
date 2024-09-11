// A function showing a table of conjugations
export function showConjugations(verbObj, verb0, conjugSection, jsonConjug) {
  console.log(verbObj, verb0, conjugSection, jsonConjug);

  try {
    let popupMsg = jsonConjug.verbs[`${verbObj.verb}`][`${verb0.tenseShort}`];
    if (verbObj.aux && verbObj.aux === "être" && verbObj.twoAux) {
      popupMsg = jsonConjug.verbs[`${verbObj.verb}`]["pastcompEtre"];
    }

    let popupMsgValues = Object.values(popupMsg);
    conjugSection.innerHTML = `<div class="popup-icons"><i class="fa-regular fa-lightbulb bulb-animation" 
    style="color: #ef233c;"></i><i class="fa-solid fa-xmark popup-close"></i></div>`;

    for (let i = 0; i < popupMsgValues.length; i++) {
      conjugSection.innerHTML += `<p>${popupMsgValues[i]}</p>`;
    }
    conjugSection.style.display = "block";
  } catch {
    console.log("Verb " + verbObj.verb + " is not found in database ");
  }
}
