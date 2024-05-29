import { generateLearnPage } from "./learnPage.js";

export function openLearnPage() {
  const learnBtn = document.querySelectorAll(".learn");
  const practiceBtn = document.querySelectorAll(".practice");
  const stats = document.querySelectorAll(".stats");

learnBtn.forEach(btn => btn.addEventListener("click", () => {

  practiceBtn.forEach(btn => {
    btn.classList.remove("select");

  })

  stats.forEach(btn => {
    btn.classList.remove("select");

  })

  learnBtn.forEach(btn => {
    btn.classList.add("select");
     
  })

  generateLearnPage();
})
);

}
  