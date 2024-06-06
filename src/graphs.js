// Showing statistics about the student's performance

export function generateGraph() {
  const contentArea = document.querySelector(".content-area");
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

export function buildGraph(stats) {
  const ctx = document.getElementById("myChart");

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let practisedPhrData = [];
  let correctPhrasesData = [];

  for (let i = 6; i >= 0; i--) {
    const foundElement = stats.find(({ timestamp }) => {
      const pastDate = new Date(today);
      pastDate.setDate(today.getDate() - i);
      const date = new Date(timestamp);

      return (
        date.getDate() === pastDate.getDate() &&
        date.getMonth() === pastDate.getMonth() &&
        date.getFullYear() === pastDate.getFullYear()
      );
    });

    if (foundElement) {
      practisedPhrData.push(foundElement.nbOfPhrPractised);
      correctPhrasesData.push(foundElement.nbOfCorrectPhr);
    } else {
      practisedPhrData.push(0);
      correctPhrasesData.push(0);
    }
  }

  const correctPhrasesDataNormalized = [];
  for (let i = 0; i < correctPhrasesData.length; i++) {
    const el = (correctPhrasesData[i] / practisedPhrData[i]) * 100;
    correctPhrasesDataNormalized.push(el);
  }
  /*
  const practisedPhrDataNormalized = [];
  for (let i = 0; i < practisedPhrData.length; i++) {
    const el = (practisedPhrData[i] / practisedPhrData[i]) * 100;
    practisedPhrDataNormalized.push(el);
  }
*/
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const todaysDayofWeek = today.getDay();

  const rearrangedDayNames = [];

  for (let i = todaysDayofWeek + 1; i < 7; i++) {
    rearrangedDayNames.push(dayNames[i]);
  }

  for (let i = 0; i <= todaysDayofWeek; i++) {
    rearrangedDayNames.push(dayNames[i]);
  }

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: rearrangedDayNames,
      datasets: [
        
        {
          label: "% of correct answers",
          //data: correctPhrasesData,
          data: correctPhrasesDataNormalized,
          borderWidth: 1,
          barThickness: 30,
          backgroundColor: "#2bc48c",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}


