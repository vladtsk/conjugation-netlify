import { manageLearnMenu } from "./learn-menu.js";
import { generateIntroPage } from "./introPage.js";
import { generatePresentPage } from "./presentPage.js";
import { generatePresentGroup1Page } from "./present-group1-page.js";
import { generatePresentGroup2Page } from "./present-group2-page.js";
import { generatePresentGroup3Page } from "./present-group3-page.js";
import { generatePresentIrregularPage } from "./present-irregular.js";
import { generatePastCompPage } from "./pastcompPage.js";
import { generatePastCompAuxPage } from "./pastcompaux.js";
import { generatePastCompParticPage } from "./pastparticiple.js";
import { generateImparfaitPage } from "./imparfait-page.js";
import { generateFuturePage } from "./futurePage.js";
import { generateFutureSpellingPage } from "./futureSpellingPage.js";



export function generateLearnPage(userId, subStatus) {
  const contentArea = document.querySelector(".content-area");
  contentArea.innerHTML = ""; 

  // Create menu div
  const menu = document.createElement("div");
  menu.classList.add("menu");
  contentArea.appendChild(menu);

  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Learn the fundamentals of verb conjugation";

  const introMenuLink = document.createElement("div");
  introMenuLink.classList.add("intro-menu");
  introMenuLink.innerHTML = `<i class='fa-solid fa-plane-departure'></i>Introduction to
verb conjugation`;

  menu.appendChild(menuTitle);
  menu.appendChild(introMenuLink);

  const presentContainer = document.createElement("div");
  presentContainer.classList.add("present-container");

  menu.appendChild(presentContainer);

  const presentMenu = document.createElement("div");
  presentMenu.classList.add("present-menu");

  presentContainer.appendChild(presentMenu);

  const presentLine = document.createElement("div");
  presentLine.classList.add("present-line");
  presentMenu.appendChild(presentLine);

  presentLine.innerHTML = `<i class='fa-regular fa-calendar-check'></i>The Present Tense</div>`;

  const plusIcon = document.createElement("i");
  plusIcon.classList.add("fa-solid", "fa-square-plus");

  presentMenu.appendChild(plusIcon);

  const presentSubContainer = document.createElement("div");
  presentSubContainer.classList.add("present-subcontainer");
  presentSubContainer.style.display = "none";
  presentContainer.appendChild(presentSubContainer);

  const presentSubIntro = document.createElement("div");
  presentSubIntro.classList.add("present-submenu", "present-intro");
  presentSubIntro.innerHTML = `<i
  class="fa-solid fa-circle-chevron-right"></i>Introduction`;

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

  const pastContainer = document.createElement("div");
  pastContainer.classList.add("past-container");

  menu.appendChild(pastContainer);

  const pastMenu = document.createElement("div");
  pastMenu.classList.add("past-menu");
  pastContainer.appendChild(pastMenu);

  const pastLine = document.createElement("div");
  pastLine.classList.add("past-line");
  pastMenu.appendChild(pastLine);

  if(userId && subStatus === "active") {
    pastLine.innerHTML = `<i class='fas fa-compass'></i>The Past Tense "Passé composé"</div>`;

    const plusIcon2 = document.createElement("i");
    plusIcon2.classList.add("fa-solid", "fa-square-plus");

  pastMenu.appendChild(plusIcon2);
  } else {
    pastLine.innerHTML = `<i class='fa-solid fa-lock'></i>The Past Tense "Passé composé"</div>`;
  }

  

  const pastSubContainer = document.createElement("div");
  pastSubContainer.classList.add("past-subcontainer");
  pastSubContainer.style.display = "none";
  pastContainer.appendChild(pastSubContainer);

  const pastSubIntro = document.createElement("div");
  pastSubIntro.classList.add("past-submenu", "past-intro");
  pastSubIntro.innerHTML = `<i
  class="fa-solid fa-circle-chevron-right"></i>Introduction`;

  const pastSubAux = document.createElement("div");
  pastSubAux.classList.add("past-submenu", "past-aux");
  pastSubAux.innerHTML = `<i
  class="fa-solid fa-circle-chevron-right"></i>'Avoir' VS 'être'`;

  const pastSubParticiple = document.createElement("div");
  pastSubParticiple.classList.add("past-submenu", "past-participle");
  pastSubParticiple.innerHTML = `<i
  class="fa-solid fa-circle-chevron-right"></i>The past participle`;

  pastSubContainer.appendChild(pastSubIntro);
  pastSubContainer.appendChild(pastSubAux);
  pastSubContainer.appendChild(pastSubParticiple);

  const imperfectLink = document.createElement("div");
  imperfectLink.classList.add("imperfect-menu");

  if(userId && subStatus === "active") {
    imperfectLink.innerHTML = `<i class='fa-solid fa-house'></i>The imperfect past tense`;
  } else {
    imperfectLink.innerHTML = `<i class='fa-solid fa-lock'></i>The imperfect past tense`;
  }

  menu.appendChild(imperfectLink);

  //
  const futureContainer = document.createElement("div");
  futureContainer.classList.add("future-container");

  menu.appendChild(futureContainer);

  const futureMenu = document.createElement("div");
  futureMenu.classList.add("future-menu");
  futureContainer.appendChild(futureMenu);

  const futureLine = document.createElement("div");
  futureLine.classList.add("future-line");
  futureMenu.appendChild(futureLine);

  if(userId && subStatus === "active") {
    futureLine.innerHTML = `<i class='fas fa-compass'></i>The simple future tense (le futur simple)</div>`;

    const plusIcon3 = document.createElement("i");
    plusIcon3.classList.add("fa-solid", "fa-square-plus");

  futureMenu.appendChild(plusIcon3);
  } else {
    futureLine.innerHTML = `<i class='fa-solid fa-lock'></i>The simple future tense (le futur simple)</div>`;
  }

  

  const futureSubContainer = document.createElement("div");
  futureSubContainer.classList.add("future-subcontainer");
  futureSubContainer.style.display = "none";
  futureContainer.appendChild(futureSubContainer);

  const futureSubIntro = document.createElement("div");
  futureSubIntro.classList.add("future-submenu", "future-intro");
  futureSubIntro.innerHTML = `<i
  class="fa-solid fa-circle-chevron-right"></i>Introduction`;

  const futureSpelling = document.createElement("div");
  futureSpelling.classList.add("future-submenu", "furure-spelling");
  futureSpelling.innerHTML = `<i
  class="fa-solid fa-circle-chevron-right"></i> Spelling changes`;
/*
  const pastSubParticiple = document.createElement("div");
  pastSubParticiple.classList.add("past-submenu", "past-participle");
  pastSubParticiple.innerHTML = `<i
  class="fa-solid fa-circle-chevron-right"></i>The past participle`;
*/
  futureSubContainer.appendChild(futureSubIntro);
  futureSubContainer.appendChild(futureSpelling);
 
  //

  manageLearnMenu(userId, subStatus);

  introMenuLink.addEventListener("click", ()=> {
    generateIntroPage();
  })

  presentSubIntro.addEventListener("click", () => {
    generatePresentPage();
  });

  presentSubGroup1.addEventListener("click", ()=> {
    generatePresentGroup1Page();
  })

  presentSubGroup2.addEventListener("click", ()=>{
    generatePresentGroup2Page();
  })

  if(userId && subStatus === "active") {
    presentSubGroup3.addEventListener("click", ()=> {
      generatePresentGroup3Page();
    })
  }
  
  if(userId && subStatus === "active") {
    presentSubIrregular.addEventListener("click", ()=> {
    generatePresentIrregularPage();
  })
}

  if(userId && subStatus === "active") {
    pastSubIntro.addEventListener("click", ()=> {
      generatePastCompPage();
  })
  }

  pastSubAux.addEventListener("click", ()=> {
    generatePastCompAuxPage();
    })
  
    pastSubParticiple.addEventListener("click", ()=> {
      generatePastCompParticPage();
    })

    if(userId && subStatus === "active") {
      imperfectLink.addEventListener("click", ()=> {
        generateImparfaitPage();
    })
  }

  futureSubIntro.addEventListener("click", ()=> {
    generateFuturePage();
})
  
  futureSpelling.addEventListener("click", ()=> {
    generateFutureSpellingPage();
})

}
