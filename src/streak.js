// Handle streaks

export function handleStreakAuthUser(timestampDb, streak, stats) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const streakEl = document.querySelector(".streak p");

    let timeDiff;

    if(timestampDb) {
      const streakLastChangeTime = parseInt(timestampDb);

      //const streakLastChangeDate = new Date(streakLastChangeTime);
      timeDiff = today.getTime() - streakLastChangeTime;

      if(timeDiff /(1000*60*60*24) < 1) {
      // no change if the date is the same
      console.log("same date", "dayDiff: ", timeDiff /(1000*60*60*24));
    } else if(timeDiff /(1000*60*60*24) < 2) {
      streak++; // streak increases
      streakEl.textContent = streak;
      stats[stats.length - 1].streak = streak;
      stats[stats.length - 1].timestamp = today.getTime();

      console.log("1 day difference")
    } else {
      streak = 1;
      streakEl.textContent = streak;
      stats[stats.length - 1].streak = streak;
      stats[stats.length - 1].timestamp = today.getTime();

      console.log("more than 1 day difference")
    }




    } else {
      streak = 1;
      streakEl.textContent = streak;
      stats[stats.length - 1].streak = streak;
      stats[stats.length - 1].timestamp = today.getTime();
    }

    console.log(streak);
    return streak;
  }



  export function handleStreakNonAuthUser(streak) {

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const streakEl = document.querySelector(".streak p");

    //const currenttimestamp = Date.now();

    const storedTimeStamp = localStorage.getItem("streakLastChangeTime");

    let timeDiff;
        
        if(storedTimeStamp) {
         
          const streakLastChangeTime = parseInt(storedTimeStamp);
          //const streakLastChangeDate = new Date(streakLastChangeTime);

          timeDiff = today.getTime() - streakLastChangeTime;
        
          if(timeDiff /(1000*60*60*24) < 1) {
          // no change if the date is the same
          console.log("same date", "dayDiff: ", timeDiff /(1000*60*60*24));
        } else if(timeDiff /(1000*60*60*24) < 2) {
            streak++; // streak increases
            streakEl.textContent = streak;
            localStorage.setItem("streakLastChangeTime", today.getTime().toString());
            localStorage.setItem("streak", streak);

          console.log("1 day difference")
        } else {
          streak = 1;
          streakEl.textContent = streak;
          localStorage.setItem("streakLastChangeTime", today.getTime().toString());
          localStorage.setItem("streak", streak);

          console.log("more than 1 day difference")
        }

    

        } else {
          streak = 1;
          streakEl.textContent = streak;
          localStorage.setItem("streakLastChangeTime", today.getTime().toString());
          localStorage.setItem("streak", streak);
        }

    console.log(streak);
    return streak;
  }