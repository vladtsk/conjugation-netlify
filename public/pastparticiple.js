import { handleContentNavClicks } from "./contentNav.js";

export function generatePastCompParticPage() {
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
  
    const pastTenseLink = document.createElement("a");
    pastTenseLink.textContent = "Passé Composé";
    pastTenseLink.classList.add("pastTenseLink");

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
    <b>-er verbs</b>, you replace the <b>-er</b> at the end of the infinitive with <b>-é</b>.</p>`

  
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

    const examplesErDiv = document.createElement("div");
    examplesErDiv.classList.add("examples");
    const examplesErP = document.createElement("p");
    examplesErP.textContent = "Here are a few examples:";

    pageContent.appendChild(examplesErDiv);
    examplesErDiv.appendChild(examplesErP);

    const examplesErUl = document.createElement("ul");
    examplesErUl.classList.add("list-no-bullet");
    examplesErDiv.appendChild(examplesErUl);
    
    examplesErUl.innerHTML = `<li><i>Je <u><b>suis arrivé</b></u> à huit heures.</i> (I arrived at eight o'clock.)</li>
    <li><i>Il <u><b>a parlé</b></u> à Marie.</i> (He spoke to Marie.)</li>`;

    const divTipIr = document.createElement("div");
  
    divTipIr.innerHTML = `<p class='tip'><i class="fa-solid fa-bolt"></i> For <b>-ir verbs</b>, you usually replace
    the <b>-ir</b> at the end of the infinitive with <b>-i</b>.</p>`

  
    pageContent.appendChild(divTipIr);

    const tableIR = document.createElement("table");
    const tableIRHead = document.createElement("thead");

    const headerIRRow = document.createElement('tr');
    const headersIR = ['Infinitive', 'Translation', 'Past participle'];

    headersIR.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerIRRow.appendChild(th);
    })

    tableIRHead.appendChild(headerIRRow);
    tableIR.appendChild(tableIRHead);

    const tbodyIR = document.createElement('tbody');

    const tableIRData = [
        ['<b>finir</b>', 'to finish', '<b>fin<span class="red">i</span></b>'],
        ['<b>dormir</b>', 'to sleep', '<b>dorm<span class="red">i</span></b>'],
        ['<b>partir</b>', 'to leave', '<b>part<span class="red">i</span></b>'],
    ];

    tableIRData.forEach(rowData => {
        const row = document.createElement('tr');
        rowData.forEach(cellData => {
            const td = document.createElement('td');
            td.innerHTML = cellData;
            row.appendChild(td);
        });
        tbodyIR.appendChild(row);
    });

    tableIR.appendChild(tbodyIR);

    pageContent.appendChild(tableIR);




    const examplesIrDiv = document.createElement("div");
    examplesIrDiv.classList.add("examples");
    const examplesIrP = document.createElement("p");
    examplesIrP.textContent = "Here are a few examples:";

    pageContent.appendChild(examplesIrDiv);
    examplesIrDiv.appendChild(examplesIrP);

    const examplesIrUl = document.createElement("ul");
    examplesIrUl.classList.add("list-no-bullet");
    examplesIrDiv.appendChild(examplesIrUl);
    
    examplesIrUl.innerHTML = `<li><i>Il <u><b>a</b></u> bien <b><u>dormi</b></u> cette nuit.</i> (He slept well last night.)</li>
    <li><i>Elle <b><u>a grandi</b></u> en France.</i> (She grew up in France.)</li>`;



    const divTipRir = document.createElement("div");
  
    divTipRir.innerHTML = `<p class="tip"><i class="fa-solid fa-exclamation-triangle"></i> Verbs like <i><b>ouvrir</b></i>,
    <i><b>couvrir</b></i>, <i><b>découvrir</b></i>,
    <i><b>offrir</b></i>, <i><b>souffrir</b></i> form their past participle
    with <b>-ert</b> at the end:
</p>`

  
    pageContent.appendChild(divTipRir);

    const tableRir = document.createElement("table");
    const tableRirHead = document.createElement("thead");

    const headerRirRow = document.createElement('tr');
    const headersRir = ['Infinitive', 'Translation', 'Past participle'];

    headersRir.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRirRow.appendChild(th);
    })

    tableRirHead.appendChild(headerRirRow);
    tableRir.appendChild(tableRirHead);

    const tbodyRir = document.createElement('tbody');

    const tableRirData = [
        ['<b>ouvrir</b>', 'to open', '<b>ouv<span class="red">ert</span></b>'],
        ['<b>couvrir</b>', 'to cover', '<b>couv<span class="red">ert</span></b>'],
        ['<b>découvrir</b>', 'to discover', '<b>découv<span class="red">ert</span></b>'],
        ['<b>offrir</b>', 'to offer', '<b>off<span class="red">ert</span></b>'],
    ];

    tableRirData.forEach(rowData => {
        const row = document.createElement('tr');
        rowData.forEach(cellData => {
            const td = document.createElement('td');
            td.innerHTML = cellData;
            row.appendChild(td);
        });
        tbodyRir.appendChild(row);
    });

    tableRir.appendChild(tbodyRir);

    pageContent.appendChild(tableRir);

    const divTipIrIrreg = document.createElement("div");
  
    divTipIrIrreg.innerHTML = `<p><i class="fa-solid fa-exclamation-triangle"></i> <i class="fa-solid fa-exclamation-triangle"></i> Some -ir verbs like
        <i><b>venir</b></i>, <i><b>tenir</b></i>, <i><b>courir</b></i> are irregular and they don't follow these patterns 
        (see the table of exceptions at the bottom of the page).</p>`

  
    pageContent.appendChild(divTipIrIrreg);

    const divTipDre = document.createElement("div");
  
    divTipDre.innerHTML = `<p class="tip"><i class="fa-solid fa-bolt"></i> Many verbs ending in <b>-dre</b> form their past
    participle by replacing the <b>-re</b> ending with <b>-u</b>.</p>`

  
    pageContent.appendChild(divTipDre);

    const tableRe = document.createElement("table");
    const tableReHead = document.createElement("thead");

    const headerReRow = document.createElement('tr');
    const headersRe = ['Infinitive', 'Translation', 'Past participle'];

    headersRe.forEach(headerText => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerReRow.appendChild(th);
    });

    tableReHead.appendChild(headerReRow);
    tableRe.appendChild(tableReHead);

    const tbodyRe = document.createElement('tbody');

    const tableReData = [
        ['<b>attendre</b>', 'to wait', '<b>attend<span class="red">u</span></b>'],
        ['<b>entendre</b>', 'to hear', '<b>entend<span class="red">u</span></b>'],
        ['<b>répondre</b>', 'to answer, to reply', '<b>répond<span class="red">u</span></b>'],
        ['<b>perdre</b>', 'to lose', '<b>perd<span class="red">u</span></b>'],
    ];

    tableReData.forEach(rowData => {
        const row = document.createElement('tr');
        rowData.forEach(cellData => {
        const td = document.createElement('td');
        td.innerHTML = cellData;
        row.appendChild(td);
        });
    tbodyRe.appendChild(row);
    });

    tableRe.appendChild(tbodyRe);

    pageContent.appendChild(tableRe);



    const examplesReDiv = document.createElement("div");
    examplesReDiv.classList.add("examples");
    const examplesReP = document.createElement("p");
    examplesReP.textContent = "Take a look at these examples:";

    pageContent.appendChild(examplesReDiv);
    examplesReDiv.appendChild(examplesReP);

    const examplesReUl = document.createElement("ul");
    examplesReUl.classList.add("list-no-bullet");
    examplesReDiv.appendChild(examplesReUl);
    
    examplesReUl.innerHTML = `<li><i>Je t'<b><u>ai attendu</b></u> pendant une heure.</i> (I waited for you for an hour.)</li>
    <li><i>Il ne m'<b><u>a</b></u> pas <b><u>répondu</b></u></i> (He didn't reply.)</li>`;



    const divTipDreP2 = document.createElement("div");
  
    divTipDreP2.innerHTML = `<p class="tip"><i class="fa-solid fa-bolt"></i> Verbs like <b>prendre</b>, <b>apprendre</b>,
    <b>comprendre</b>, <b>reprendre</b> follow a different pattern: </p>`;
    pageContent.appendChild(divTipDreP2);

    
    const tableDreP2 = document.createElement("table");
    const tableDreP2Head = document.createElement("thead");
    
    const headerDreP2Row = document.createElement('tr');
    const headersDreP2 = ['Infinitive', 'Translation', 'Past participle'];
    
    headersDreP2.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerDreP2Row.appendChild(th);
    });
    
    tableDreP2Head.appendChild(headerDreP2Row);
    tableDreP2.appendChild(tableDreP2Head);
    
    const tbodyDreP2 = document.createElement('tbody');
    
    const tableDreP2Data = [
        ['<b>prendre</b>', 'to take', '<b>pr<span class="red">is</span></b>'],
        ['<b>apprendre</b>', 'to learn', '<b>appr<span class="red">is</span></b>'],
        ['<b>comprendre</b>', 'to understand', '<b>compr<span class="red">is</span></b>'],
        ['<b>reprendre</b>', 'to take back, to have some more', '<b>repr<span class="red">is</span></b>'],
    ];
    
    tableDreP2Data.forEach(rowData => {
        const row = document.createElement('tr');
        rowData.forEach(cellData => {
            const td = document.createElement('td');
            td.innerHTML = cellData;
            row.appendChild(td);
        });
        tbodyDreP2.appendChild(row);
    });
    
    tableDreP2.appendChild(tbodyDreP2);
    
    pageContent.appendChild(tableDreP2);
    
    
    const examplesDreP2Div = document.createElement("div");
    examplesDreP2Div.classList.add("examples");
    const examplesDreP2P = document.createElement("p");
    examplesDreP2P.textContent = "Take a look at these examples:";

    pageContent.appendChild(examplesDreP2Div);
    examplesDreP2Div.appendChild(examplesDreP2P);

    const examplesDreP2Ul = document.createElement("ul");
    examplesDreP2Ul.classList.add("list-no-bullet");
    examplesDreP2Div.appendChild(examplesDreP2Ul);
    
    examplesDreP2Ul.innerHTML = `<li><i>J'<b><u>ai pris</b></u> le train ce matin.</i> (I took the train this morning.)</li>
    <li><i>J'<b><u>ai appris</b></u> à conduire.</i> (I learned to drive.)</li>`;
    
    

    const divTipIndreP2 = document.createElement("div");
  
    divTipIndreP2.innerHTML = `<p class="tip"><i class="fa-solid fa-bolt"></i> To conjugate verbs ending in <b>-oindre</b>,
    <b>-eindre</b> and
    <b>-aindre</b> in the Passé Composé, replace the <b>-dre</b> at the end of the infinitive with
    <b>-t</b>:</p>`;
    pageContent.appendChild(divTipIndreP2);
    

    const tableIndre = document.createElement("table");
    const tableIndreHead = document.createElement("thead");

    const headerIndreRow = document.createElement('tr');
    const headersIndre = ['Infinitive', 'Translation', 'Past participle'];

    headersIndre.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerIndreRow.appendChild(th);
    });

    tableIndreHead.appendChild(headerIndreRow);
    tableIndre.appendChild(tableIndreHead);

    const tbodyIndre = document.createElement('tbody');

    const tableIndreData = [
        ['<b>rejoindre</b>', 'to join, to meet', '<b>rejoin<span class="red">t</span></b>'],
        ['<b>peindre</b>', 'to paint', '<b>pein<span class="red">t</span></b>'],
        ['<b>se plaindre</b>', 'to complain', '<b>plain<span class="red">t</span></b>'],
        ['<b>éteindre</b>', 'to turn off', '<b>étein<span class="red">t</span></b>'],
        ['<b>atteindre</b>', 'to reach', '<b>attein<span class="red">t</span></b>'],
    ];

    tableIndreData.forEach(rowData => {
        const row = document.createElement('tr');
        rowData.forEach(cellData => {
            const td = document.createElement('td');
            td.innerHTML = cellData;
            row.appendChild(td);
        });
        tbodyIndre.appendChild(row);
    });

    tableIndre.appendChild(tbodyIndre);

    pageContent.appendChild(tableIndre);


    const examplesIndreDiv = document.createElement("div");
    examplesIndreDiv.classList.add("examples");
    const examplesIndreP = document.createElement("p");
    examplesIndreP.textContent = "Here are some examples:";

    pageContent.appendChild(examplesIndreDiv);
    examplesIndreDiv.appendChild(examplesIndreP);

    const examplesIndreUl = document.createElement("ul");
    examplesIndreUl.classList.add("list-no-bullet");
    examplesIndreDiv.appendChild(examplesIndreUl);
    
    examplesIndreUl.innerHTML = `<li><i>Il <b><u>a éteint</b></u> la lumière.</i> (He turned off the light.)</li>
    <li><i>Je l'<b><u>ai rejoint</b></u> à la gare.</i> (I met him at the station.)</li>`;


    const divTipIrreg = document.createElement("div");
  
    
    divTipIrreg.innerHTML = `<p class="tip"><i class="fa-solid fa-exclamation-triangle"></i> Some common verbs don't follow the
    patterns above:</p>`

  
    pageContent.appendChild(divTipIrreg);

    const tableIrreg = document.createElement("table");
