import { generateLearnPage } from "./learnPage.js";
import { generatePresentPage } from "./presentPage.js";

const learnBtn = document.querySelector(".learn");
learnBtn.addEventListener("click", () => {
  console.log("click");
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