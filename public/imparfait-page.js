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
    ['Je', '-ais', 'parl<b>ais</b>, finiss<b>ais</b>'],
    ['Tu', '-ais', 'parl<b>ais</b>, finiss<b>ais</b>'],
    ['Il/elle/on', '-ait', 'parl<b>ait</b>, finiss<b>ait</b>'],
    ['Nous', '-ions', 'parl<b>ions</b>, finiss<b>ions</b>'],
    ['Vous', '-iez', 'parl<b>iez</b>, finiss<b>iez</b>'],
    ['Ils/elles', '-aient', 'parl<b>aient</b>, finiss<b>aient</b>']
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


const exceptionDiv = document.createElement("div");
exceptionDiv.classList.add("explanation");
pageContent.appendChild(exceptionDiv);

const exceptionP = document.createElement("p");
exceptionP.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> The exception is the verb '<b>être</b>', which uses the stem <b>ét-</b> 
instead of the "nous" form from the present tense:`;

const exceptionP2 = document.createElement("p");
exceptionP2.innerHTML = "<i class='fa-solid fa-arrow-right'></i> j'<b>ét</b>ais, tu <b>ét</b>ais, il/elle/on <b>ét</b>ait, nous <b>ét</b>ions, vous <b>ét</b>iez, ils/elles <b>ét</b>aient. "


exceptionDiv.appendChild(exceptionP);
exceptionDiv.appendChild(exceptionP2);


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



const subHeading22 = document.createElement("h2");
subHeading22.textContent = "A few more exceptions and difficulties";

pageContent.appendChild(subHeading22);

const subHeading3 = document.createElement("h3");
subHeading3.innerHTML = "Verbs ending in <i>-ger</i>";

pageContent.appendChild(subHeading3);

const particulDiv = document.createElement("div");
pageContent.appendChild(particulDiv);

const particulP1 = document.createElement("p");
particulP1.innerHTML = `Verbs ending in <b>-ger</b> have an additional "e" in the 'nous' form of the present tense: 'nous mang<u>e</u>ons'. 
As this form is used to construct the imperfect tense, we keep the "e" (to preserve the soft "g" sound), except for the 
'nous' and 'vous' forms:`

const particulP2 = document.createElement("p");
particulP2.innerHTML = `<i class='fa-solid fa-arrow-right'></i> je/tu mang<u>e</u>ais, il/elle/on mang<u>e</u>ait, 
nous <b>mangions</b>, vous <b>mangiez</b>, ils/elles mang<u>e</u>aient.`;

particulDiv.appendChild(particulP1);
particulDiv.appendChild(particulP2);


const subHeading32 = document.createElement("h3");
subHeading32.innerHTML = "Verbs ending in <i>-cer</i>";

pageContent.appendChild(subHeading32);

const particulDiv2 = document.createElement("div");
pageContent.appendChild(particulDiv2);

const particulP12 = document.createElement("p");
particulP12.innerHTML = `Verbs ending in <b>-cer</b> change their <i>"<b>c</b>"</i> to <i>"<b>ç</b>"</i> (to preserve the soft "c" sound), except for the 
'nous' and 'vous' forms:`

const particulP22 = document.createElement("p");
particulP22.innerHTML = `<i class='fa-solid fa-arrow-right'></i> je/tu commen<b>ç</b>ais, il/elle/on commen<b>ç</b>ait, 
nous commen<u>c</u>ions, vous commen<u>c</u>iez, ils/elles commen<b>ç</b>aient.`;

particulDiv2.appendChild(particulP12);
particulDiv2.appendChild(particulP22);


const subHeading33 = document.createElement("h3");
subHeading33.innerHTML = "Verbs ending in <i>-ier</i>";

pageContent.appendChild(subHeading33);

const particulDiv3 = document.createElement("div");
pageContent.appendChild(particulDiv3);

const particulP13 = document.createElement("p");
particulP13.innerHTML = `Verbs ending in <b>-ier</b> have a double 'i' ('ii') in the 'nous' and 'vous' forms:`

const particulP23 = document.createElement("p");
particulP23.innerHTML = `<i class='fa-solid fa-arrow-right'></i> j'étudiais, tu étudiais, il/elle/on étudiait, 
nous étud<u>ii</u>ons, vous étud<u>ii</u>ez, ils/elles étudiaient.`;

particulDiv3.appendChild(particulP13);
particulDiv3.appendChild(particulP23);

contentArea.appendChild(pageContent);

handleContentNavClicks();
  
  }