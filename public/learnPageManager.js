import { generateLearnPage } from "./learnPage.js";
import { getSubscriptionStatus } from "../src/readDbData.js";

export function openLearnPage() {
  const learnBtn = document.querySelectorAll(".learn");
  const practiceBtn = document.querySelectorAll(".practice");
  const stats = document.querySelectorAll(".stats");
  const bonusBtn = document.querySelectorAll(".bonus");
   
learnBtn.forEach(btn => btn.addEventListener("click", async () => {

  let { subStatus, userId } = await getSubscriptionStatus();

  practiceBtn.forEach(btn => {
    btn.classList.remove("select");

  })

  stats.forEach(btn => {
    btn.classList.remove("select");

  })

  bonusBtn.forEach(btn => {
    btn.classList.remove("select");

  })

  learnBtn.forEach(btn => {
    btn.classList.add("select");
     
  })

  generateLearnPage(userId, subStatus);
})
);

}
  