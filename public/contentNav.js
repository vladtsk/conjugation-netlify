import { getSubscriptionStatus } from "../src/readDbData.js";
import { generateLearnPage } from "./learnPage.js";
import { generatePresentPage } from "./presentPage.js";
import { generatePastCompPage } from "./pastcompPage.js";

export function handleContentNavClicks() {
    const verbConjugationLink = document.querySelector(".verbConjugationLink");
    const presentTenseLink = document.querySelector(".presentTenseLink");
    const pastTenseLink = document.querySelector(".pastTenseLink");

    if (verbConjugationLink) {
        verbConjugationLink.addEventListener("click", async()=> {
            let { subStatus, userId } = await getSubscriptionStatus();
            generateLearnPage(userId, subStatus);
        })
    }

    if(presentTenseLink) {
        presentTenseLink.addEventListener("click", ()=> {
            generatePresentPage();
        })
    }

    if(pastTenseLink) {
        pastTenseLink.addEventListener("click", ()=> {
            generatePastCompPage();
        })
    }


}