// Tense select popup
export function buildTenseSelectPopup(userId) {
  
    const mainSection = document.querySelector(".mainSection");
    
    const container = document.createElement("div");
  
    mainSection.appendChild(container);
    container.classList.add("tenseSelectPopupContainer");
    container.style.display = "none";
  
    
      createPopupOption("present", "present (le présent de l'indicatif)", "fa-solid", "fa-circle", "radio-present");
      createPopupOption("pastImp", "imperfect past (l'imparfait)", "fa-regular", "fa-circle", "radio-pastimp");
      //createPopupOption("pastComp", "past (le passé composé)", "fa-regular", "fa-circle", "radio-pastcomp");
  
      if(userId) {
      //createPopupOption("pastImp", "imperfect past (l'imparfait)", "fa-regular", "fa-circle", "radio-pastimp");
      createPopupOption("pastComp", "past (le passé composé)", "fa-regular", "fa-circle", "radio-pastcomp");
      createPopupOption("future", "future (le futur simple)", "fa-regular", "fa-circle", "radio-future");
      createPopupOption("subjunctive", "present subjunctive (le subjonctif présent)", "fa-regular", "fa-circle", "radio-pastcomp");
    } else {
      //createPopupOption("pastImp", "imperfect past (l'imparfait)", "fa-solid", "fa-lock", "lock-pastimp");
      createPopupOption("pastComp", "past (le passé composé)", "fa-solid", "fa-lock", "lock-pastcomp");
      createPopupOption("future", "future (le futur simple)", "fa-solid", "fa-lock", "lock-future");
      createPopupOption("subjunctive", "present subjunctive (le subjonctif présent)", "fa-solid", "fa-lock", "lock-subjunctive");
    }
    
    
  
  }
  
  function createPopupOption(divClass, tense, radioClass1, radioClass2, radioClass3) {
    const container = document.querySelector(".tenseSelectPopupContainer");
  
    const div = document.createElement("div");
    div.classList.add(divClass);
  
    const label = document.createElement("p");
  
    label.textContent = tense;
    
    const radioBtn = document.createElement("i");
    radioBtn.classList.add(radioClass1, radioClass2, radioClass3);
  
    div.appendChild(label);
    div.appendChild(radioBtn);
    container.appendChild(div);
  }
  
  export function buildPhraseNbSelectPopup() {
  
    const selectNbPhrasesDiv = document.querySelector(".selectNbPhrasesDiv");
    
    const container = document.createElement("div");
  
    selectNbPhrasesDiv.appendChild(container);
    container.classList.add("selectNbPhrasesContainer");
    container.style.display = "none";
  
    createPhraseNbPopupOption("phrNb5", "5");
    createPhraseNbPopupOption("phrNb10", "10");
    //createPhraseNbPopupOption("phrNb15", "15");
  
  }
  
function createPhraseNbPopupOption(divClass, number) {
    const container = document.querySelector(".selectNbPhrasesContainer");
  
    const div = document.createElement("div");
    div.classList.add(divClass);
  
    const label = document.createElement("p");
  
    label.textContent = number;
    
    
  
    div.appendChild(label);
    container.appendChild(div);
  }