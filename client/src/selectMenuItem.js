export function selectLearnBtn() {
const learnBtn = document.querySelectorAll(".learn");
  const practiceBtn = document.querySelectorAll(".practice");
  const stats = document.querySelectorAll(".stats");

  practiceBtn.forEach(btn => {
    btn.classList.remove("select");

  })

  stats.forEach(btn => {
    btn.classList.remove("select");

  })

  learnBtn.forEach(btn => {
    btn.classList.add("select");
     
  })

}

export function selectPracticeBtn() {
    const learnBtn = document.querySelectorAll(".learn");
      const practiceBtn = document.querySelectorAll(".practice");
      const stats = document.querySelectorAll(".stats");
    
      practiceBtn.forEach(btn => {
        btn.classList.add("select");
    
      })
    
      stats.forEach(btn => {
        btn.classList.remove("select");
    
      })
    
      learnBtn.forEach(btn => {
        btn.classList.remove("select");
         
      })
    
    }