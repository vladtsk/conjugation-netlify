import { handleContentNavClicks } from "./contentNav.js";

export function generateSubjunctiveIrregularPage() {
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
  
    const subjunctiveLink = document.createElement("a");
    subjunctiveLink.textContent = "The French subjunctive";
    subjunctiveLink.classList.add("subjunctiveLink");

    const iconSpan2 = document.createElement("span");
    iconSpan2.classList.add("icon");
    const iconI2 = document.createElement("i");
    iconI2.classList.add("fas", "fa-chevron-right");
    iconSpan2.appendChild(iconI2);

    const irregular = document.createElement("a");
  
    irregular.textContent = "Irregular verbs";
  
    contentNav.appendChild(verbConjugationLink);
    contentNav.appendChild(iconSpan);
    contentNav.appendChild(subjunctiveLink);
    contentNav.appendChild(iconSpan2);
    contentNav.appendChild(irregular);

  
    // Create page-content div
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");
  
    const mainHeading = document.createElement("h1");
    mainHeading.textContent = `Irregular verbs`;
    pageContent.appendChild(mainHeading);
    
    const conjugationDiv = document.createElement("div");
    conjugationDiv.classList.add("conjugation");


    const conjugationParagraph = document.createElement("p");
    conjugationParagraph.innerHTML = `Some irregular verbs and their subjunctive forms include <b>avoir</b> (to have), <b>être</b> (to be),
    <b>faire</b> (to do/make), <b>aller</b> (to go), <b>savoir</b> (to know), <b>pouvoir</b> (to be able to), <b>vouloir</b> (to want), and <b>pleuvoir</b> (to rain). 
    You'll find the conjugations of these verbs in the present subjunctive in the tables below.`;
    conjugationDiv.appendChild(conjugationParagraph);
    pageContent.appendChild(conjugationDiv);

    const tableContainer1 = document.createElement("div");
    const tableContainer2 = document.createElement("div");
    tableContainer1.classList.add("table-container");
    tableContainer2.classList.add("table-container");

    const table1 = document.createElement('table');
    const table2 = document.createElement('table');
    
    // Create thead for table 1
    const thead1 = document.createElement('thead');
    const headerRow1 = document.createElement('tr');
    
    // Create headers for table 1
    const headers1 = ["", "avoir", "être", "faire", "aller"];
    headers1.forEach(headerEl => {
      const th = document.createElement('th');
      th.textContent = headerEl;
      headerRow1.appendChild(th);
    });
    
    thead1.appendChild(headerRow1);
    
    // Create tbody for table 1
    const tbody1 = document.createElement('tbody');
    const rowsData1 = [
      ["je", "que j'aie", "que je sois", "que je fasse", "que j'aille"],
      ["tu", "que tu aies", "que tu sois", "que tu fasses", "que tu ailles"],
      ["il/elle/on", "qu'il ait", "qu'il soit", "qu'il fasse", "qu'il aille"],
      ["nous", "que nous ayons", "que nous soyons", "que nous fassions", "que nous allions"],
      ["vous", "que vous ayez", "que vous soyez", "que vous fassiez", "que vous alliez"],
      ["ils/elles", "qu'ils aient", "qu'elles soient", "qu'ils fassent", "qu'ils aillent"]
    ];
    
    // Create and append rows and cells for table 1
    rowsData1.forEach(rowData => {
      const row = document.createElement('tr');
      rowData.forEach(cellData => {
        const td = document.createElement('td');
        td.innerHTML = cellData;
        row.appendChild(td);
      });
      tbody1.appendChild(row);
    });
    
    table1.appendChild(thead1);
    table1.appendChild(tbody1);
    
    // Create thead for table 2
    const thead2 = document.createElement('thead');
    const headerRow2 = document.createElement('tr');
    
    // Create headers for table 2
    const headers2 = ["", "savoir", "pouvoir", "vouloir", "pleuvoir"];
    headers2.forEach(headerEl => {
      const th = document.createElement('th');
      th.textContent = headerEl;
      headerRow2.appendChild(th);
    });
    
    thead2.appendChild(headerRow2);
    
    // Create tbody for table 2
    const tbody2 = document.createElement('tbody');
    const rowsData2 = [
      ["je", "que je sache", "que je puisse", "que je veuille", " "],
      ["tu", "que tu saches", "que tu puisses", "que tu veuilles", " "],
      ["il/elle/on", "qu'il sache", "qu'il puisse", "qu'il veuille", "qu’il pleuve"],
      ["nous", "que nous sachions", "que nous puissions", "que nous voulions", " "],
      ["vous", "que vous sachiez", "que vous puissiez", "que vous vouliez", " "],
      ["ils/elles", "qu'ils sachent", "qu'ils puissent", "qu'ils veuillent", " "]
    ];
    
    // Create and append rows and cells for table 2
    rowsData2.forEach(rowData => {
      const row = document.createElement('tr');
      rowData.forEach(cellData => {
        const td = document.createElement('td');
        td.innerHTML = cellData;
        row.appendChild(td);
      });
      tbody2.appendChild(row);
    });
    
    table2.appendChild(thead2);
    table2.appendChild(tbody2);
    
    // Append tables to the page content
    tableContainer1.appendChild(table1);
    tableContainer2.appendChild(table2);
    
    pageContent.appendChild(tableContainer1);
    pageContent.appendChild(tableContainer2);

    
    




    contentArea.appendChild(pageContent);

    handleContentNavClicks();
}
