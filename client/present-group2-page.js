export function generatePresentGroup2Page() {
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
  
    const presentTenseLink = document.createElement("a");
    presentTenseLink.textContent = "The present tense";
  
    contentNav.appendChild(verbConjugationLink);
    contentNav.appendChild(iconSpan);
    contentNav.appendChild(presentTenseLink);

    const iconSpan1 = document.createElement("span");
    iconSpan.classList.add("icon");
    const iconI1 = document.createElement("i");
    iconI1.classList.add("fas", "fa-chevron-right");
    iconSpan1.appendChild(iconI1);

    const presentGroup1Link = document.createElement("a");
    presentGroup1Link.textContent = "Group 1";

    contentNav.appendChild(iconSpan1);
    contentNav.appendChild(presentGroup1Link);


  
    // Create page-content div
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");
  
    const mainHeading = document.createElement("h1");
    mainHeading.textContent = "Examples of Verbs Conjugated in the Present Tense (group 1)";
  
    const exampleP = document.createElement("p");
    exampleP.innerHTML = `<i class="fa-solid fa-bolt"></i> Let's look at a few examples of verbs conjugated in the present
    tense in French:`;
  
    const exampleDiv = document.createElement("div");
    exampleDiv.classList.add("examples-list");

    pageContent.appendChild(mainHeading);
    pageContent.appendChild(exampleP);
    pageContent.appendChild(exampleDiv);

    const examplesGroup1  = [
        [
            `<i>J'<b>aime</b> la musique.</i> (I like music.)`,
            `<i>Je <b>cherche</b> du travail.</i> (I'm looking for a job.)`,
            `<i>Je <b>parle</b> anglais.</i> (I speak English.)`,
        ],

        [
            `<i>Tu <b>aimes</b> la musique.</i> (You like music.)`,
            `<i>Tu <b>cherches</b> du travail.</i> (You're looking for a job.)`,
            `<i>Tu <b>parles</b> anglais.</i> (You speak English.)`,
        ],

        [
            `<i>Il / elle / on <b>aime</b> la musique.</i> (He / she / one likes music.)`,
            `<i>Il / elle / on <b>cherche</b> du travail.</i> (He / she / one is looking for a job.)`,
            `<i>Il / elle / on <b>parle</b> anglais.</i> (He / she / one speaks English.)`,
        ],

        [
            `<i>Nous <b>aimons</b> la musique.</i> (We like music.)`,
            `<i>Nous <b>cherchons</b> du travail.</i> (We're looking for a job.)`,
            `<i>Nous <b>parlons</b> anglais.</i> (We speak English.)`,
        ],

        [
            `<i>Vous <b>aimez</b> la musique.</i> (You like music.)`,
            `<i>Vous <b>cherchez</b> du travail.</i> (You're looking for a job.)`,
            `<i>Vous <b>parlez</b> anglais.</i> (You speak English.)`,
        ],

        [
            `<i>Ils/elles <b>aiment</b> la musique.</i> (They like music.)`,
            `<i>Ils/elles <b>cherchent</b> du travail.</i> (They're looking for a job.)`,
            `<i>Ils/elles <b>parlent</b> anglais.</i> (They speak English.)`,
        ]
    ]

    for (let i = 0; i < examplesGroup1.length; i++) {
        const exampleUl = document.createElement("ul");
        for (let k = 0; k < examplesGroup1[i].length; k++) {
            const exampleUlLi = document.createElement("li");
            exampleUlLi.innerHTML = examplesGroup1[i][k];
            exampleUl.appendChild(exampleUlLi);
        }
        exampleDiv.appendChild(exampleUl);
    }
    
    const moreVerbsP = document.createElement("p");
    moreVerbsP.innerHTML = `<i class="fa-solid fa-bolt"></i> More verbs that follow the same pattern:`;


    const moreVerbsP1 = document.createElement("p");
    moreVerbsP1.innerHTML = `<i><b>chanter</b></i> (to sing), <i><b>marcher</b></i> (to walk), <i><b>regarder</b></i> (to
        watch), <i><b>demander</b></i> (to ask),
        <i><b>commencer</b></i> (to start), <i><b>manger</b></i> (to eat),
        <i><b>travailler</b></i> (to work), <i><b>habiter</b></i> (to live), <i><b>écouter</b></i> (to
        listen).`;

    const group1P = document.createElement("p");
    group1P.innerHTML = "Most verbs with an infinitive ending in '-er' are commonly known as first-group verbs.";
    
    const group1h2 = document.createElement("h2");
    group1h2.innerHTML = "To conjugate a first-group verb in the present tense, follow these steps:";

    const verbsRuleP = document.createElement("p");
    verbsRuleP.innerHTML = `Remove the infinitive ending (-er) to get the stem.
    Example: "parler" becomes "parl-". Add the appropriate ending to the stem. You'll find the
    endings in the table below.`;


  
    pageContent.appendChild(moreVerbsP);
    pageContent.appendChild(moreVerbsP1);
    pageContent.appendChild(group1P);
    pageContent.appendChild(group1h2);
    pageContent.appendChild(verbsRuleP);

    // Create a table
    const table = document.createElement('table');

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    const headers = ['SUBJECT', 'ENDING', 'EXAMPLE'];
    headers.forEach(headerEl => {
        const th = document.createElement('th');
        th.textContent = headerEl;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow)

    const tbody = document.createElement("tbody");
    const rowsData = [
        ['je', '-e', 'parle'],
        ['tu', '-es', 'parles'],
        ['il/elle/on', '-e', 'parle'],
        ['nous', '-ons', 'parlons'],
        ['vous', '-ez', 'parlez'],
        ['ils/elles', '-ent', 'parlent']
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

}