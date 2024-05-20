import { manageLearnMenu } from "./learn-menu.js";
import { generateIntroPage } from "./introPage.js";
import { generatePresentPage } from "./presentPage.js";
import { generatePresentGroup1Page } from "./present-group1-page.js";

export function generateLearnPage() {
  const contentArea = document.querySelector(".content-area");
  contentArea.innerHTML = "";

  const contentNav = document.createElement("div");
  contentNav.classList.add("contentNav");
  contentArea.appendChild(contentNav);

  const verbConjugationLink = document.createElement("a");
  verbConjugationLink.textContent = "Verb conjugation";

  const iconSpan = document.createElement("span");
  iconSpan.classList.add("icon");
  const iconI = document.createElement("i");
  iconI.classList.add("fas", "fa-chevron-right");
  iconSpan.appendChild(iconI);

  const introLink = document.createElement("a");
  introLink.textContent = "Intro";

  contentNav.appendChild(verbConjugationLink);
  contentNav.appendChild(iconSpan);
  contentNav.appendChild(introLink);

  // Create menu div
  const menu = document.createElement("div");
  menu.classList.add("menu");
  contentArea.appendChild(menu);

  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Learn the fundamentals of verb conjugation";

  const introMenuLink = document.createElement("a");
  introMenuLink.classList.add("intro-menu");
  introMenuLink.innerHTML = `<i class='fa-solid fa-plane-departure'></i> Introduction to
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

  presentLine.innerHTML = `<i class='fa-regular fa-calendar-check'></i>
  The Present Tense</div>`;

  const plusIcon = document.createElement("i");
  plusIcon.classList.add("fa-solid", "fa-square-plus");

  presentMenu.appendChild(plusIcon);

  const presentSubContainer = document.createElement("div");
  presentSubContainer.classList.add("present-subcontainer");
  presentSubContainer.style.display = "none";
  presentContainer.appendChild(presentSubContainer);

  const presentSubIntro = document.createElement("a");
  presentSubIntro.classList.add("present-submenu", "present-intro");
  presentSubIntro.innerHTML = `<i
  class="fa-solid fa-circle-chevron-right"></i>Introduction`;

  const presentSubGroup1 = document.createElement("a");
  presentSubGroup1.classList.add("present-submenu", "present-group1");
  presentSubGroup1.innerHTML = `<i
  class="fa-solid fa-circle-chevron-right"></i>Group 1`;

  const presentSubGroup2 = document.createElement("a");
  presentSubGroup2.classList.add("present-submenu", "present-group2");
  presentSubGroup2.innerHTML = `<i
  class="fa-solid fa-circle-chevron-right"></i>Group 2`;

  const presentSubGroup3 = document.createElement("a");
  presentSubGroup3.classList.add("present-submenu", "present-group3");
  presentSubGroup3.innerHTML = `<i
  class="fa-solid fa-circle-chevron-right"></i>Group 3`;

  const presentSubIrregular = document.createElement("a");
  presentSubIrregular.classList.add("present-submenu", "present-irregular");
  presentSubIrregular.innerHTML = `<i
  class="fa-solid fa-circle-chevron-right"></i>Irregular Verbs`;

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

  pastLine.innerHTML = `<i class='fas fa-compass'></i>
  The Past Tense "Passé composé"</div>`;

  const plusIcon2 = document.createElement("i");
  plusIcon2.classList.add("fa-solid", "fa-square-plus");

  pastMenu.appendChild(plusIcon2);

  const pastSubContainer = document.createElement("div");
  pastSubContainer.classList.add("past-subcontainer");
  pastSubContainer.style.display = "none";
  pastContainer.appendChild(pastSubContainer);

  const pastSubIntro = document.createElement("a");
  pastSubIntro.classList.add("past-submenu", "past-intro");
  pastSubIntro.innerHTML = `<i
  class="fa-solid fa-circle-chevron-right"></i>Introduction`;

  const pastSubAux = document.createElement("a");
  pastSubAux.classList.add("past-submenu", "past-aux");
  pastSubAux.innerHTML = `<i
  class="fa-solid fa-circle-chevron-right"></i>'Avoir' VS 'être'`;

  const pastSubParticiple = document.createElement("a");
  pastSubParticiple.classList.add("past-submenu", "past-participle");
  pastSubParticiple.innerHTML = `<i
  class="fa-solid fa-circle-chevron-right"></i>The past participle`;

  pastSubContainer.appendChild(pastSubIntro);
  pastSubContainer.appendChild(pastSubAux);
  pastSubContainer.appendChild(pastSubParticiple);

  manageLearnMenu();

  introMenuLink.addEventListener("click", ()=> {
    generateIntroPage();
  })

  presentSubIntro.addEventListener("click", () => {
    console.log("click");
    generatePresentPage();
  });

  presentSubGroup1.addEventListener("click", ()=> {
    generatePresentGroup1Page();
  })

}
