import { handleContentNavClicks } from "./contentNav.js";

export function generateFuturePage() {
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
  
    contentNav.appendChild(verbConjugationLink);
    contentNav.appendChild(iconSpan);
    contentNav.appendChild(futureTenseLink);
  
    // Create page-content div
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");
  
    const mainHeading = document.createElement("h1");
    mainHeading.textContent = "The simple future tense (le futur simple)";
  
    const subHeading = document.createElement("h2");
    subHeading.textContent = "When Do You Use the Present Tense in French?";
  
    const definitionDiv = document.createElement("div");
    definitionDiv.classList.add("definition");
  
    const definitionParagraph = document.createElement("p");
    definitionParagraph.innerHTML =
      `<i class="fa-solid fa-lightbulb"></i> In French, <span class="tense-name">the simple future tense</span> (le futur simple) is used to describe future actions. 
      It is often translated into English using 'will' (or its contracted form "'ll") and sometimes other structures used to talk about 
      the future, like 'to be going to' or the present tense.`;
  
    definitionDiv.appendChild(definitionParagraph);
  
    const examplesDiv = document.createElement("div");
    examplesDiv.classList.add("examples");
  
    const examplesIntro = document.createElement("p");
    examplesIntro.textContent = "Here are a few examples:";
  
    const example1 = document.createElement("p");
    example1.innerHTML =
      "<i>Il <b>fera</b> chaud demain.</i> (The weather <b>will be</b> warm tomorrow.)";
  
    const example2 = document.createElement("p");
    example2.innerHTML =
      "<i>Je te <b>rappellerai</b> plus tard.</i> (I'<b>ll call</b> you <b>back</b> later.)";
  
    const example3 = document.createElement("p");
    example3.innerHTML =
      "<i>Il <b>sera</b> bientôt là.</i> (He<b>'ll be</b> here soon.)";
  
    const example4 = document.createElement("p");
    example4.innerHTML =
      "<i>Vous <b>arrivez</b> à 16h.</i> (You <b>arrive</b> at 4pm.)";
  
    examplesDiv.appendChild(examplesIntro);
    examplesDiv.appendChild(example1);
    examplesDiv.appendChild(example2);
    examplesDiv.appendChild(example3);
    examplesDiv.appendChild(example4);
  
    pageContent.appendChild(mainHeading);
    pageContent.appendChild(subHeading);
    pageContent.appendChild(definitionDiv);
    pageContent.appendChild(examplesDiv);
  


    const explanaition = document.createElement("div");
    explanaition.innerHTML = `<p class="tip"><i class="fa-solid fa-bolt"></i> To form the simple future tense in French, you generally use 
    the infinitive form of the verb and add specific endings. For <b>-re</b> verbs, you drop the final <b>-e</b> before adding the endings.</p>`;

    pageContent.appendChild(explanaition);

    const stepsP = document.createElement("p");
    stepsP.innerHTML = `You'll find the endings and examples in the table below.`

    pageContent.appendChild(stepsP);

    const table = document.createElement('table');

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    const headers = ['SUBJECT', 'ENDING', 'EXAMPLES'];
    headers.forEach(headerEl => {
    const th = document.createElement('th');
    th.textContent = headerEl;
    headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);

    const tbody = document.createElement('tbody');
    const rowsData = [
    ["Je (j')", "-ai", "je donnerai, je finirai, j'attendrai"],
    ["Tu", "-as", "tu donneras, tu finiras, tu attendras"],
    ["Il/elle/on", "-a", "il/elle/on donnera, il/elle/on finira, il/elle/on attendra"],
    ["Nous", "-ons", "nous donnerons, nous finirons, nous attendrons"],
    ["Vous", "-ez", "vous donnerez, vous finirez, vous attendrez"],
    ["Ils/elles", "-ont", "ils/elles donneront, ils/elles finiront, ils/elles attendront"]
    ];

    rowsData.forEach(rowData => {
    const row = document.createElement('tr');
    rowData.forEach(cellData => {
    const td = document.createElement('td');
    td.textContent = cellData;
    row.appendChild(td);
    });
    tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);

    pageContent.appendChild(table);

    contentArea.appendChild(pageContent);
  
    handleContentNavClicks();
  }