export function generatePastCompParticPage() {
    const contentArea = document.querySelector(".content-area");
    contentArea.innerHTML = "";
  
    const contentNav = document.createElement("div");
    contentNav.classList.add("contentNav");
    contentArea.appendChild(contentNav);
  
    const verbConjugationLink = document.createElement("a");
    verbConjugationLink.textContent = "Verb conjugation";
  
    const iconSpan = document.createElement("span");
    iconSpan.classList.add("icon");
    const iconI = document.createElement("i");
    iconI.classList.add("fas", "fa-chevron-right");
    iconSpan.appendChild(iconI);
  
    const pastTenseLink = document.createElement("a");
  
    pastTenseLink.textContent = "Passé Composé";

    const iconSpan2 = document.createElement("span");
    iconSpan.classList.add("icon");
    const iconI2 = document.createElement("i");
    iconI2.classList.add("fas", "fa-chevron-right");
    iconSpan2.appendChild(iconI2)

    const pastAux = document.createElement("a");
  
    pastAux.textContent = "Past participle";
  
    contentNav.appendChild(verbConjugationLink);
    contentNav.appendChild(iconSpan);
    contentNav.appendChild(pastTenseLink);
    contentNav.appendChild(iconSpan2);
    contentNav.appendChild(pastAux);
  
    // Create page-content div
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");
  
    const mainHeading = document.createElement("h1");
    mainHeading.innerHTML = "The past tense <span class='tense-name'>Passé Composé</span>";
  
    const subHeading = document.createElement("h2");
    subHeading.innerHTML = "The past participle";

    pageContent.appendChild(mainHeading);
    pageContent.appendChild(subHeading);
  
    const definitionDiv = document.createElement("div");
    definitionDiv.classList.add("definition");
  
    const definitionParagraph = document.createElement("p");
    definitionParagraph.innerHTML =
      `As mentioned in a previous chapter, to conjugate a French verb in the Passé Composé, you need to know its <b>past participle</b> form.`;
  
    definitionDiv.appendChild(definitionParagraph);
    pageContent.appendChild(definitionDiv);

    const divTip = document.createElement("div");
  
    
    divTip.innerHTML = `<p class='tip'><i class="fa-solid fa-bolt"></i> To form the <b>past participle</b> of
    <b>-er verbs</b>, you replace the -er at the end of the infinitive with -é.</p>`

  
    pageContent.appendChild(divTip);


    const tableER = document.createElement("table");
    const tableHead = document.createElement("thead");

    const headerRow = document.createElement('tr');
    const headers = ['Infinitive', 'Translation', 'Past participle'];

    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    })

    tableHead.appendChild(headerRow);
    tableER.appendChild(tableHead);

    const tbody = document.createElement('tbody');

    const tableERData = [
        ['<b>parler</b>', 'to speak', '<b>parl<span class="red">é</span></b>'],
        ['<b>aller</b>', 'to go', '<b>all<span class="red">é</span></b>'],
        ['<b>manger</b>', 'to eat', '<b>mang<span class="red">é</span></b>'],
    ];

    tableERData.forEach(rowData => {
        const row = document.createElement('tr');
        rowData.forEach(cellData => {
            const td = document.createElement('td');
            td.innerHTML = cellData;
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });

    tableER.appendChild(tbody);

    pageContent.appendChild(tableER);

    contentArea.appendChild(pageContent);
  
  }