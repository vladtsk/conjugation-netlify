// Showing statistics about the student's performance

export function generateGraph() {
  const main = document.querySelector("main");
  const graphDiv = document.createElement("div");
  main.appendChild(graphDiv);
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
      //labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      labels: rearrangedDayNames,
      datasets: [
        {
          label: "# of practised phrases",
          //data: [5, 10, 5, 15, 10, 5, 0],
          data: practisedPhrData,
          borderWidth: 1,
          backgroundColor: "#4677c7",
        },
        {
          label: "# of correct answers",
          //data: [3, 5, 5, 10, 5, 4, 0],
          data: correctPhrasesData,
          borderWidth: 1,
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
