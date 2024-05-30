export function generatePresentGroup1Page() {
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

  
    const pronouncTipDiv = document.createElement("div");
    pronouncTipDiv.classList.add("definition");
    pageContent.appendChild(pronouncTipDiv);

    const pronouncTipP = document.createElement("p");
    pronouncTipP.innerHTML = '<i class="fa-solid fa-comment"></i> <b>Pronunciation tip</b>';

    const pronouncTipP1 = document.createElement("p");
    pronouncTipP1.classList.add("tip");
    pronouncTipP1.innerHTML = `For verbs that follow the pattern above, the present tense endings <i>'-e'</i>, <i>'-es'</i> and <i>'-ent'</i> are not pronounced,
    so 'parle', 'parles', and 'parlent' have the same pronunciation.`;

    pronouncTipDiv.appendChild(pronouncTipP);
    pronouncTipDiv.appendChild(pronouncTipP1);

    const pronouncTipP3 = document.createElement("p");
    pronouncTipP3.innerHTML = 'Note that when a verb starts with a vowel and is conjugated with "je" in the present tense, the "e" from "je" is removed:';

    pageContent.appendChild(pronouncTipP3);

    const tipUl = document.createElement("ul");
    tipUl.classList.add("list-no-bullet");
    pageContent.appendChild(tipUl);

    tipUl.innerHTML = `<li>- instead of "je aime", you say "j'aime",</li>
    <li>- instead of "je écoute", you say "j'écoute".</li>`;

    const heading2 = document.createElement("h2");
    heading2.textContent = "Verbs with Spelling Changes";
   
    const spellingChangesP = document.createElement("p");
    spellingChangesP.innerText = "Let's look at some '-er' verbs that follow a similar pattern as the verbs above, but undergo some spelling changes often related to pronunciation and spelling rules."

    const heading3 = document.createElement("h3");
    heading3.textContent = "Common patterns and examples of verbs that follow these patterns";

    const heading4 = document.createElement("h4");
    heading4.textContent = "Pattern 1: acheter, (se) lever, amener, emmener...";

    pageContent.appendChild(heading2);
    pageContent.appendChild(spellingChangesP);
    pageContent.appendChild(heading3);
    pageContent.appendChild(heading4);

    const pattern1 = document.createElement("div");
    pattern1.classList.add("examples-list");
    pageContent.appendChild(pattern1);

    const examplesPattern1  = [
        [
            `<i>J'<b>ach<u>è</u>te</b> des vêtements.</i> (I buy clothes.)`,
            `<i>Je <b>me l<u>è</u>ve</b> à 8 heures.</i> (I wake up at 8 o'clock.)`,
        ],

        [
            `<i>Tu <b>ach<u>è</u>tes</b> des vêtements.</i> (You buy clothes.)`,
            `<i>Tu <b>te l<u>è</u>ves</b> à 8 heures.</i> (You wake up at 8 o'clock.)`,
    
        ],

        [
            `<i>Il / elle / on <b>ach<u>è</u>te</b> des vêtements.</i> (He / she / one buys clothes.)`,
            `<i>Il / elle / on <b>se l<u>è</u>ve</b> à 8 heures.</i> (He / she / one wakes up at 8 o'clock.)`,
        ],

        [
            `<i>Nous <b>achetons</b> des vêtements.</i> (We buy clothes.)`,
            `<i><i>Nous <b>nous levons</b> à 8 heures.</i> (We wake up at 8 o'clock.)`,
        ],

        [
            `<i>Vous <b>achetez</b> des vêtements.</i> (You buy clothes.)`,
            `<i>Vous <b>vous levez</b> à 8 heures.</i> (You wake up at 8 o'clock.)`,
        ],

        [
            `<i>Ils/elles <b>ach<u>è</u>tent</b> des vêtements.</i> (They buy clothes.)`,
            `<i>Ils/elles <b>se l<u>è</u>vent</b> à 8 heures.</i> (They wake up at 8 o'clock.)`,
        ]
    ]

    for (let i = 0; i < examplesPattern1.length; i++) {
        const exampleUl = document.createElement("ul");
        for (let k = 0; k < examplesPattern1[i].length; k++) {
            const exampleUlLi = document.createElement("li");
            exampleUlLi.innerHTML = examplesPattern1[i][k];
            exampleUl.appendChild(exampleUlLi);
        }
        pattern1.appendChild(exampleUl);
    }

    const heading4P2 = document.createElement("h4");
    heading4P2.textContent = "Pattern 2: espérer, répéter, accéder, compléter...";
    pageContent.appendChild(heading4P2);

    const pattern2 = document.createElement("div");
    pattern2.classList.add("examples-list");
    pageContent.appendChild(pattern2);
    

    const examplesPattern2  = [
        [
            `<i>J'<b>esp<u>è</u>re</b> arriver à l'heure.</i> (I hope to arrive on time.)`,
            `<i>Je <b>préf<u>è</u>re</b> la pizza.</i> (I prefer pizza.)`,
        ],

        [
            `<i>Tu <b>esp<u>è</u>res</b> arriver à l'heure.</i> (You hope to arrive on time.)`,
            `<i>Tu <b>préf<u>è</u>res</b> la pizza.</i> (You prefer pizza.)`,
    
        ],

        [
            `<i>Il / elle / on <b>esp<u>è</u>re</b> arriver à l'heure.</i> (He / She / One hopes to arrive on time.)`,
            `<i>Il / elle / on <b>préf<u>è</u>re</b> la pizza.</i> (He / She / One prefers pizza.)`,
        ],

        [
            `<i>Nous <b>espérons</b> arriver à l'heure.</i> (We hope to arrive on time.)`,
            `<i>Nous <b>préférons</b> la pizza.</i> (We prefer pizza.)</li>`,
        ],

        [
            `<i>Vous <b>espérez</b> arriver à l'heure.</i> (You hope to arrive on time.)`,
            `<i><i>Vous <b>préférez</b> la pizza.</i> (You prefer pizza.)`,
        ],

        [
            `<i>Ils/elles <b>esp<u>è</u>rent</b> arriver à l'heure.</i> (They hope to arrive on time.)`,
            `<i>Ils/elles <b>préf<u>è</u>rent</b> la pizza.</i> (They prefer pizza.)`,
        ]
    ]

    for (let i = 0; i < examplesPattern2.length; i++) {
        const exampleUl = document.createElement("ul");
        for (let k = 0; k < examplesPattern2[i].length; k++) {
            const exampleUlLi = document.createElement("li");
            exampleUlLi.innerHTML = examplesPattern2[i][k];
            exampleUl.appendChild(exampleUlLi);
        }
        pattern2.appendChild(exampleUl);
    }


    const heading4P3 = document.createElement("h4");
    heading4P3.textContent = "Pattern 3: appeler, s'appeler, jeter...";
    pageContent.appendChild(heading4P3);

    const pattern3 = document.createElement("div");
    pattern3.classList.add("list-no-bullet");
    pageContent.appendChild(pattern3);
   

    const examplesPattern3  = [
        `<i>J'<b>appe<u>ll</u>e</b> son frère.</i> (I call his brother.)`,
        `<i>Tu <b>appe<u>ll</u>es</b> son frère.</i> (You call his brother.)`,
        `<i>Il/ elle/ on <b>appe<u>ll</u>e</b> son frère.</i> (He / She / One calls his brother.)`,
        `<i>Nous <b>appelons</b> son frère.</i> (We call his brother.)`,
        `<i>Vous <b>appelez</b> son frère.</i> (You call his brother.)`,
        `<i>Ils/elles <b>appe<u>ll</u>ent</b> son frère.</i> (They call his brother.)`
    ]

   const exampleUl = document.createElement("ul");
        for (let k = 0; k < examplesPattern3.length; k++) {
            const exampleUlLi = document.createElement("li");
            exampleUlLi.innerHTML = examplesPattern3[k];
            exampleUl.appendChild(exampleUlLi);
        }
        pattern3.appendChild(exampleUl);
    
  
    contentArea.appendChild(pageContent);
  
  }
  