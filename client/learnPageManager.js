import { generateLearnPage } from "./learnPage.js";
import { generatePresentPage } from "./presentPage.js";

const learnBtn = document.querySelector(".learn");
learnBtn.addEventListener("click", () => {
  const learnBtn = document.querySelectorAll(".learn");
  const practiceBtn = document.querySelectorAll(".practice");

  practiceBtn.forEach(btn => {
    btn.classList.remove("select");

  })

  learnBtn.forEach(btn => {
    btn.classList.add("select");
     
  })

  generateLearnPage();
});

/*
const presentIntroBtn = document.querySelector(".present-intro");
if(presentIntroBtn) {
  presentIntroBtn.addEventListener("click", () => {
  console.log("click");
  generatePresentPage();
});

}
*/