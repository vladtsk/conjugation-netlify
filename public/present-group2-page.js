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
    presentGroup1Link.textContent = "Group 2";

    contentNav.appendChild(iconSpan1);
    contentNav.appendChild(presentGroup1Link);


  
    // Create page-content div
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");
  
    const mainHeading = document.createElement("h1");
    mainHeading.textContent = "Examples of Verbs Conjugated in the Present Tense (group 2)";
  
    const exampleP = document.createElement("p");
    exampleP.innerHTML = `<i class="fa-solid fa-bolt"></i> Let's look at another pattern commonly referred to as 2nd group verbs.`;
  
    const exampleDiv = document.createElement("div");
    exampleDiv.classList.add("examples-list");

    pageContent.appendChild(mainHeading);
    pageContent.appendChild(exampleP);
    pageContent.appendChild(exampleDiv);

    const examplesGroup2  = [
        [
            `<i>Je <b>chois<span class='red'>is</span></b> un film.</i> (I choose a movie.)`,
            `<i>Je <b>fin<span class='red'>is</span></b> mes études.</i> (I finish my studies.)`,
        ],

        [
            `<i>Tu <b>chois<span class='red'>is</span></b> un film.</i> (You choose a movie.)`,
            `<i>Tu <b>fin<span class='red'>is</span></b> tes études.</i> (You finish your studies.)`,
        ],

        [
            `<i>Il / elle <b>chois<span class='red'>it</span></b> un film.</i> (He / She chooses a
            movie.)`,
            `<i>Il / elle <b>fin<span class='red'>it</span></b> ses études.</i> (He / She finishes his /
            her studies.)`,
        ],

        [
            `<i>Nous <b>chois<span class='red'>issons</span></b> un film.</i> (We choose a movie.)`,
            `<i>Nous <b>fin<span class='red'>issons</span></b> nos études.</i> (We finish our studies.)`,
        ],

        [
            `<i>Vous <b>chois<span class='red'>issez</span></b> un film.</i> (You choose a movie.)`,
            `<i>Vous <b>fin<span class='red'>issez</span></b> vos études.</i> (You finish your studies.)`,
        ],

        [
            `<i>Ils/elles <b>chois<span class='red'>issent</span></b> un film.</i> (They choose a movie.)`,
            `<i>Ils/elles <b>fin<span class='red'>issent</span></b> leurs études.</i> (They finish their studies.)`,
        ]
    ]

    for (let i = 0; i < examplesGroup2.length; i++) {
        const exampleUl = document.createElement("ul");
        for (let k = 0; k < examplesGroup2[i].length; k++) {
            const exampleUlLi = document.createElement("li");
            exampleUlLi.innerHTML = examplesGroup2[i][k];
            exampleUl.appendChild(exampleUlLi);
        }
        exampleDiv.appendChild(exampleUl);
    }
    
    const moreVerbsP = document.createElement("p");
    moreVerbsP.innerHTML = `<i class="fa-solid fa-bolt"></i> Some common verbs that follow this pattern:`;


    const moreVerbsP1 = document.createElement("p");
    moreVerbsP1.innerHTML = `<i><b>finir</b></i> (to
        finish), <i><b>choisir</b></i>
        (to choose),
        <i><b>réfléchir</b></i> (to think), <i><b>grandir</b></i> (to grow),
        <i><b>réussir</b></i> (to succeed), <i><b>grossir</b></i> (to gain weight), <i><b>investir</b></i>
        (to invest),
        <i><b>remplir</b></i> (to fill (in)), <i><b>atterrir</b></i> (to land).`;
    
    const group2h2 = document.createElement("h2");
    group2h2.innerHTML = "More examples";

    const group2more = document.createElement("div");
    group2more.classList.add ("list-no-bullet");

    pageContent.appendChild(moreVerbsP);
    pageContent.appendChild(moreVerbsP1);
    pageContent.appendChild(group2h2);
    pageContent.appendChild(group2more); 

    const group2List = document.createElement("li");
    const group2ListEl1 = document.createElement("li");
    group2ListEl1.innerHTML = "<i>Tu finis à quelle heure ?</i> (What time do you finish?)";

    const group2ListEl2 = document.createElement("li");
    group2ListEl2.innerHTML = "<i>Je finis tard.</i> (I finish late. / I'm finishing late.)";

    const group2ListEl3 = document.createElement("li");
    group2ListEl3.innerHTML = "<i>Il réussit toujours.</i> (He always succeeds.)";

    group2more.appendChild(group2ListEl1);
    group2more.appendChild(group2ListEl2);
    group2more.appendChild(group2ListEl3);



    const verbsRuleh3 = document.createElement("h3");
    verbsRuleh3.innerHTML = "Here is a table explaining how to conjugate a 2nd group verb";
    pageContent.appendChild(verbsRuleh3);

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
        ['je', '-is', 'choisis'],
        ['tu', '-is', 'choisis'],
        ['il/elle/on', '-it', 'choisit'],
        ['nous', '-issons', 'choisissons'],
        ['vous', '-issez', 'choisissez'],
        ['ils/elles', '-issent', 'choisissent']
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

    const noteP = document.createElement("p");
    noteP.innerHTML = `<i class="fa-solid fa-exclamation-triangle"></i> Note that not all verbs that end in "-ir" are
    conjugated like this. You'll see examples in the next chapter.`
    pageContent.appendChild(noteP);

    contentArea.appendChild(pageContent);
}