// Open the first page when the practice button is clicked

import { launchFirstPage } from "./readDbData.js";
import { selectPracticeBtn } from "./selectMenuItem.js";

export function managePracticeBtnClick() {
    const practiceBtn = document.querySelectorAll(".practice");

    practiceBtn.forEach(btn => {
        btn.addEventListener("click", ()=> {
            launchFirstPage();
            selectPracticeBtn();
        })

    })
}