const tableIrregHead = document.createElement("thead");

const headerIrregRow = document.createElement('tr');
const headersIrreg = ['Verb', 'Translation', 'Past Participle'];

headersIrreg.forEach(headerText => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerIrregRow.appendChild(th);
});

tableIrregHead.appendChild(headerIrregRow);
tableIrreg.appendChild(tableIrregHead);

const tbodyIrreg = document.createElement('tbody');

const tableIrregData = [
    ['<b>avoir</b>', 'to have', '<b><span class="red">eu</span></b>'],
    ['<b>être</b>', 'to be', '<b><span class="red">été</span></b>'],
    ['<b>dire</b>', 'to say, to tell', '<b><span class="red">dit</span></b>'],
    ['<b>mettre</b>', 'to put', '<b><span class="red">mis</span></b>'],
    ['<b>faire</b>', 'to do, to make', '<b><span class="red">fait</span></b>'],
    ['<b>voir</b>', 'to see', '<b><span class="red">vu</span></b>'],
    ['<b>boire</b>', 'to drink', '<b><span class="red">bu</span></b>'],
    ['<b>venir</b>', 'to come', '<b><span class="red">venu</span></b>'],
    ['<b>lire</b>', 'to read', '<b><span class="red">lu</span></b>'],
    ['<b>connaître</b>', 'to know', '<b><span class="red">connu</span></b>'],
    ['<b>courir</b>', 'to run', '<b><span class="red">couru</span></b>'],
    ['<b>recevoir</b>', 'to receive, to get', '<b><span class="red">reçu</span></b>'],
    ['<b>devoir</b>', 'to have to, must', '<b><span class="red">dû</span></b>'],
    ['<b>vouloir</b>', 'to want', '<b><span class="red">voulu</span></b>'],
    ['<b>pouvoir</b>', 'to be able to, can', '<b><span class="red">pu</span></b>'],
    ['<b>savoir</b>', 'to know', '<b><span class="red">su</span></b>'],
    ['<b>tenir</b>', 'to hold', '<b><span class="red">tenu</span></b>'],
    ['<b>vivre</b>', 'to live', '<b><span class="red">vécu</span></b>'],
];

tableIrregData.forEach(rowData => {
    const row = document.createElement('tr');
    rowData.forEach(cellData => {
        const td = document.createElement('td');
        td.innerHTML = cellData;
        row.appendChild(td);
    });
    tbodyIrreg.appendChild(row);
});

tableIrreg.appendChild(tbodyIrreg);

pageContent.appendChild(tableIrreg);


    
contentArea.appendChild(pageContent);

handleContentNavClicks();
  }