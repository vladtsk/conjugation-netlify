import { handleContentNavClicks } from "./contentNav.js";

export function generateImparfaitPage() {
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
  
    const introLink = document.createElement("a");
  
    introLink.textContent = "The imperfect past tense";
  
    contentNav.appendChild(verbConjugationLink);
    contentNav.appendChild(iconSpan);
    contentNav.appendChild(introLink);
  
    // Create page-content div
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");
  
    const mainHeading = document.createElement("h1");
    mainHeading.textContent = `The imperfect past tense "l'imparfait"`;
  
    const subHeading = document.createElement("h2");
    subHeading.textContent = "When do you use the imperfect past tense?";
  
    const definitionDiv = document.createElement("div");
    definitionDiv.classList.add("definition");
  
    const definitionParagraph = document.createElement("p");
    definitionParagraph.innerHTML =
      `<i class="fa-solid fa-book-open"></i> <b>The imperfect tense "l'imparfait"</b> 
      is a common French past tense, which is mostly used to express a habit, make a description, explain a situation, or an ongoing action in the past. `;
  
    definitionDiv.appendChild(definitionParagraph);

    pageContent.appendChild(mainHeading);
    pageContent.appendChild(subHeading);
    pageContent.appendChild(definitionDiv);



  
    const exampleH3 = document.createElement("h3");
    exampleH3.textContent = "Take a look at these examples:";

    const examplesUl = document.createElement("ul");
    examplesUl.classList.add("list-no-bullet");

    examplesUl.innerHTML = `<li><i>Je <b>lisais</b> tous les jours.</i> (I used to read every day.)</li>
    <li><i>Avant, je <b>sortais</b> tous les soirs.</i> (I used to go out every evening.)</li>
    <li><i>Il <b>faisait</b> froid et il y avait beaucoup de vent.</i> (It was cold and very windy.)</li>
    <li><i>J'<b>avais</b> les cheveux courts.</i> (I used to have short hair. / I had short hair.)</li>
    <li><i>Quelqu'un est venu pendant que je <b>dormais</b>.</i> (Someone came while I was sleeping.)</li>`

    pageContent.appendChild(exampleH3);
    pageContent.appendChild(examplesUl);



const subHeading2 = document.createElement("h2");
subHeading2.textContent = "To form the imperfect tense of regular verbs, follow these steps: ";

pageContent.appendChild(subHeading2);

const stepsP = document.createElement("p");
stepsP.innerHTML = `Use the 'nous' form of the verb in the present tense, 
remove the '-ons' ending, and add the appropriate ending (-<b>ais</b>, -<b>ais</b>, -<b>ait</b>, -<b>ions</b>, -<b>iez</b>, -<b>aient</b>.). `

const stepP2 = document.createElement("p");
stepP2.innerHTML = `For example, the verbs <b>'parler'</b> and <b>'finir'</b> have the following 'nous' forms:  
'nous parlons' and 'nous finissons'. So in order to conjugate them with 'je' in the imperfect tense, you 
need to remove the '-ons' ending and add '-ais', which gives: <b>'je parlais'</b> and <b>'je finissais'</b>. 
You'll find more details in the table below.`;



pageContent.appendChild(stepsP);
pageContent.appendChild(stepP2);


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
    ['Je', '-ais', 'parlais, finissais'],
    ['Tu', '-ais', 'parlais, finissais'],
    ['Il/elle/on', '-ait', 'parlait, finissait'],
    ['Nous', '-ions', 'parlions, finissions'],
    ['Vous', '-iez', 'parliez, finissiez'],
    ['Ils/elles', '-aient', 'parlaient, finissaient']
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

const pronouncTipDiv = document.createElement("div");
    pronouncTipDiv.classList.add("definition");
    pageContent.appendChild(pronouncTipDiv);

    const pronouncTipP = document.createElement("p");
    pronouncTipP.innerHTML = '<i class="fa-solid fa-comment"></i> <b>Pronunciation tip</b>';

    const pronouncTipP1 = document.createElement("p");
    pronouncTipP1.classList.add("tip");
    pronouncTipP1.innerHTML = `The 'je', 'tu', 'il/elle/on' and 'ils/elles' forms have the same pronunciation, 
    so 'parlais', 'parlait', 'parlaient' are pronounced the same way.`;

    pronouncTipDiv.appendChild(pronouncTipP);
    pronouncTipDiv.appendChild(pronouncTipP1);





contentArea.appendChild(pageContent);

handleContentNavClicks();
  
  }