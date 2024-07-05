import { handleContentNavClicks } from "./contentNav.js";

export function generateFutureExceptionsPage() {
    const contentArea = document.querySelector(".content-area");
    contentArea.innerHTML = "";
  
    const contentNav = document.createElement("div");
    contentNav.classList.add("contentNav");
    contentArea.appendChild(contentNav);
  
    const verbConjugationLink = document.createElement("a");
    verbConjugationLink.textContent = "Verb conjugation";
    verbConjugationLink.classList.add("verbConjugationLink");
  
    const iconSpan = document.createElement("span");
    iconSpan.classList.add("icon");
    const iconI = document.createElement("i");
    iconI.classList.add("fas", "fa-chevron-right");
    iconSpan.appendChild(iconI);
  
    const futureTenseLink = document.createElement("a");
    futureTenseLink.textContent = "The simple future tense";
    futureTenseLink.classList.add("futureTenseLink");

    const iconSpan1 = document.createElement("span");
    iconSpan1.classList.add("icon");
    const iconI1 = document.createElement("i");
    iconI1.classList.add("fas", "fa-chevron-right");
    iconSpan1.appendChild(iconI1);

    const futureExceptionsLink = document.createElement("a");
    futureExceptionsLink.textContent = "Exceptions";
  
    contentNav.appendChild(verbConjugationLink);
    contentNav.appendChild(iconSpan);
    contentNav.appendChild(futureTenseLink);
    contentNav.appendChild(iconSpan1);
    contentNav.appendChild(futureExceptionsLink);
  
    // Create page-content div
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");
    contentArea.appendChild(pageContent);
  
    const mainHeading = document.createElement("h1");
    mainHeading.textContent = "Exceptions";
  
    const definitionDiv = document.createElement("div");
    definitionDiv.classList.add("definition");
  
    const definitionParagraph = document.createElement("p");
    definitionParagraph.innerHTML =
      `<i class="fa-solid fa-lightbulb"></i> Some French verbs like <b>avoir</b> <i>(to have)</i>, <b>être</b> <i>(to be)</i>, 
      <b>aller</b> <i>(to go)</i>, and <b>faire</b> <i>(to do/make)</i> change their stem in the future simple tense, 
      though they use the same set of endings as regular verbs.`;
  
    definitionDiv.appendChild(definitionParagraph);

    pageContent.appendChild(mainHeading);
    pageContent.appendChild(definitionDiv);

    const intro = document.createElement("p");
    intro.textContent = "In the table below, you'll find the conjugations of these 4 irregular verbs in the future tense.";
    pageContent.appendChild(intro);

    const table = document.createElement('table');

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    const headers = ["", "avoir", "être", "aller", "faire"];
    headers.forEach(headerEl => {
    const th = document.createElement('th');
    th.textContent = headerEl;
    headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);

    const tbody = document.createElement('tbody');
    const rowsData = [
    ["je / j'", "j'<b>aur</b>ai", "je <b>ser</b>ai", "j'<b>ir</b>ai", "je <b>fer</b>ai"],
    ["tu", "tu <b>aur</b>as", "tu <b>ser</b>as", "tu <b>ir</b>as", "tu <b>fer</b>as"],
    ["il (/elle/on)", "il <b>aur</b>a", "il <b>ser</b>a", "il <b>ir</b>a", "il <b>fer</b>a"],
    ["nous", "nous <b>aur</b>ons", "nous <b>ser</b>ons", "nous <b>ir</b>ons", "nous <b>fer</b>ons"],
    ["vous", "vous <b>aur</b>ez", "vous <b>ser</b>ez", "vous <b>ir</b>ez", "vous <b>fer</b>ez"],
    ["ils (/elles)", "ils <b>aur</b>ont", "ils <b>ser</b>ont", "ils <b>ir</b>ont", "ils <b>fer</b>ont"]
    ];

    rowsData.forEach(rowData => {
    const row = document.createElement('tr');
    rowData.forEach(cellData => {
    const td = document.createElement('td');
    td.innerHTML = cellData;
    row.appendChild(td);
    });
    tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);

    pageContent.appendChild(table);

    const examplesDiv = document.createElement("div");
    examplesDiv.classList.add("examples");
  
    const examplesIntro = document.createElement("p");
    examplesIntro.textContent = "Here are a few examples:";
  
    const example1 = document.createElement("p");
    example1.innerHTML =
      "<i>J'<b>aurai</b> trois enfants.</i> (I <b>will have</b> three children.)";
  
    const example2 = document.createElement("p");
    example2.innerHTML =
      "<i>Tu <b>seras</b> déçue. </i> (You'<b>ll be</b> disappointed)";
  
    const example3 = document.createElement("p");
    example3.innerHTML =
      "<i>Elle <b>ira</b> en Italie l'année prochaine.</i> (She <b>will go</b> to Italy next year.)";
  
    const example4 = document.createElement("p");
    example4.innerHTML =
      "<i>Ils feront du tennis.</i> (They <b>will play</b> tennis.)";
  
    examplesDiv.appendChild(examplesIntro);
    examplesDiv.appendChild(example1);
    examplesDiv.appendChild(example2);
    examplesDiv.appendChild(example3);
    examplesDiv.appendChild(example4);

    pageContent.appendChild(examplesDiv);

    //const moreExampleDiv = document.createElement("div");
    //moreExampleDiv.classList.add("examples");

    const intro2 = document.createElement("h3");
    intro2.innerHTML = "Here are some more common verbs that change their stem in the future tense with 3 forms (<i>je</i>, <i>tu</i>, and <i>il</i>) as examples.";
    //moreExampleDiv.appendChild(intro2);
    pageContent.appendChild(intro2);


    const table1 = document.createElement('table');

    const thead1 = document.createElement('thead');
    const headerRow1 = document.createElement('tr');

    const headers1 = ["verb", "je / j'", "tu", "il (/elle/on)"];
    headers1.forEach(headerEl1 => {
        const th1 = document.createElement('th');
        th1.textContent = headerEl1;
        headerRow1.appendChild(th1);
    });

    thead1.appendChild(headerRow1);

    const tbody1 = document.createElement('tbody');
    const rowsData1 = [
        ["venir", "je <b>viendr</b>ai", "tu <b>viendr</b>as", "il <b>viendr</b>a"],
        ["voir", "je <b>verr</b>ai", "tu <b>verr</b>as", "il <b>verr</b>a"],
        ["pouvoir", "je <b>pourr</b>ai", "tu <b>pourr</b>as", "il <b>pourr</b>a"],
        ["devoir", "je <b>devr</b>ai", "tu <b>devr</b>as", "il <b>devr</b>a"],
        ["vouloir", "je <b>voudr</b>ai", "tu <b>voudr</b>as", "il <b>voudr</b>a"],
        ["recevoir", "je <b>recevr</b>ai", "tu <b>recevr</b>as", "il <b>recevr</b>a"],
        ["envoyer", "j'<b>enverr</b>ai", "tu <b>enverr</b>as", "il <b>enverr</b>a"],
        ["savoir", "je <b>saur</b>ai", "tu <b>saur</b>as", "il <b>saur</b>a"],
        ["valoir", "je <b>vaudr</b>ai", "tu <b>vaudr</b>as", "il <b>vaudr</b>a"],
        ["tenir", "je <b>tiendr</b>ai", "tu <b>tiendr</b>as", "il <b>tiendr</b>a"],
        ["falloir", "-", "-", "il <b>faudr</b>a"],
        ["pleuvoir", "-", "-", "il <b>pleuvr</b>a"]
    ];

        rowsData1.forEach(rowData1 => {
            const row1 = document.createElement('tr');
            rowData1.forEach(cellData1 => {
                const td1 = document.createElement('td');
                td1.innerHTML = cellData1;
                row1.appendChild(td1);
            });
            tbody1.appendChild(row1);
        });

        table1.appendChild(thead1);
        table1.appendChild(tbody1);

        pageContent.appendChild(table1);



        contentArea.appendChild(pageContent);
    
        handleContentNavClicks();
    }