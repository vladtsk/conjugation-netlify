// Handle streaks

export function handleStreakAuthUser(timestampDb, streak, stats) {
    const today = new Date();
    const streakEl = document.querySelector(".streak p");

    if(timestampDb) {
      const streakLastChangeTime = parseInt(timestampDb);

      const streakLastChangeDate = new Date(streakLastChangeTime);


      console.log("streakLastChangeDate", streakLastChangeDate);
      

      if(streakLastChangeDate.getDate() === today.getDate() &&
      streakLastChangeDate.getMonth() === today.getMonth() &&
      streakLastChangeDate.getFullYear() === today.getFullYear()
    ) {
      // no change if the date is the same
      console.log("same date");
    } else if(today.getDate() - streakLastChangeDate.getDate() < 2  &&
      streakLastChangeDate.getMonth() === today.getMonth() &&
      streakLastChangeDate.getFullYear() === today.getFullYear()) {
      streak++; // streak increases
      streakEl.textContent = streak;
      stats[stats.length - 1].streak = streak;

      console.log("1 day difference")
    } else {
      streak = 1;
      streakEl.textContent = streak;
      stats[stats.length - 1].streak = streak;

      console.log("more than 1 day difference")
    }




    } else {
      streak = 1;
      streakEl.textContent = streak;
      stats[stats.length - 1].streak = streak;
    }

    console.log(streak);
    return streak;
  }



  export function handleStreakNonAuthUser(streak) {

    const today = new Date();
    const streakEl = document.querySelector(".streak p");

    const currenttimestamp = Date.now();

    const storedTimeStamp = localStorage.getItem("streakLastChangeTime");
        
        if(storedTimeStamp) {
         
          const streakLastChangeTime = parseInt(storedTimeStamp);
          const streakLastChangeDate = new Date(streakLastChangeTime);
        
          if(streakLastChangeDate.getDate() === today.getDate() &&
          streakLastChangeDate.getMonth() === today.getMonth() &&
          streakLastChangeDate.getFullYear() === today.getFullYear()
        ) {
          // no change if the date is the same
          console.log("same date");
        } else if(today.getDate() - streakLastChangeDate.getDate() < 2  &&
          streakLastChangeDate.getMonth() === today.getMonth() &&
          streakLastChangeDate.getFullYear() === today.getFullYear()) {
            streak++; // streak increases
            streakEl.textContent = streak;
            localStorage.setItem("streakLastChangeTime", currenttimestamp.toString());
            localStorage.setItem("streak", streak);

          console.log("1 day difference")
        } else {
          streak = 1;
          streakEl.textContent = streak;
          localStorage.setItem("streakLastChangeTime", currenttimestamp.toString());
          localStorage.setItem("streak", streak);

          console.log("more than 1 day difference")
        }

    

        } else {
          streak = 1;
          streakEl.textContent = streak;
          localStorage.setItem("streakLastChangeTime", currenttimestamp.toString());
          localStorage.setItem("streak", streak);
        }

    console.log(streak);
    return streak;
  }