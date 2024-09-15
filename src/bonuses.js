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

  if ((userId && subStatus === "active") || streak >= 2) {
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
    });
  } else {
    bonus1IntroLine.innerHTML = `<i
      class="fa-solid fa-lock"></i>Achieve a 2-day streak or become Premium to access it now`;
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

  if ((userId && subStatus === "active") || streak >= 3) {
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
      class="fa-solid fa-lock"></i>Achieve a 3-day streak or become Premium to access it now`;
    bonus2Intro.appendChild(bonus2IntroLine);
  }

  bonus2SubContainer.appendChild(bonus2Intro);

  // generate bonus 3
  const bonus3Container = document.createElement("div");

  menu.appendChild(bonus3Container);

  const bonus3Menu = document.createElement("div");
  bonus3Menu.classList.add("bonus3Menu");

  bonus3Container.appendChild(bonus3Menu);

  const bonus3MenuLine = document.createElement("div");
  bonus3Menu.appendChild(bonus3MenuLine);

  bonus3MenuLine.innerHTML = `<i class="fa-solid fa-fire"></i>Bonus 3: Unlock the Passé composé tense.`;

  const plusIcon3 = document.createElement("i");
  plusIcon3.classList.add("fa-solid", "fa-square-plus");

  bonus3Menu.appendChild(plusIcon3);

  const bonus3SubContainer = document.createElement("div");
  bonus3SubContainer.classList.add("bonus-subcontainer", "bonus3-subcontainer");
  bonus3SubContainer.style.display = "none";
  bonus3Container.appendChild(bonus3SubContainer);

  const bonus3Intro = document.createElement("div");
  bonus3Intro.classList.add("bonus-intro");

  const bonus3IntroLine = document.createElement("div");

  if ((userId && subStatus === "active") || streak >= 5) {
    bonus3IntroLine.innerHTML = `<i class="fa-solid fa-circle-chevron-right"></i>
      You've unlocked the Passé composé tense!`;
  } else {
    bonus3IntroLine.innerHTML = `<i
      class="fa-solid fa-lock"></i>Achieve a 5-day streak or become Premium to unlock it now`;
  }
  bonus3Intro.appendChild(bonus3IntroLine);
  bonus3SubContainer.appendChild(bonus3Intro);

  // generate bonus 4
  const bonus4Container = document.createElement("div");

  menu.appendChild(bonus4Container);

  const bonus4Menu = document.createElement("div");
  bonus4Menu.classList.add("bonus4Menu");

  bonus4Container.appendChild(bonus4Menu);

  const bonus4MenuLine = document.createElement("div");
  bonus4Menu.appendChild(bonus4MenuLine);

  bonus4MenuLine.innerHTML = `<i class="fa-solid fa-key"></i>Bonus 4: 15 of the most common French verbs (part 2).`;

  const plusIcon4 = document.createElement("i");
  plusIcon4.classList.add("fa-solid", "fa-square-plus");

  bonus4Menu.appendChild(plusIcon4);

  const bonus4SubContainer = document.createElement("div");
  bonus4SubContainer.classList.add("bonus-subcontainer", "bonus4-subcontainer");
  bonus4SubContainer.style.display = "none";
  bonus4Container.appendChild(bonus4SubContainer);

  const bonus4Intro = document.createElement("div");
  bonus4Intro.classList.add("bonus-intro");

  const bonus4IntroLine = document.createElement("div");

  if ((userId && subStatus === "active") || streak >= 7) {
    bonus4IntroLine.innerHTML = `<i class="fa-solid fa-circle-chevron-right"></i>
      Your bonus is ready now!`;

    const bonus4Btn = document.createElement("div");
    bonus4Btn.classList.add("bonus4Btn");
    bonus4Btn.textContent = "download";

    bonus4Intro.appendChild(bonus4IntroLine);
    bonus4Intro.appendChild(bonus4Btn);

    bonus4Btn.addEventListener("click", (event) => {
      event.preventDefault();

      const a = document.createElement("a");
      a.href = "../public/15-verbs-2.pdf";
      a.setAttribute("download", "");

      document.body.appendChild(a);

      a.click();

      document.body.removeChild(a);
    });
  } else {
    bonus4IntroLine.innerHTML = `<i
      class="fa-solid fa-lock"></i>Achieve a 7-day streak or become Premium to access it now`;
    bonus4Intro.appendChild(bonus4IntroLine);
  }

  bonus4SubContainer.appendChild(bonus4Intro);

  manageBonusMenuClicks(userId, subStatus);
}
