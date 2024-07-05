import { handleContentNavClicks } from "./contentNav.js";

export function generateSubjunctiveStructurePage() {
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

    const structure = document.createElement("a");
  
    structure.textContent = "The structure";
  
    contentNav.appendChild(verbConjugationLink);
    contentNav.appendChild(iconSpan);
    contentNav.appendChild(subjunctiveLink);
    contentNav.appendChild(iconSpan2);
    contentNav.appendChild(structure);

  
    // Create page-content div
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");
  
    const mainHeading = document.createElement("h1");
    mainHeading.textContent = `Conjugating a verb in the present subjunctive`;
    pageContent.appendChild(mainHeading);
    const conjugationDiv = document.createElement("div");
    conjugationDiv.classList.add("conjugation");

    const conjugationHeading = document.createElement("h2");
    conjugationHeading.textContent = "To conjugate a verb in the present subjunctive:";
    conjugationDiv.appendChild(conjugationHeading);

    const conjugationParagraph1 = document.createElement("p");
    conjugationParagraph1.innerHTML = `For <b>je, tu, il/elle/on, ils/elles</b>, remove the ending from the 3rd person plural present 
    (indicative) tense (ils/elles form) and add the subjunctive endings (<b>-e, -es, -e, -ent</b>). 

    For example, the present (indicative) conjugation of the verb <b>'venir'</b> (to come) for 'ils/elles' is 'ils <u>viennent</u>', 
    so by removing the '-ent' ending and adding the subjunctive endings, we'll get the present subjunctive conjugations: 
    <i>que je <b>vienne</b>, que tu <b>viennes</b>, qu'il <b>vienne</b>, qu'ils <b>viennent</b>.</i>`;
    conjugationDiv.appendChild(conjugationParagraph1);

    const conjugationParagraph2 = document.createElement("p");
    conjugationParagraph2.innerHTML = `<b>For nous and vous forms</b>, remove the ending from the 1st person plural present indicative (nous form) and add the subjunctive endings (<b>-ions, -iez</b>): so the regular present conjugation ‘nous venons’ transforms to the subjunctive forms <i>que <b>nous venions</b></i>, <i>que <b>vous veniez</b></i>.`;
    conjugationDiv.appendChild(conjugationParagraph2);

    const examplesHeading = document.createElement("h3");
    examplesHeading.textContent = "Examples of Conjugation:";
    conjugationDiv.appendChild(examplesHeading);

    pageContent.appendChild(conjugationDiv);

    const table = document.createElement('table');

    // Create thead
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    // Create and append headers
    const headers = ["", "venir", "finir", "donner"];
    headers.forEach(headerEl => {
    const th = document.createElement('th');
    th.textContent = headerEl;
    headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);

    // Create tbody
    const tbody = document.createElement('tbody');
    const rowsData = [
    ["je", "que je vienne", "que je finisse", "que je donne"],
    ["tu", "que tu viennes", "que tu finisses", "que tu donnes"],
    ["il/elle/on", "qu'il vienne", "qu'il finisse", "qu'il donne"],
    ["nous", "que nous venions", "que nous finissions", "que nous donnions"],
    ["vous", "que vous veniez", "que vous finissiez", "que vous donniez"],
    ["ils/elles", "qu'ils viennent", "qu'ils finissent", "qu'ils donnent"]
    ];

    // Create and append rows and cells
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

    // Append table to the page content
    pageContent.appendChild(table);




    contentArea.appendChild(pageContent);

    handleContentNavClicks();
}
