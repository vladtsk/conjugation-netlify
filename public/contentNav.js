import { getSubscriptionStatus } from "../src/readDbData.js";
import { generateLearnPage } from "./learnPage.js";
import { generatePresentPage } from "./presentPage.js";
import { generatePastCompPage } from "./pastcompPage.js";
import { generateFuturePage } from "./futurePage.js";
import { generateSubjunctivePage } from "./subjunctive-page.js";

export function handleContentNavClicks() {
    const verbConjugationLink = document.querySelector(".verbConjugationLink");
    const presentTenseLink = document.querySelector(".presentTenseLink");
    const pastTenseLink = document.querySelector(".pastTenseLink");
    const futureTenseLink = document.querySelector(".futureTenseLink");
    const subjunctiveLink = document.querySelector(".subjunctiveLink");


    if (verbConjugationLink) {
        verbConjugationLink.addEventListener("click", async()=> {
            let { subStatus, userId } = await getSubscriptionStatus();
            generateLearnPage(userId, subStatus);
        })
    }

    if(presentTenseLink) {
        presentTenseLink.addEventListener("click", generatePresentPage);
    }

    if(pastTenseLink) {
        pastTenseLink.addEventListener("click", generatePastCompPage);
    }

    if(futureTenseLink) {
        futureTenseLink.addEventListener("click", generateFuturePage);
    }

    if(subjunctiveLink) {
        subjunctiveLink.addEventListener("click", generateSubjunctivePage)
    }


}