import { handleContentNavClicks } from "./contentNav.js";

export function generateFutureSpellingPage() {
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

    const futureSpellingLink = document.createElement("a");
    futureSpellingLink.textContent = "Spelling changes";
  
    contentNav.appendChild(verbConjugationLink);
    contentNav.appendChild(iconSpan);
    contentNav.appendChild(futureTenseLink);
    contentNav.appendChild(iconSpan1);
    contentNav.appendChild(futureSpellingLink);
  
    // Create page-content div
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");
    contentArea.appendChild(pageContent);
  
    const mainHeading = document.createElement("h1");
    mainHeading.textContent = "Verbs with spelling changes";
  
    const definitionDiv = document.createElement("div");
    definitionDiv.classList.add("definition");
  
    const definitionParagraph = document.createElement("p");
    definitionParagraph.innerHTML =
      `<i class="fa-solid fa-lightbulb"></i> Some French <b>-er</b> verbs change their spellings in the simple future tense.
       Some verbs ending in <b>-eler</b> and <b>-eter</b> double the <b><i>l</i></b> or <b><i>t</i></b> in their conjugations.`;
  
    definitionDiv.appendChild(definitionParagraph);

    pageContent.appendChild(mainHeading);
    pageContent.appendChild(definitionDiv);

    const examplesIntro = document.createElement("p");
    examplesIntro.textContent = "Take a look at the example of the verbs 'appeler' and 'jeter':";
    pageContent.appendChild(examplesIntro);

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement("tr"); 

    table.appendChild(thead);
    thead.appendChild(headerRow);

    const headers = ["", "appeler (to call)", "jeter (to throw)"];

    headers.forEach(headerEl => {
        const th = document.createElement("th");
        th.textContent = headerEl;
        headerRow.appendChild(th);

    })

    const tbody = document.createElement("tbody");
    table.appendChild(tbody);

    const tableContent = [
        ["je (j')", "j'appellerai", "je jetterai"],
        ["tu", "tu appelleras", "tu jetteras"],
        ["il(/elle/on)", "il appellera", "il jettera"],
        ["nous", "nous appellerons", "nous jetterons"],
        ["vous", "vous appellerez", "vous jetterez"],
        ["ils(/elles)", "ils appelleront", "ils jetteront"],
    ];

    tableContent.forEach(trowEl => {
        const trow = document.createElement("tr");
        tbody.appendChild(trow);

        trowEl.forEach(tcellEL => {
            const tdata = document.createElement("td");
            tdata.textContent = tcellEL;
            trow.appendChild(tdata);
        }) 
    })

    pageContent.appendChild(table);


    const explanaition = document.createElement("div");
    explanaition.innerHTML = `<p class="tip"><i class="fa-solid fa-bolt"></i> In some verbs like <b>lever</b> (to raise), <b>acheter</b> (to buy), 
    and <b>peser</b> (to weigh), the first 'e' changes to <b>'è'</b></p>`;

    pageContent.appendChild(explanaition);


    const table1 = document.createElement('table');

    const thead1 = document.createElement('thead');
    const headerRow1 = document.createElement('tr');

    const headers1 = ["", "lever", "acheter", "peser"];
    headers1.forEach(headerEl => {
    const th = document.createElement('th');
    th.textContent = headerEl;
    headerRow1.appendChild(th);
    });

    thead1.appendChild(headerRow1);

    const tbody1 = document.createElement('tbody');
    const rowsData = [
    ["je (j')", "je lèverai", "j'achèterai", "je pèserai"],
    ["tu", "tu lèveras", "tu achèteras", "tu pèseras"],
    ["il (/elle/on)", "il lèvera", "il achètera", "il pèsera"],
    ["nous", "nous lèverons", "nous achèterons", "nous pèserons"],
    ["vous", "vous lèverez", "vous achèterez", "vous pèserez"],
    ["ils (/elles)", "ils lèveront", "ils achèteront", "ils pèseront"]
    ];

    rowsData.forEach(rowData => {
    const row = document.createElement('tr');
    rowData.forEach(cellData => {
    const td = document.createElement('td');
    td.textContent = cellData;
    row.appendChild(td);
    });
    tbody1.appendChild(row);
    });

    table1.appendChild(thead1);
    table1.appendChild(tbody1);

    pageContent.appendChild(table1);


    contentArea.appendChild(pageContent);
  
    handleContentNavClicks();
  }