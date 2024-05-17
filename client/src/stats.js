import { buildGraph } from "./graphs.js";
import { getUser, readStatsFromDb } from "./readDbData.js";

import { ref, app, getDatabase } from "./config.js";

const database = getDatabase(app);

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

const statsBtn = document.querySelector(".stats");
const practiceBtn = document.querySelector(".practice");

statsBtn.addEventListener("click", () => {
  console.log(statsBtn);
  showStats();
  practiceBtn.classList.remove("select");
  statsBtn.classList.add("select");
});

function generateGraph() {
  const contentArea = document.querySelector(".content-area");
  contentArea.innerHTML = "";
  const graphDiv = document.createElement("div");
  contentArea.appendChild(graphDiv);
  graphDiv.classList.add("chart");

  const graphTitle = document.createElement("h2");
  graphDiv.appendChild(graphTitle);
  graphTitle.innerText = "Your weekly performance";

  const canvasEl = document.createElement("canvas");
  graphDiv.appendChild(canvasEl);
  canvasEl.setAttribute("id", "myChart");
}
