
import { generateBonusPage } from "./bonuses.js";
import { getSubscriptionStatus } from "./readDbData.js";

export function openBonusPage() {
  const practiceBtn = document.querySelectorAll(".practice");
  const learnBtn = document.querySelectorAll(".learn");
  const statsBtn = document.querySelectorAll(".stats");
  const bonusBtn = document.querySelectorAll(".bonus");

  
  bonusBtn.forEach(btn => btn.addEventListener("click", async () => {

  let { subStatus, userId } = await getSubscriptionStatus();

  practiceBtn.forEach(btn => {
    btn.classList.remove("select");

  })

  learnBtn.forEach(btn => {
    btn.classList.remove("select");

  })

  statsBtn.forEach(btn => {
    btn.classList.remove("select");

  })

  bonusBtn.forEach(btn => {
    btn.classList.add("select");
     
  })

  generateBonusPage(userId, subStatus);
})
);

}

