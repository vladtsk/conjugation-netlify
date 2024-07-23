import { buildTenseSelectPopup, buildPhraseTypeSelectPopup  } from "./firstPageSelectPopups.js";
//import { hideLoader } from "./loader.js";

// Building the first page
export async function buildFirstPage(userId) {
    

    const contentArea = document.querySelector(".content-area");
    contentArea.innerHTML = "";
  
    // Section containing the main element
  
    let mainSection = document.querySelector(".mainSection");
    if (!mainSection) {
      mainSection = document.createElement("div");
      mainSection.classList.add("mainSection");
      contentArea.appendChild(mainSection);
    }
  
    // Welcome section
    const welcomeDiv = document.createElement("div");
    welcomeDiv.classList.add("welcome");
  
    mainSection.appendChild(welcomeDiv);
  
    const welcomeP = document.createElement("p");
    welcomeP.innerText = "Welcome to Conjugation Master!";
    welcomeDiv.appendChild(welcomeP);
  
    // Tense selection section
    const tenseSelect = document.createElement("div");
    tenseSelect.classList.add("tense-section");
    mainSection.appendChild(tenseSelect);
  
    const labelTense = document.createElement("label");
    labelTense.htmlFor = "tense";
    labelTense.innerText = "Choose a tense you'd like to practise:";
    tenseSelect.appendChild(labelTense);
  
    const selectDiv = document.createElement("div");
    selectDiv.classList.add("selectDiv");
    tenseSelect.appendChild(selectDiv);
  
    const currentTense = document.createElement("p");
    currentTense.classList.add("currentTense");
    selectDiv.appendChild(currentTense);
  
    const caretIcon = document.createElement("i");
    const storedTense = localStorage.getItem("selectedTense");
    caretIcon.classList.add("fa-solid", "fa-caret-down");
    selectDiv.appendChild(caretIcon);
    currentTense.textContent = userId && storedTense ? storedTense : "present (le présent de l'indicatif)";
  
  
    // The "level of difficulty (type of phrases)" section
    const selectPhrTypeSection = document.createElement("div");
    selectPhrTypeSection.classList.add("phrase-type");
    mainSection.appendChild(selectPhrTypeSection);
  
    const selectPhrTypeLabel = document.createElement("div");
    selectPhrTypeLabel.innerText = "Choose a level of difficulty:";
    selectPhrTypeSection.appendChild(selectPhrTypeLabel);
  
    const selectPhrTypeDiv = document.createElement("div");
    selectPhrTypeDiv.classList.add("selectPhrTypeDiv");
    selectPhrTypeSection.appendChild(selectPhrTypeDiv);
  
  
    const selectPhrType = document.createElement("p");
    selectPhrType.id = "phraseType";
    selectPhrTypeDiv.appendChild(selectPhrType);
    selectPhrType.textContent = localStorage.getItem("phraseType") || "medium";
  
    const caretIcon1 = document.createElement("i");
    caretIcon1.classList.add("fa-solid", "fa-caret-down");
    selectPhrTypeDiv.appendChild(caretIcon1);
  
    buildPhraseTypeSelectPopup();
    const selectPhrTypeContainer = document.querySelector(".selectPhrTypeContainer");
  
    selectPhrTypeDiv.addEventListener("click", (event)=>{

      //const selectPhrTypeContainer = document.querySelector(".selectPhrTypeContainer");
      
      if(selectPhrTypeContainer) {
        selectPhrTypeContainer.style.display = "block";
      }
      event.stopPropagation();
    })
  
    const typeOptions = document.querySelectorAll(".selectPhrTypeContainer div");
    
  
    typeOptions.forEach(nb => {
      nb.addEventListener("click", (event)=> {
        event.stopPropagation(); 
        selectPhrType.textContent = nb.textContent;
        
        selectPhrTypeContainer.style.display = "none";
      })
    })
  
    
  
  
    // Start button
  
    const startSection = document.createElement("div");
    startSection.classList.add("start-section");
    mainSection.appendChild(startSection);
  
    const startBtn = document.createElement("button");
    startBtn.id = "start-btn";
    startBtn.innerText = "Start now!";
    startSection.appendChild(startBtn);

    // 'First time here button'
    const firstTimeDiv = document.createElement("div");
    firstTimeDiv.classList.add("firstTimeDiv");
    firstTimeDiv.innerHTML = "First time here? <p><span class='firstTimeBtn'>Click here</span> to learn how to use the app!</p>";
    mainSection.appendChild(firstTimeDiv);

    const rulesSection = document.querySelector(".rulesSection");
    const blurContainer = document.querySelector(".blurContainer"); 


    // Showing rules 
    const firstTimeBtn = document.querySelector(".firstTimeBtn");
    if(firstTimeBtn) {
      firstTimeBtn.addEventListener("click", (event) => {
        rulesSection.style.display = "block";
        blurContainer.style.display = "block";
        event.stopPropagation();
      
      });
    }
    
  
  
    buildTenseSelectPopup(userId);
  
    selectDiv.addEventListener("click", (event)=>{
  
      const tenseSelectPopupContainer = document.querySelector(".tenseSelectPopupContainer");
      if(tenseSelectPopupContainer) {
        tenseSelectPopupContainer.style.display = "block";
      }
  
      const blurContainer = document.querySelector(".blurContainer");
  
      if(blurContainer) {
        blurContainer.style.display = "block";
      }
      
      event.stopPropagation();
    })

    
  
    let tenseName, tensePEl, selectedIcon;
      
      const tensePopup = document.querySelector(".tenseSelectPopupContainer");
  
      const iconListCircle = document.querySelectorAll(".fa-circle");
  
      let tensesNotLocked = [];
      iconListCircle.forEach((icon)=> {
        const parentEl = icon.parentNode;
        tensesNotLocked.push(parentEl);
      });
  
  
      tensesNotLocked.forEach((tense) => {
        const blurContainer = document.querySelector(".blurContainer");
        tense.addEventListener("click", ()=> {
  
          iconListCircle.forEach((icon) => {
            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");
          })
          tensePEl = tense.querySelector("p");
          selectedIcon = tense.querySelector("i");
          selectedIcon.classList.remove("fa-regular");
          selectedIcon.classList.add("fa-solid");
  
          tenseName = tensePEl.textContent;
          currentTense.textContent = tenseName;
          blurContainer.style.display = "none";
          tensePopup.style.display = "none";
        })
  
      })
  }
  
  
  
  
  