export function generatePastCompAuxPage() {
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
  
    pastAux.textContent = "'Avoir' VS 'être'";
  
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
    subHeading.innerHTML = "Verbs conjugated with 'avoir' and 'être'";
  
    const definitionDiv = document.createElement("div");
    definitionDiv.classList.add("definition");
  
    const definitionParagraph = document.createElement("p");
    definitionParagraph.innerHTML =
      `<i class="fa-solid fa-lightbulb"></i> In French, most verbs form their Passé Composé with <span class="tense-name">avoir</span>:
        <i>"j'ai regardé"</i>, <i>"elle a donné"</i>, <i>"il a acheté"</i>, etc.`;
  
    definitionDiv.appendChild(definitionParagraph);
  
  
    const paragraph2 = document.createElement("p");
    paragraph2.classList.add("tip");
    paragraph2.innerHTML = `There are two main groups of verbs that form their perfect tense with <i></i>'être'</i> instead
    of avoir:`;

    pageContent.appendChild(mainHeading);
    pageContent.appendChild(subHeading);
    pageContent.appendChild(definitionDiv);
    pageContent.appendChild(paragraph2);


    const examplesUl = document.createElement("div");
    examplesUl.classList.add("list-no-bullet");

    examplesUl.innerHTML = `<li><i class="fa-solid fa-arrow-right"></i> all reflexive verbs (verbs with 'se' in the
    infinitive form: se lever, se coucher, se
    raser…)</li>
    <li><i class="fa-solid fa-arrow-right"></i> a small group of French verbs that are mainly used
    to talk about movement or a change of some kind (see the table below).</li>`

    pageContent.appendChild(examplesUl);

    //Create table 
    const table = document.createElement('table');

const thead = document.createElement('thead');
const titleRow = document.createElement('tr');
const titleCell = document.createElement('th');
titleCell.colSpan = 3;
titleCell.className = 'table-title';
titleCell.textContent = "Common French verbs conjugated with 'être'";
titleRow.appendChild(titleCell);
thead.appendChild(titleRow);

const headerRow = document.createElement('tr');
const headers = ['Verb', 'Translation', 'Conjugation example'];
headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
});
thead.appendChild(headerRow);

const tbody = document.createElement('tbody');
const verbs = [
    { verb: 'aller', translation: 'to go', example: 'Je suis allé.' },
    { verb: 'venir', translation: 'to come', example: 'Elle est venue.' },
    { verb: 'revenir', translation: 'to come back', example: 'Nous sommes revenus.' },
    { verb: 'arriver', translation: 'to arrive', example: 'Ils sont arrivés.' },
    { verb: 'entrer', translation: 'to enter', example: 'Il est entré.' },
    { verb: 'rentrer', translation: 'to come (back) home', example: 'Tu es rentré.' },
    { verb: 'partir', translation: 'to leave', example: 'Elle est partie.' },
    { verb: 'rester', translation: 'to stay', example: 'Je suis resté.' },
    { verb: 'sortir', translation: 'to go out', example: 'Ils sont sortis.' },
    { verb: 'retourner', translation: 'to go back', example: 'Nous sommes retournés.' },
    { verb: 'tomber', translation: 'to fall', example: 'Vous êtes tombé.' }
];

verbs.forEach(verb => {
    const row = document.createElement('tr');
    
    const verbCell = document.createElement('td');
    const verbText = document.createElement('b');
    verbText.textContent = verb.verb;
    verbCell.appendChild(verbText);
    row.appendChild(verbCell);
    
    const translationCell = document.createElement('td');
    translationCell.textContent = verb.translation;
    row.appendChild(translationCell);
    
    const exampleCell = document.createElement('td');
    exampleCell.textContent = verb.example;
    row.appendChild(exampleCell);
    
    tbody.appendChild(row);
});

table.appendChild(thead);
table.appendChild(tbody);

pageContent.appendChild(table);

const tip1P = document.createElement("p");
    tip1P.classList.add("tip")
    tip1P.innerHTML = `A few more verbs conjugated with 'être': <i><b>devenir</i></b> (to become), <b><i>monter</i></b>
    (to go up), <i><b>descendre</b></i> (to go down), <i><b>passer</b></i> (to go past, to pass (by)), <i><b>naître</b></i> (to be born),
    <i><b>mourir</b></i> (to die).`;

    const tip2P = document.createElement("p");
    tip2P.classList.add("tip")
    tip2P.innerHTML = `<i class="fa-solid fa-exclamation-triangle"></i> Note that the verbs <i>passer</i>,
    <i>entrer</i>, <i>sortir</i>, <i>monter</i>, <i>retourner</i> can also be conjugated with 'avoir' in some cases.`;

    pageContent.appendChild(tip1P);
    pageContent.appendChild(tip2P);




  
contentArea.appendChild(pageContent);
  
  }