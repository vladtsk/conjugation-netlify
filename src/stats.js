import { buildGraph } from "./graphs.js";
import { getUser, readStatsFromDb } from "./readDbData.js";

import { ref, fetchFirebaseConfig, getAuth, getDatabase } from "./firebaseConfig.js";

let auth, database;

async function getAuthDatabase() {
  const { app } = await fetchFirebaseConfig();
  auth = getAuth(app);
  database = getDatabase(app);
}

getAuthDatabase();

async function showStats() {
  const userId = await getUser();
  if (userId) {
    const statsRef = ref(database, "users/" + userId + "/data/" + "/stats");
    const stats = await readStatsFromDb(statsRef);

    generateGraph();
    buildGraph(stats);
  } else {
    const contentArea = document.querySelector(".content-area");
    contentArea.innerHTML = "";
    const premiumStatsH1 = document.createElement("h1");
    contentArea.appendChild(premiumStatsH1);
    premiumStatsH1.innerHTML =
      "<i class='fa-regular fa-gem'></i> This is a premium feature";

    const premiumStatsMessage = document.createElement("div");
    contentArea.appendChild(premiumStatsMessage);
    premiumStatsMessage.classList.add("premiumStatsMessage");
    premiumStatsMessage.innerHTML = `<p>Subscribe to follow your progress, practise more verbs and take advantage of our Smart Repetition 
      System!</p><p>Log in if you already have an account.</p>`;
  }
}

export function openStatsPage() {
  const statsBtn = document.querySelectorAll(".stats");
  const learnBtn = document.querySelectorAll(".learn");
  const practiceBtn = document.querySelectorAll(".practice");


  statsBtn.forEach(btn => {btn.addEventListener("click", () => {
    showStats();
    practiceBtn.forEach(btn => {
      btn.classList.remove("select");
    })

    learnBtn.forEach(btn => {
      btn.classList.remove("select"); 
    })

    statsBtn.forEach(btn => {
      btn.classList.add("select"); 
    })
  });
  })
}


function generateGraph() {
  const contentArea = document.querySelector(".content-area");
  contentArea.innerHTML = "";
  const graphDiv = document.createElement("div");
  contentArea.appendChild(graphDiv);
  graphDiv.classList.add("chart");

  const graphTitle = document.createElement("h1");
  graphDiv.appendChild(graphTitle);
  graphTitle.innerHTML = "<i class='fa-solid fa-square-poll-vertical'></i> Your weekly performance";

  const canvasEl = document.createElement("canvas");
  graphDiv.appendChild(canvasEl);
  canvasEl.setAttribute("id", "myChart");
}
