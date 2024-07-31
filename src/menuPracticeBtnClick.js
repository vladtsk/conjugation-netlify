// Open the first page when the practice button is clicked

import { launchFirstPage } from "./firstPageLaunch.js";
//import { generateLoader } from "./loader.js";

export function managePracticeBtnClick() {
    const practiceBtn = document.querySelectorAll(".practice");
    

    practiceBtn.forEach(btn => {
        
        btn.addEventListener("click", ()=> {
            launchFirstPage();
            selectPracticeBtn();
        })

    })

    /*const learnBtn = document.querySelectorAll(".learn");
    const practiceBtn = document.querySelectorAll(".practice");
    const stats = document.querySelectorAll(".stats");
    const bonusBtn = document.querySelectorAll(".bonus");
    
      

    practiceBtn.forEach(btn => {
        
        btn.addEventListener("click", ()=> {
            launchFirstPage();

            stats.forEach(btn => {
                btn.classList.remove("select");
            
              });
        
              bonusBtn.forEach(btn => {
                btn.classList.remove("select");
            
              });
            
              learnBtn.forEach(btn => {
                btn.classList.remove("select");
                 
              });

              practiceBtn.forEach(btn => {
                btn.classList.add("select");
                 
              });
             


        })

    }) */

}

export function selectPracticeBtn() {
    const learnBtn = document.querySelectorAll(".learn");
    const practiceBtn = document.querySelectorAll(".practice");
    const stats = document.querySelectorAll(".stats");
    const bonusBtn = document.querySelectorAll(".bonus");

    stats.forEach(btn => {
        btn.classList.remove("select");
    
      });

      bonusBtn.forEach(btn => {
        btn.classList.remove("select");
    
      });
    
      learnBtn.forEach(btn => {
        btn.classList.remove("select");
         
      });

      practiceBtn.forEach(btn => {
        btn.classList.add("select");
         
      });

}

export function deselectAllMenuBtns() {
  const learnBtn = document.querySelectorAll(".learn");
    const practiceBtn = document.querySelectorAll(".practice");
    const stats = document.querySelectorAll(".stats");
    const bonusBtn = document.querySelectorAll(".bonus");

    stats.forEach(btn => {
        btn.classList.remove("select");
    
      });

      bonusBtn.forEach(btn => {
        btn.classList.remove("select");
    
      });
    
      learnBtn.forEach(btn => {
        btn.classList.remove("select");
         
      });

      practiceBtn.forEach(btn => {
        btn.classList.remove("select");
         
      });
}