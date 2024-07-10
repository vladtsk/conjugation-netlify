// Generate the bonus page

import { manageBonusMenuClicks } from "./bonusPageClickManager.js";

export function generateBonusPage(userId, subStatus) {
    const contentArea = document.querySelector(".content-area");
    contentArea.innerHTML = ""; 
  
    // Create menu div
    const menu = document.createElement("div");
    menu.classList.add("bonus-menu");
    contentArea.appendChild(menu);
  
    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Earn bonuses by using the app regularly";
    
    menu.appendChild(menuTitle);
    
    /*const bonus1Link = document.createElement("div");
    bonus1Link.classList.add("bonus1");
    bonus1Link.innerHTML = `<i class="fa-solid fa-book"></i>Bonus 1: Conjugation guide`;
  
    
    menu.appendChild(bonus1Link);*/


    const bonus1Container = document.createElement("div");
    //bonus1Container.classList.add("present-container");
  
    menu.appendChild(bonus1Container);
  
    const bonus1Menu = document.createElement("div");
    bonus1Menu.classList.add("bonus1Menu");
  
    bonus1Container.appendChild(bonus1Menu);
  
    const bonus1MenuLine = document.createElement("div");
    //bonus1MenuLine.classList.add("present-line");
    bonus1Menu.appendChild(bonus1MenuLine);
  
    bonus1MenuLine.innerHTML = `<i class="fa-solid fa-book"></i>Bonus 1: Conjugation guide`;
  
    const plusIcon = document.createElement("i");
    plusIcon.classList.add("fa-solid", "fa-square-plus");
  
    bonus1Menu.appendChild(plusIcon);
  
    const bonus1SubContainer = document.createElement("div");
    bonus1SubContainer.classList.add("bonus-subcontainer", "bonus1-subcontainer");
    bonus1SubContainer.style.display = "none";
    bonus1Container.appendChild(bonus1SubContainer);
  
    const bonus1Intro = document.createElement("div");
    bonus1Intro.classList.add("bonus-intro");

    const bonus1IntroLine = document.createElement("div");
    
    

    if(userId && subStatus === "active") {
      bonus1IntroLine.innerHTML = `<i class="fa-solid fa-circle-chevron-right"></i>
      Your bonus is ready now!`;

      const bonus1Btn = document.createElement("div");
      bonus1Btn.classList.add("bonus1Btn");
      bonus1Btn.textContent = "bonus";

      bonus1Intro.appendChild(bonus1IntroLine);
      bonus1Intro.appendChild(bonus1Btn);
    } else {
      bonus1IntroLine.innerHTML = `<i
      class="fa-solid fa-lock"></i>Use the app for 3 days in a row or become Premium to access it now`;
      bonus1Intro.appendChild(bonus1IntroLine);
    }
    
    
    bonus1SubContainer.appendChild(bonus1Intro);

    manageBonusMenuClicks(userId, subStatus);
    
    

    /*
    if(userId && subStatus === "active") {
    
        presentSubGroup3.innerHTML = `<i class="fa-solid fa-circle-chevron-right"></i>Group 3`;
      } else { 
        presentSubGroup3.innerHTML = `<i class="fa-solid fa-lock"></i>Group 3`;
       } 

  
    
  
    const presentSubGroup1 = document.createElement("div");
    presentSubGroup1.classList.add("present-submenu", "present-group1");
    presentSubGroup1.innerHTML = `<i
    class="fa-solid fa-circle-chevron-right"></i>Group 1`;
  
    const presentSubGroup2 = document.createElement("div");
    presentSubGroup2.classList.add("present-submenu", "present-group2");
    presentSubGroup2.innerHTML = `<i
    class="fa-solid fa-circle-chevron-right"></i>Group 2`;
  
    const presentSubGroup3 = document.createElement("div");
    presentSubGroup3.classList.add("present-submenu", "present-group3");
    
    if(userId && subStatus === "active") {
    
        presentSubGroup3.innerHTML = `<i class="fa-solid fa-circle-chevron-right"></i>Group 3`;
      } else { 
        presentSubGroup3.innerHTML = `<i class="fa-solid fa-lock"></i>Group 3`;
       }
    // <p class="premium">premium</p></div>
  
    const presentSubIrregular = document.createElement("div");
    presentSubIrregular.classList.add("present-submenu", "present-irregular");
    
    if(userId && subStatus === "active") {
      presentSubIrregular.innerHTML = `<i class="fa-solid fa-circle-chevron-right"></i>Irregular Verbs`;
    } else {
      presentSubIrregular.innerHTML = `<i class="fa-solid fa-lock"></i>Irregular Verbs`;
    }
  
    presentSubContainer.appendChild(presentSubIntro);
    presentSubContainer.appendChild(presentSubGroup1);
    presentSubContainer.appendChild(presentSubGroup2);
    presentSubContainer.appendChild(presentSubGroup3);
    presentSubContainer.appendChild(presentSubIrregular);
  
    const imperfectLink = document.createElement("div");
    imperfectLink.classList.add("imperfect-menu");
  
    if(userId && subStatus === "active") {
      imperfectLink.innerHTML = `<i class='fa-solid fa-house'></i>The imperfect past tense`;
    } else {
      imperfectLink.innerHTML = `<i class='fa-solid fa-lock'></i>The imperfect past tense`;
    }
  
    menu.appendChild(imperfectLink);
*/
}