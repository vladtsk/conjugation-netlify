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

  //Retrive streak from Local storage if not authenticated
  let streak;

  if (!userId) {
    streak = localStorage.getItem("streak");
  }

  //Generate bonus 1

  const bonus1Container = document.createElement("div");

  menu.appendChild(bonus1Container);

  const bonus1Menu = document.createElement("div");
  bonus1Menu.classList.add("bonus1Menu");

  bonus1Container.appendChild(bonus1Menu);

  const bonus1MenuLine = document.createElement("div");
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

  if ((userId && subStatus === "active") || streak >= 3) {
    bonus1IntroLine.innerHTML = `<i class="fa-solid fa-circle-chevron-right"></i>
      Your bonus is ready now!`;

    const bonus1Btn = document.createElement("div");
    bonus1Btn.classList.add("bonus1Btn");
    bonus1Btn.textContent = "download";

    bonus1Intro.appendChild(bonus1IntroLine);
    bonus1Intro.appendChild(bonus1Btn);

    bonus1Btn.addEventListener("click", (event) => {
      event.preventDefault();

      const a = document.createElement("a");
      a.href = "../public/conjugation-guide.pdf";
      a.setAttribute("download", "");

      document.body.appendChild(a);

      a.click();

      document.body.removeChild(a);

      //window.open("../public/frcnjgd.pdf")
    });
  } else {
    bonus1IntroLine.innerHTML = `<i
      class="fa-solid fa-lock"></i>Achieve a 3-day streak or become Premium to access it now`;
    bonus1Intro.appendChild(bonus1IntroLine);
  }

  bonus1SubContainer.appendChild(bonus1Intro);

  // generate bonus 2
  const bonus2Container = document.createElement("div");

  menu.appendChild(bonus2Container);

  const bonus2Menu = document.createElement("div");
  bonus2Menu.classList.add("bonus2Menu");

  bonus2Container.appendChild(bonus2Menu);

  const bonus2MenuLine = document.createElement("div");
  bonus2Menu.appendChild(bonus2MenuLine);

  bonus2MenuLine.innerHTML = `<i class='fa-solid fa-chart-line'></i>Bonus 2: 15 of the most common French verbs.`;

  const plusIcon2 = document.createElement("i");
  plusIcon2.classList.add("fa-solid", "fa-square-plus");

  bonus2Menu.appendChild(plusIcon2);

  const bonus2SubContainer = document.createElement("div");
  bonus2SubContainer.classList.add("bonus-subcontainer", "bonus2-subcontainer");
  bonus2SubContainer.style.display = "none";
  bonus2Container.appendChild(bonus2SubContainer);

  const bonus2Intro = document.createElement("div");
  bonus2Intro.classList.add("bonus-intro");

  const bonus2IntroLine = document.createElement("div");

  if ((userId && subStatus === "active") || streak >= 7) {
    bonus2IntroLine.innerHTML = `<i class="fa-solid fa-circle-chevron-right"></i>
      Your bonus is ready now!`;

    const bonus2Btn = document.createElement("div");
    bonus2Btn.classList.add("bonus2Btn");
    bonus2Btn.textContent = "download";

    bonus2Intro.appendChild(bonus2IntroLine);
    bonus2Intro.appendChild(bonus2Btn);

    bonus2Btn.addEventListener("click", (event) => {
      event.preventDefault();

      const a = document.createElement("a");
      a.href = "../public/15-verbs.pdf";
      a.setAttribute("download", "");

      document.body.appendChild(a);

      a.click();

      document.body.removeChild(a);
    });
  } else {
    bonus2IntroLine.innerHTML = `<i
      class="fa-solid fa-lock"></i>Achieve a 7-day streak or become Premium to access it now`;
    bonus2Intro.appendChild(bonus2IntroLine);
  }

  bonus2SubContainer.appendChild(bonus2Intro);

  manageBonusMenuClicks(userId, subStatus);
}
