// Handle streaks

export function handleStreakAuthUser(timestampDb, streak, stats) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const streakEl = document.querySelector(".streak p");

  let timeDiff;

  if (timestampDb) {
    const streakLastChangeTime = parseInt(timestampDb) || 0;

    //const streakLastChangeDate = new Date(streakLastChangeTime);
    timeDiff = today.getTime() - streakLastChangeTime;

    if (timeDiff / (1000 * 60 * 60 * 24) < 1) {
      // no change if the date is the same
    } else if (timeDiff / (1000 * 60 * 60 * 24) < 2) {
      streak++; // streak increases
      streakEl.textContent = streak;

      stats.push({
        streak: streak,
        timestamp: today.getTime(),
      });
    } else {
      streak = 1;
      streakEl.textContent = streak;

      stats.push({
        streak: streak,
        timestamp: today.getTime(),
      });
    }
  } else {
    streak = 1;
    streakEl.textContent = streak;

    stats.push({
      streak: streak,
      timestamp: today.getTime(),
    });

    /*
      stats[stats.length - 1].streak = streak;
      stats[stats.length - 1].timestamp = today.getTime();
      */
  }

  return streak;
}

export function handleStreakNonAuthUser(streak) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const streakEl = document.querySelector(".streak p");

  //const currenttimestamp = Date.now();

  const storedTimeStamp = localStorage.getItem("streakLastChangeTime");

  let timeDiff;

  if (storedTimeStamp) {
    const streakLastChangeTime = parseInt(storedTimeStamp);
    //const streakLastChangeDate = new Date(streakLastChangeTime);

    timeDiff = today.getTime() - streakLastChangeTime;

    if (timeDiff / (1000 * 60 * 60 * 24) < 1) {
      // no change if the date is the same
    } else if (timeDiff / (1000 * 60 * 60 * 24) < 2) {
      streak++; // streak increases
      streakEl.textContent = streak;
      localStorage.setItem("streakLastChangeTime", today.getTime().toString());
      localStorage.setItem("streak", streak);
    } else {
      streak = 1;
      streakEl.textContent = streak;
      localStorage.setItem("streakLastChangeTime", today.getTime().toString());
      localStorage.setItem("streak", streak);
    }
  } else {
    streak = 1;
    streakEl.textContent = streak;
    localStorage.setItem("streakLastChangeTime", today.getTime().toString());
    localStorage.setItem("streak", streak);
  }

  return streak;
}
