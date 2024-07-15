// Manage menu clicks on the bonus page

export function manageBonusMenuClicks(userId, subStatus) {
    const bonus1Menu = document.querySelector(".bonus1Menu");
    const bonus1SubContainer = document.querySelector(".bonus1-subcontainer");

    const bonus2Menu = document.querySelector(".bonus2Menu");
    const bonus2SubContainer = document.querySelector(".bonus2-subcontainer");
    
    bonus1Menu.addEventListener("click", ()=>{
      if(bonus1SubContainer.style.display === "none") {
          bonus1SubContainer.style.display = "block";
          bonus1Menu.innerHTML = `<div><i class="fa-solid fa-book"></i>Bonus 1: Conjugation guide</div>
          <i class='fa-solid fa-circle-chevron-up'></i>`
  
          
  
      } else {
          bonus1SubContainer.style.display = "none";
          bonus1Menu.innerHTML = `<div><i class="fa-solid fa-book"></i>Bonus 1: Conjugation guide</div>
          <i class="fa-solid fa-square-plus"></i>`
      }
  })

  bonus2Menu.addEventListener("click", ()=>{
    if(bonus2SubContainer.style.display === "none") {
        bonus2SubContainer.style.display = "block";
        bonus2Menu.innerHTML = `<div><i class='fa-solid fa-chart-line'></i>Bonus 2: "Top 50 most used French verbs"</div>
        <i class='fa-solid fa-circle-chevron-up'></i>`

        

    } else {
        bonus2SubContainer.style.display = "none";
        bonus2Menu.innerHTML = `<div><i class='fa-solid fa-chart-line'></i>Bonus 2: "Top 50 most used French verbs"</div>
        <i class="fa-solid fa-square-plus"></i>`
    }
})

  }