// Tense select popup
export function buildTenseSelectPopup(userId) {
  
    const mainSection = document.querySelector(".mainSection");
    
    const container = document.createElement("div");
  
    mainSection.appendChild(container);
    container.classList.add("tenseSelectPopupContainer");
    container.style.display = "none";
  
    const currentTenseEl = document.querySelector(".currentTense");
    const currentTense = currentTenseEl.textContent;

    if(currentTense === "present (le présent de l'indicatif)") {
      createPopupOption("present", "present (le présent de l'indicatif)", "fa-solid", "fa-circle", "radio-present");
    } else {
      createPopupOption("present", "present (le présent de l'indicatif)", "fa-regular", "fa-circle", "radio-present");
    }
    
    if(currentTense === "imperfect past (l'imparfait)") {
      createPopupOption("pastImp", "imperfect past (l'imparfait)", "fa-solid", "fa-circle", "radio-pastimp");
    } else {
      createPopupOption("pastImp", "imperfect past (l'imparfait)", "fa-regular", "fa-circle", "radio-pastimp");
    }
    
    
  
    if(userId) {
      if(currentTense === "past (le passé composé)") {
        createPopupOption("pastComp", "past (le passé composé)", "fa-solid", "fa-circle", "radio-pastcomp");
      } else {
        createPopupOption("pastComp", "past (le passé composé)", "fa-regular", "fa-circle", "radio-pastcomp");
      }
      

      if(currentTense === "future (le futur simple)") {
        createPopupOption("future", "future (le futur simple)", "fa-solid", "fa-circle", "radio-future");
      } else {
        createPopupOption("future", "future (le futur simple)", "fa-regular", "fa-circle", "radio-future");
      }
      
      if(currentTense=== "present subjunctive (le subjonctif présent)") {
        createPopupOption("subjunctive", "present subjunctive (le subjonctif présent)", "fa-solid", "fa-circle", "radio-pastcomp");
      } else {
        createPopupOption("subjunctive", "present subjunctive (le subjonctif présent)", "fa-regular", "fa-circle", "radio-pastcomp");
      }
      
    } else {
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
  
  export function buildPhraseTypeSelectPopup() {
  
    const selectPhrTypeDiv = document.querySelector(".selectPhrTypeDiv");
    
    const container = document.createElement("div");
  
    selectPhrTypeDiv.appendChild(container);
    container.classList.add("selectPhrTypeContainer");
    container.style.display = "none";
  
    createPhraseNbPopupOption("easy", "easy", "fa-chess-pawn");
    createPhraseNbPopupOption("medium", "medium", "fa-chess-knight");
    createPhraseNbPopupOption("hard", "hard", "fa-chess-queen");
  
  }
  
function createPhraseNbPopupOption(divClass, level, chessIcon) {
    const container = document.querySelector(".selectPhrTypeContainer");
  
    const div = document.createElement("div");
    div.classList.add(divClass);

    const icon = document.createElement("i");
    icon.classList.add("fa-solid", chessIcon);
    div.appendChild(icon);
  
    const label = document.createElement("p");
  
    label.textContent = level;
    
    div.appendChild(label);
    container.appendChild(div);
  }