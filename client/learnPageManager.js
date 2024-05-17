import { generateLearnPage } from "./learnPage.js";

const learnBtn = document.querySelector(".learn");
learnBtn.addEventListener("click", () => {
  console.log("click");
  generateLearnPage();
});
