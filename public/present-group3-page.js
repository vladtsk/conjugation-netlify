import { handleContentNavClicks } from "./contentNav.js";

export function generatePresentGroup3Page() {
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
  
    const presentTenseLink = document.createElement("a");
    presentTenseLink.textContent = "The present tense";
    presentTenseLink.classList.add("presentTenseLink");
  
    contentNav.appendChild(verbConjugationLink);
    contentNav.appendChild(iconSpan);
    contentNav.appendChild(presentTenseLink);

    const iconSpan1 = document.createElement("span");
    iconSpan.classList.add("icon");
    const iconI1 = document.createElement("i");
    iconI1.classList.add("fas", "fa-chevron-right");
    iconSpan1.appendChild(iconI1);

    const presentGroup3Link = document.createElement("a");
    presentGroup3Link.textContent = "Group 3";

    contentNav.appendChild(iconSpan1);
    contentNav.appendChild(presentGroup3Link);


  
    // Create page-content div
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");
  
    const mainHeading = document.createElement("h1");
    mainHeading.textContent = "3rd Group Verbs in the Present Tense";
  
    const group3P = document.createElement("p");
    group3P.innerHTML = `<i class="fa-solid fa-lightbulb red"></i> The 3rd group is the most irregular in French. It includes verbs with endings like -ir, -ire, -tre,
    -dre, -oir, -ondre, -endre.`;

    const mainHeading2 = document.createElement("h2");
    mainHeading2.textContent = "Common patterns and examples of verbs that follow these patterns";

    const mainHeading3 = document.createElement("h3");
    mainHeading3.classList.add("color3");
    mainHeading3.innerHTML = `<i class="fa-solid fa-bolt"></i> Verbs ending in -IR`;

    const mainHeading4 = document.createElement("h4");
    mainHeading4.textContent = "Pattern 1: partir, sortir, servir, (se) sentir, dormir, mentir...";

            

    pageContent.appendChild(mainHeading);
    pageContent.appendChild(group3P);
    pageContent.appendChild(mainHeading2);
    pageContent.appendChild(mainHeading3);
    pageContent.appendChild(mainHeading4);

    const exampleDiv = document.createElement("div");
    exampleDiv.classList.add("examples-list");
    pageContent.appendChild(exampleDiv);

    const examplesGroup3  = [
        [
            `<i>Je <b>pars</b> demain.</i> (I'm leaving tomorrow.)`,
            `<i>Je <b>sors</b> ce soir.</i> (I'm going out tonight.)`,
        ],

        [
            `<i>Tu <b>pars</b> demain.</i> (You're leaving tomorrow.)`,
            `<i>Tu <b>sors</b> ce soir.</i> (You're going out tonight.)`,
        ],

        [
            `<i>Il / elle / on <b>part</b> demain.</i> (He / She / One is leaving tomorrow.)`,
            `<i>Il / elle / on <b>sort</b> ce soir.</i> (He / She / One is going out tonight.)`,
        ],

        [
            `<i>Nous <b>partons</b> demain.</i> (We're leaving tomorrow.)`,
            `<i>Nous <b>sortons</b> ce soir.</i> (We're going out tonight.)`,
        ],

        [
            `<i>Vous <b>partez</b> demain.</i> (You're leaving tomorrow.)`,
            `<i>Vous <b>sortez</b> ce soir.</i> (You're going out tonight.)`,
        ],

        [
            `<i>Ils/elles <b>partent</b> demain.</i> (They're leaving tomorrow.)`,
            `<i>Ils/elles <b>sortent</b> ce soir.</i> (They're going out tonight.)`,
        ]
    ]

    for (let i = 0; i < examplesGroup3.length; i++) {
        const exampleUl = document.createElement("ul");
        for (let k = 0; k < examplesGroup3[i].length; k++) {
            const exampleUlLi = document.createElement("li");
            exampleUlLi.innerHTML = examplesGroup3[i][k];
            exampleUl.appendChild(exampleUlLi);
        }
        exampleDiv.appendChild(exampleUl);
    }
    
    const moreVerbsh5 = document.createElement("h5");
    moreVerbsh5.innerHTML = `<i class="fa-solid fa-bolt"></i> More examples:`;
    
    const moreDiv = document.createElement("div");
    moreDiv.classList.add("list-no-bullet");

    const moreUl = document.createElement("ul");
    moreUl.innerHTML = `<li><i>Je me sens bien. </i> (I feel good.)</li>
    <li><i>Les enfants ne dor<b>ment</b> pas très bien.</i> (The children don't sleep very well.)
    </li>`;
    moreDiv.appendChild(moreUl);

    pageContent.appendChild(moreVerbsh5);
    pageContent.appendChild(moreDiv);

    const pattern2H4 = document.createElement("h4");
    pattern2H4.textContent = "Pattern 2: offrir, ouvrir, souffrir, couvrir, découvrir...";
    pageContent.appendChild(pattern2H4);
    
    const exampleDivP2 = document.createElement("div");
    exampleDivP2.classList.add("examples-list");
    pageContent.appendChild(exampleDivP2);

    const examplesGroup3P2  = [
        [
            `<i>J'<b>offre</b> un cadeau.</i> (I offer a gift.)`,
            `<i>J'<b>ouvre</b> la porte.</i> (I open the door.)`,
        ],

        [
            `<i>Tu <b>offres</b> un cadeau.</i> (You offer a gift.)`,
            `<i>Tu <b>ouvres</b> la porte.</i> (You open the door.)`,
        ],

        [
            `<i>Il / elle / on <b>offre</b> un cadeau.</i> (He / She / One offers a gift.)`,
            `<i>Il / elle / on <b>ouvre</b> la porte.</i> (He / She / One opens the door.)`,
        ],

        [
            `<i>Nous <b>offrons</b> un cadeau.</i> (We offer a gift.)`,
            `<i>Nous <b>ouvrons</b> la porte.</i> (We open the door.)`,
        ],

        [
            `<i>Vous <b>offrez</b> un cadeau.</i> (You offer a gift.)`,
            `<i>Vous <b>ouvrez</b> la porte.</i> (You open the door.)`,
        ],

        [
            `<i>Ils/elles <b>offrent</b> un cadeau.</i> (They offer a gift.)`,
            `<i>Ils/elles <b>ouvrent</b> la porte.</i> (They open the door.)`,
        ]
    ]

    for (let i = 0; i < examplesGroup3P2.length; i++) {
        const exampleUl = document.createElement("ul");
        for (let k = 0; k < examplesGroup3P2[i].length; k++) {
            const exampleUlLi = document.createElement("li");
            exampleUlLi.innerHTML = examplesGroup3P2[i][k];
            exampleUl.appendChild(exampleUlLi);
        }
        exampleDivP2.appendChild(exampleUl);
    }


    const pattern3H4 = document.createElement("h4");
    pattern3H4.textContent = "Pattern 3: venir, revenir, devenir, tenir, maintenir...";
    pageContent.appendChild(pattern3H4);
    
    const exampleDivP3 = document.createElement("div");
    exampleDivP3.classList.add("examples-list");
    pageContent.appendChild(exampleDivP3);

    const examplesGroup3P3  = [
        [
            `<i>Je <b>viens</b> d'Italie.</i> (I come from Italy.)`,
            `<i>Je le <b>soutiens</b>.</i> (I support him.)`,
        ],
        [
            `<i>Tu <b>viens</b> d'Italie.</i> (You come from Italy.)`,
            `<i>Tu le <b>soutiens</b>.</i> (You support him.)`,
        ],
        [
            `<i>Il / elle / on <b>vient</b> d'Italie.</i> (He / She / One comes from Italy.)`,
            `<i>Il / elle / on le <b>soutient</b>.</i> (He / She / One supports him.)`,
        ],
        [
            `<i>Nous <b>venons</b> d'Italie.</i> (We come from Italy.)`,
            `<i>Nous le <b>soutenons</b>.</i> (We support him.)`,
        ],
        [
            `<i>Vous <b>venez</b> d'Italie.</i> (You come from Italy.)`,
            `<i>Vous le <b>soutenez</b>.</i> (You support him.)`,
        ],
        [
            `<i>Ils/elles <b>viennent</b> d'Italie.</i> (They come from Italy.)`,
            `<i>Ils/elles le <b>soutiennent</b>.</i> (They support him.)`,
        ],
    ]
    

    for (let i = 0; i < examplesGroup3P3.length; i++) {
        const exampleUl = document.createElement("ul");
        for (let k = 0; k < examplesGroup3P3[i].length; k++) {
            const exampleUlLi = document.createElement("li");
            exampleUlLi.innerHTML = examplesGroup3P3[i][k];
            exampleUl.appendChild(exampleUlLi);
        }
        exampleDivP3.appendChild(exampleUl);
    }

    const pattern4H4 = document.createElement("h4");
    pattern4H4.textContent = "Pattern 4: courir, secourir, parcourir...";
    pageContent.appendChild(pattern4H4);
    
    const exampleDivP4 = document.createElement("div");
    exampleDivP4.classList.add("list-no-bullet");
    pageContent.appendChild(exampleDivP4);

    const examplesGroup3Pattern4  = [
        `<i>Je <b>cours</b> vite.</i> (I run fast.)`,
        `<i>Tu <b>cours</b> vite.</i> (You run fast.)`,
        `<i>Il / elle / on <b>court</b> vite.</i> (He / She / One runs fast.)`,
        `<i>Nous <b>courons</b> vite.</i> (We run fast.)`,
        `<i>Vous <b>courez</b> vite.</i> (You run fast.)`,
        `<i>Ils/elles <b>courent</b> vite.</i> (They run fast.)`
    ]

   const exampleP4Ul = document.createElement("ul");
        for (let k = 0; k < examplesGroup3Pattern4.length; k++) {
            const exampleUlLi = document.createElement("li");
            exampleUlLi.innerHTML = examplesGroup3Pattern4[k];
            exampleP4Ul.appendChild(exampleUlLi);
        }
        exampleDivP4.appendChild(exampleP4Ul);




        const vebrsIreH3 = document.createElement("h3");
        vebrsIreH3.classList.add("color3");
        vebrsIreH3.innerHTML = `<i class="fa-solid fa-bolt"></i> Verbs ending in -IRE`;
    
        const vebrsIreH4 = document.createElement("h4");
        vebrsIreH4.textContent = "Pattern 1: lire, dire, traduire, conduire...";
    
                
        pageContent.appendChild(vebrsIreH3);
        pageContent.appendChild(vebrsIreH4);
    
        const vebrsIreP1Div = document.createElement("div");
        vebrsIreP1Div.classList.add("examples-list");
        pageContent.appendChild(vebrsIreP1Div);
    
        const examplesVebrsIreP1  = [
            [
                `<i>Je <b>lis</b> un livre.</i> (I'm reading a book.)`,
                `<i>Je <b>conduis</b> une voiture.</i> (I drive a car.)`,
                `<i>Je <b>dis</b> la vérité.</i> (I'm telling the truth.)`,
            ],
            [
                `<i>Tu <b>lis</b> un livre.</i> (You're reading a book.)`,
                `<i>Tu <b>conduis</b> une voiture.</i> (You drive a car.)`,
                `<i>Tu <b>dis</b> la vérité.</i> (You're telling the truth.)`,
            ],
            [
                `<i>Il / elle / on <b>lit</b> un livre.</i> (He / She / One is reading a book.)`,
                `<i>Il / elle / on <b>conduit</b> une voiture.</i> (He / She / One drives a car.)`,
                `<i>Il / elle / on <b>dit</b> la vérité.</i> (He / She / One is telling the truth.)`,
            ],
            [
                `<i>Nous <b>lisons</b> un livre.</i> (We're reading a book.)`,
                `<i>Nous <b>conduisons</b> une voiture.</i> (We drive a car.)`,
                `<i>Nous <b>disons</b> la vérité.</i> (We're telling the truth.)`,
            ],
            [
                `<i>Vous <b>lisez</b> un livre.</i> (You're reading a book.)`,
                `<i>Vous <b>conduisez</b> une voiture.</i> (You drive a car.)`,
                `<i>Vous <b>di<span class="red">tes</span></b> la vérité.</i> (You're telling the truth.)`,
            ],
            [
                `<i>Ils/elles <b>lisent</b> un livre.</i> (They're reading a book.)`,
                `<i>Ils/elles <b>conduisent</b> une voiture.</i> (They drive a car.)`,
                `<i>Ils/elles <b>disent</b> la vérité.</i> (They're telling the truth.)`,
            ],
        ]
        
        for (let i = 0; i < examplesVebrsIreP1.length; i++) {
            const exampleUl = document.createElement("ul");
            for (let k = 0; k < examplesVebrsIreP1[i].length; k++) {
                const exampleUlLi = document.createElement("li");
                exampleUlLi.innerHTML = examplesVebrsIreP1[i][k];
                exampleUl.appendChild(exampleUlLi);
            }
            vebrsIreP1Div.appendChild(exampleUl);
        }
        
    
        const vebrsIreP2H4 = document.createElement("h4");
        vebrsIreP2H4.textContent = "Pattern 2: écrire, décrire, (s')inscrire... ";
        pageContent.appendChild(vebrsIreP2H4);
        
        const vebrsIreP2Div = document.createElement("div");
        vebrsIreP2Div.classList.add("examples-list");
        pageContent.appendChild(vebrsIreP2Div);
    
        const examplesVebrsIreP2  = [
            [
                `<i>J'<b>écris</b> une lettre.</i> (I'm writing a letter.)`,
                `<i>Je <b>m'inscris</b> à un cours de français.</i> (I'm signing up for a French course.)`,
            ],
    
            [
                `<i>Tu <b>écris</b> une lettre.</i> (You're writing a letter.)`,
                `<i>Tu <b>t'inscris</b> à un cours de français.</i> (You're signing up for a French course.)`,
            ],
    
            [
                `<i>Il/elle/on <b>écrit</b> une lettre.</i> (He's writing a letter.)`,
                `<i>Il/elle/on <b>s'inscrit</b> à un cours de français.</i> (He/she/one is signing up for a
                French course.)`,
            ],
    
            [
                `<i>Nous <b>écrivons</b> une lettre.</i> (We're writing a letter.)`,
                `<i>Nous nous <b>inscrivons</b> à un cours de français.</i> (We're signing up for a French
                course.)`,
            ],
    
            [
                `<i>Vous <b>écrivez</b> une lettre.</i> (You're writing a letter.)`,
                `<i>Vous vous <b>inscrivez</b> à un cours de français.</i> (You're signing up for a French
                course.)`,
            ],
    
            [
                `<i>Ils/elles <b>écrivent</b> une lettre.</i> (They're writing a letter.)`,
                `<i>Ils/elles <b>s'inscrivent</b> à un cours de français.</i> (They're signing up for a
                French course.)`,
            ]
        ]
    
        for (let i = 0; i < examplesVebrsIreP2.length; i++) {
            const exampleUl = document.createElement("ul");
            for (let k = 0; k < examplesVebrsIreP2[i].length; k++) {
                const exampleUlLi = document.createElement("li");
                exampleUlLi.innerHTML = examplesVebrsIreP2[i][k];
                exampleUl.appendChild(exampleUlLi);
            }
            vebrsIreP2Div.appendChild(exampleUl);
        }







        const vebrsTreH3 = document.createElement("h3");
        vebrsTreH3.classList.add("color3");
        vebrsTreH3.innerHTML = `<i class="fa-solid fa-bolt"></i> Verbs ending in -TRE`;
    
        const vebrsTreH4 = document.createElement("h4");
        vebrsTreH4.textContent = "Pattern 1: mettre, promettre, remettre, (se) battre...";
    
                
        pageContent.appendChild(vebrsTreH3);
        pageContent.appendChild(vebrsTreH4);
    
        const vebrsTreP1Div = document.createElement("div");
        vebrsTreP1Div.classList.add("list-no-bullet");
        pageContent.appendChild(vebrsTreP1Div);
    
        const examplesVebrsTreP1  = [
            "<i>Je <b>mets</b> une veste.</i> (I'm putting on a jacket.)",
            "<i>Tu <b>mets</b> une veste.</i> (You're putting on a jacket.)",
            "<i>Il/elle/on <b>met</b> une veste.</i> (He/she/one is putting on a jacket.)",
            "<i>Nous <b>mettons</b> une veste.</i> (We're putting on a jacket.)",
            "<i>Vous <b>mettez</b> une veste.</i> (You're putting on a jacket.)",
            "<i>Ils/elles <b>mettent</b> une veste.</i> (They're putting on a jacket.)"
        ]
    
       const examplesVebrsTreP1Ul = document.createElement("ul");
            for (let k = 0; k < examplesVebrsTreP1.length; k++) {
                const exampleUlLi = document.createElement("li");
                exampleUlLi.innerHTML = examplesVebrsTreP1[k];
                examplesVebrsTreP1Ul.appendChild(exampleUlLi);
            }
            vebrsTreP1Div.appendChild(examplesVebrsTreP1Ul);
        
    
        const vebrsTreP2H4 = document.createElement("h4");
        vebrsTreP2H4.textContent = "Pattern 2: connaître, reconnaître, naître... ";
        pageContent.appendChild(vebrsTreP2H4);
        
        const vebrsTreP2H4Div = document.createElement("div");
        vebrsTreP2H4Div.classList.add("list-no-bullet");
        pageContent.appendChild(vebrsTreP2H4Div);
    
        const examplesVebrsTreP2H4  = [
    
        "<i>Je <b>connais</b> cette ville.</i> (I know this city.)",
        "<i>Tu <b>connais</b> cette ville.</i> (You know this city.)",
        "<i>Il/elle/on <b>connaît</b> cette ville.</i> (He/she/one knows this city.)",
        "<i>Nous <b>connaissons</b> cette ville.</i> (We know this city.)",
        "<i>Vous <b>connaissez</b> cette ville.</i> (You know this city.)",
        "<i>Ils/elles <b>connaissent</b> cette ville.</i> (They know this city.)",
    
        ]
    
        const examplesVebrsTreP2Ul = document.createElement("ul");
            for (let k = 0; k < examplesVebrsTreP2H4.length; k++) {
                const exampleUlLi = document.createElement("li");
                exampleUlLi.innerHTML = examplesVebrsTreP2H4[k];
                examplesVebrsTreP2Ul.appendChild(exampleUlLi);
            }
            vebrsTreP2H4Div.appendChild(examplesVebrsTreP2Ul);
    
        




    const vebrsDreH3 = document.createElement("h3");
    vebrsDreH3.classList.add("color3");
    vebrsDreH3.innerHTML = `<i class="fa-solid fa-bolt"></i> Verbs ending in -DRE`;

    const vebrsDreH4 = document.createElement("h4");
    vebrsDreH4.textContent = "Pattern 1: prendre, apprendre, comprendre...";
    

    pageContent.appendChild(vebrsDreH3);
    pageContent.appendChild(vebrsDreH4);

    const exampleVebrsDre = document.createElement("div");
    exampleVebrsDre.classList.add("examples-list");
    pageContent.appendChild(exampleVebrsDre);

    const examplesVebrsDreP1  = [
        [
            "<i>J'<b>apprends</b> le français.</i> (I'm learning French.)",
            "<i>Je <b>prends</b> une photo.</i> (I'm taking a photo.)",
        ],

        [
            "<i>Tu <b>apprends</b> le français.</i> (You're learning French.)",
            "<i>Tu <b>prends</b> une photo.</i> (You're taking a photo.)",
        ],

        [
            "<i>Il/elle/on <b>apprend</b> le français.</i> (He/she/one is learning French.)",
            "<i>Il/elle/on <b>prend</b> une photo.</i> (He/she/one is taking a photo.)",
        ],

        [
           "<i>Nous <b>apprenons</b> le français.</i> (We're learning French.)",
            "<i>Nous <b>prenons</b> une photo.</i> (We're taking a photo.)",
        ],

        [
            "<i>Vous <b>apprenez</b> le français.</i> (You're learning French.)",
            "<i>Vous <b>prenez</b> une photo.</i> (You're taking a photo.)",
        ],

        [
            "<i>Ils/elles <b>apprennent</b> le français.</i> (They're learning French.)",
            "<i>Ils/elles <b>prennent</b> une photo.</i> (They're taking a photo.)",
        ]
    ]

    for (let i = 0; i < examplesVebrsDreP1.length; i++) {
        const exampleUl = document.createElement("ul");
        for (let k = 0; k < examplesVebrsDreP1[i].length; k++) {
            const exampleUlLi = document.createElement("li");
            exampleUlLi.innerHTML = examplesVebrsDreP1[i][k];
            exampleUl.appendChild(exampleUlLi);
        }
        exampleVebrsDre.appendChild(exampleUl);
    }
    
   

    const vebrsDreP2H4 = document.createElement("h4");
    vebrsDreP2H4.textContent = "Pattern 2: attendre, entendre, répondre, perdre, vendre…";
    pageContent.appendChild(vebrsDreP2H4);
    
    const exampleVebrsDreP2Div = document.createElement("div");
    exampleVebrsDreP2Div.classList.add("list-no-bullet");
    pageContent.appendChild(exampleVebrsDreP2Div);

    const examplesVebrsDreP2  = [
        "<i>J'<b>attends</b> le bus.</i> (I'm waiting for the bus.)",
        "<i>Tu <b>attends</b> le bus.</i> (You're waiting for the bus.)",
        "<i>Il/elle/on <b>attend</b> le bus.</i> (He/she/one is waiting for the bus.)",
        "<i>Nous <b>attendons</b> le bus.</i> (We're waiting for the bus.)",
        "<i>Vous <b>attendez</b> le bus.</i> (You're waiting for the bus.)",
        "<i>Ils/elles <b>attendent</b> le bus.</i> (They're waiting for the bus.)"
    ]

        
    const vebrsDreP2Ul = document.createElement("ul");
            for (let k = 0; k < examplesVebrsDreP2.length; k++) {
                const exampleUlLi = document.createElement("li");
                exampleUlLi.innerHTML = examplesVebrsDreP2[k];
                vebrsDreP2Ul.appendChild(exampleUlLi);
            }
            exampleVebrsDreP2Div.appendChild(vebrsDreP2Ul);

    

    
    const vebrsDreP3H4 = document.createElement("h4");
    vebrsDreP3H4.textContent = "Pattern 3: éteindre, peindre, joindre, rejoindre, se plaindre...";
    

    pageContent.appendChild(vebrsDreP3H4);

    const exampleVebrsDreP3Div = document.createElement("div");
    exampleVebrsDreP3Div.classList.add("examples-list");
    pageContent.appendChild(exampleVebrsDreP3Div);

    const examplesVebrsDreP3  = [
    
            [
                `<i>J'<b>éteins</b> la lumière.</i> (I turn off the light.)`,
                `<i>Je la <b>rejoins</b> plus tard.</i> (I'll join her later.)`,
            ],
            [
                `<i>Tu <b>éteins</b> la lumière.</i> (You turn off the light.)`,
                `<i>Tu la <b>rejoins</b> plus tard.</i> (You'll join her later.)`,
            ],
            [
                `<i>Il/elle/on <b>éteint</b> la lumière.</i> (He/she/one turns off the light.)`,
                `<i>Il/elle/on la <b>rejoint</b> plus tard.</i> (He/she/one will join her later.)`,
            ],
            [
                `<i>Nous <b>éteignons</b> la lumière.</i> (We turn off the light.)`,
                `<i>Nous la <b>rejoignons</b> plus tard.</i> (We'll join her later.)`,
            ],
            [
                `<i>Vous <b>éteignez</b> la lumière.</i> (You turn off the light.)`,
                `<i>Vous la <b>rejoignez</b> plus tard.</i> (You'll join her later.)`,
            ],
            [
                `<i>Ils/elles <b>éteignent</b> la lumière.</i> (They turn off the light.)`,
                `<i>Ils/elles la <b>rejoignent</b> plus tard.</i> (They'll join her later.)`,
            ],
        
    ]

    for (let i = 0; i < examplesVebrsDreP3.length; i++) {
        const exampleUl = document.createElement("ul");
        for (let k = 0; k < examplesVebrsDreP3[i].length; k++) {
            const exampleUlLi = document.createElement("li");
            exampleUlLi.innerHTML = examplesVebrsDreP3[i][k];
            exampleUl.appendChild(exampleUlLi);
        }
        exampleVebrsDreP3Div.appendChild(exampleUl);
    }


    const vebrsOirH3 = document.createElement("h3");
    vebrsOirH3.classList.add("color3");
    vebrsOirH3.innerHTML = `<i class="fa-solid fa-bolt"></i>Verbs ending in -OIR`;

    const vebrsOirH4 = document.createElement("h4");
    vebrsOirH4.textContent = "Pattern 1: devoir, recevoir...";
    

    pageContent.appendChild(vebrsOirH3);
    pageContent.appendChild(vebrsOirH4);

    const exampleVebrsOirDiv = document.createElement("div");
    exampleVebrsOirDiv.classList.add("examples-list");
    pageContent.appendChild(exampleVebrsOirDiv);

    const examplesVebrsOir  = [
        [
            "<i>Je <b>dois</b> partir.</i> (I have to go.)",
            "<i>Je <b>re<span class='red'>ç</span>ois</b> des messages.</i> (I get messages.)",
        ],

        [
            "<i>Tu <b>dois</b> partir.</i> (You have to go.)",
            "<i>Tu <b>re<span class='red'>ç</span>ois</b> des messages.</i> (You get messages.)",
        ],

        [
            "<i>Il/elle/on <b>doit</b> partir.</i> (He/she/one has to go.)",
            "<i>Il/elle/on <b>re<span class='red'>ç</span>oit</b> des messages.</i> (He/she/one gets messages.)",
        ],

        [
           "<i>Nous <b>devons</b> partir.</i> (We have to go.)",
            "<i>Nous <b>recevons</b> des messages.</i> (We get messages.)",
        ],

        [
            "<i>Vous <b>devez</b> partir.</i> (You have to go.)",
            "<i>Vous <b>recevez</b> des messages.</i> (You get messages.)",
        ],

        [
            "<i>Ils/elles <b>doivent</b> partir.</i> (They have to go.)",
            "<i>Ils/elles <b>re<span class='red'>ç</span>oivent</b> des messages.</i> (They get messages.)",
        ]
    ]

    for (let i = 0; i < examplesVebrsOir.length; i++) {
        const exampleUl = document.createElement("ul");
        for (let k = 0; k < examplesVebrsOir[i].length; k++) {
            const exampleUlLi = document.createElement("li");
            exampleUlLi.innerHTML = examplesVebrsOir[i][k];
            exampleUl.appendChild(exampleUlLi);
        }
        exampleVebrsOirDiv.appendChild(exampleUl);
    }




    const vebrsOirP2H4 = document.createElement("h4");
    vebrsOirP2H4.textContent = "Pattern 2: vouloir, pouvoir...";
    
    pageContent.appendChild(vebrsOirP2H4);

    const exampleVebrsOirP2Div = document.createElement("div");
    exampleVebrsOirP2Div.classList.add("examples-list");
    pageContent.appendChild(exampleVebrsOirP2Div);

    const examplesVebrsOirP2  = [
            [
                "<i>Je <b>veux</b> les aider.</i> (I want to help them.)",
                "<i>Je <b>peux</b> laisser un message.</i> (I can leave a message.)",
            ],
            [
                "<i>Tu <b>veux</b> les aider.</i> (You want to help them.)",
                "<i>Tu <b>peux</b> laisser un message.</i> (You can leave a message.)",
            ],
            [
                "<i>Il/elle/on <b>veut</b> les aider.</i> (He/she/one wants to help them.)",
                "<i>Il/elle/on <b>peut</b> laisser un message.</i> (He/she/one can leave a message.)",
            ],
            [
                "<i>Nous <b>voulons</b> les aider.</i> (We want to help them.)",
                "<i>Nous <b>pouvons</b> laisser un message.</i> (We can leave a message.)",
            ],
            [
                "<i>Vous <b>voulez</b> les aider.</i> (You want to help them.)",
                "<i>Vous <b>pouvez</b> laisser un message.</i> (You can leave a message.)",
            ],
            [
                "<i>Ils/elles <b>veulent</b> les aider.</i> (They want to help them.)",
                "<i>Ils/elles <b>peuvent</b> laisser un message.</i> (They can leave a message.)",
            ],
    ]

    for (let i = 0; i < examplesVebrsOirP2.length; i++) {
        const exampleUl = document.createElement("ul");
        for (let k = 0; k < examplesVebrsOirP2[i].length; k++) {
            const exampleUlLi = document.createElement("li");
            exampleUlLi.innerHTML = examplesVebrsOirP2[i][k];
            exampleUl.appendChild(exampleUlLi);
        }
        exampleVebrsOirP2Div.appendChild(exampleUl);
    }


    const verbsOirMoreP = document.createElement("p");
    verbsOirMoreP.innerHTML = `<i class="fa-solid fa-exclamation-triangle"></i> Here are two important verbs that don't exactly
    follow any of the patterns above: <b><i>voir</i></b> (to see), <b><i>savoir</i></b> (to know, to
    know how to).`;
    pageContent.appendChild(verbsOirMoreP);

    const verbsOirMoreDiv = document.createElement("div");
    verbsOirMoreDiv.classList.add("examples-list");
    pageContent.appendChild(verbsOirMoreDiv);

    const examplesVebrsOirMore  = [
            [
                "<i>Je <b>vois</b> une étoile.</i> (I see a star.)",
                "<i>Je <b>sais</b> cuisiner.</i> (I know how to cook.)"
            ],
            [
                "<i>Tu <b>vois</b> une étoile.</i> (You see a star.)",
                "<i>Tu <b>sais</b> cuisiner.</i> (You know how to cook.)"
            ],
            [
                "<i>Il/elle/on <b>voit</b> une étoile.</i> (He/she/one sees a star.)",
                "<i>Il/elle/on <b>sait</b> cuisiner.</i> (He/she/one knows how to cook.)"
            ],
            [
                "<i>Nous <b>voyons</b> une étoile.</i> (We see a star.)",
                "<i>Nous <b>savons</b> cuisiner.</i> (We know how to cook.)"
            ],
            [
                "<i>Vous <b>voyez</b> une étoile.</i> (You see a star.)",
                "<i>Vous <b>savez</b> cuisiner.</i> (You know how to cook.)"
            ],
            [
                "<i>Ils/elles <b>voient</b> une étoile.</i> (They see a star.)",
                "<i>Ils/elles <b>savent</b> cuisiner.</i> (They know how to cook.)"
            ]
]

for (let i = 0; i < examplesVebrsOirMore.length; i++) {
    const exampleUl = document.createElement("ul");
    for (let k = 0; k < examplesVebrsOirMore[i].length; k++) {
        const exampleUlLi = document.createElement("li");
        exampleUlLi.innerHTML = examplesVebrsOirMore[i][k];
        exampleUl.appendChild(exampleUlLi);
    }
    verbsOirMoreDiv.appendChild(exampleUl);
}


const vebrsVreH3 = document.createElement("h3");
vebrsVreH3.classList.add("red");
vebrsVreH3.innerHTML = `<i class="fa-solid fa-bolt"></i> Verbs ending in -VRE`;

const vebrsVreH4 = document.createElement("h4");
vebrsVreH4.textContent = "Pattern: vivre, suivre..."
    
pageContent.appendChild(vebrsVreH3);
pageContent.appendChild(vebrsVreH4);

const verbsVreDiv = document.createElement("div");
verbsVreDiv.classList.add("examples-list");
pageContent.appendChild(verbsVreDiv);

const examplesVerbsVre = [
    [
        "<i>Je <b>vis</b> à Paris.</i> (I live in Paris.)",
        "<i>Je <b>suis</b> ses conseils.</i> (I follow his/her advice.)"
    ],
    [
        "<i>Tu <b>vis</b> à Paris.</i> (You live in Paris.)",
        "<i>Tu <b>suis</b> ses conseils.</i> (You follow his/her advice.)"
    ],
    [
        "<i>Il/elle/on <b>vit</b> à Paris.</i> (He/she/one lives in Paris.)",
        "<i>Il/elle/on <b>suit</b> ses conseils.</i> (He/she/one follows his/her advice.)"
    ],
    [
        "<i>Nous <b>vivons</b> à Paris.</i> (We live in Paris.)",
        "<i>Nous <b>suivons</b> ses conseils.</i> (We follow his/her advice.)"
    ],
    [
        "<i>Vous <b>vivez</b> à Paris.</i> (You live in Paris.)",
        "<i>Vous <b>suivez</b> ses conseils.</i> (You follow his/her advice.)"
    ],
    [
        "<i>Ils/elles <b>vivent</b> à Paris.</i> (They live in Paris.)",
        "<i>Ils/elles <b>suivent</b> ses conseils.</i> (They follow his/her advice.)"
    ]
];

for (let i = 0; i < examplesVerbsVre.length; i++) {
    const exampleUl = document.createElement("ul");
    for (let k = 0; k < examplesVerbsVre[i].length; k++) {
        const exampleUlLi = document.createElement("li");
        exampleUlLi.innerHTML = examplesVerbsVre[i][k];
        exampleUl.appendChild(exampleUlLi);
    }
    verbsVreDiv.appendChild(exampleUl);
}

const verbsOireH3 = document.createElement("h3");
verbsOireH3.classList.add("red");
verbsOireH3.innerHTML = `<i class="fa-solid fa-bolt"></i> Verbs ending in -OIRE`;

const verbsOireH4 = document.createElement("h4");
verbsOireH4.innerHTML = "The verbs <b><i>boire</i></b> and <b><i>croire</i></b> follow 2 slightly different patterns:";
    
pageContent.appendChild(verbsOireH3);
pageContent.appendChild(verbsOireH4);

const verbsOireDiv = document.createElement("div");
verbsOireDiv.classList.add("examples-list");
pageContent.appendChild(verbsOireDiv);

const examplesVerbsOire = [
    [
        "<i>Je <b>bois</b> de l'eau.</i> (I drink water.)",
        "<i>Je <b>crois</b> que c'est vrai.</i> (I think it's true.)"
    ],
    [
        "<i>Tu <b>bois</b> de l'eau.</i> (You drink water.)",
        "<i>Tu <b>crois</b> que c'est vrai.</i> (You think it's true.)"
    ],
    [
        "<i>Il/elle/on <b>boit</b> de l'eau.</i> (He/she/one drinks water.)",
        "<i>Il/elle/on <b>croit</b> que c'est vrai.</i> (He/she/one thinks it's true.)"
    ],
    [
        "<i>Nous <b>buvons</b> de l'eau.</i> (We drink water.)",
        "<i>Nous <b>croyons</b> que c'est vrai.</i> (We think it's true.)"
    ],
    [
        "<i>Vous <b>buvez</b> de l'eau.</i> (You drink water.)",
        "<i>Vous <b>croyez</b> que c'est vrai.</i> (You think it's true.)"
    ],
    [
        "<i>Ils/elles <b>boivent</b> de l'eau.</i> (They drink water.)",
        "<i>Ils/elles <b>croient</b> que c'est vrai.</i> (They think it's true.)"
    ]
];

for (let i = 0; i < examplesVerbsOire.length; i++) {
    const exampleUl = document.createElement("ul");
    for (let k = 0; k < examplesVerbsOire[i].length; k++) {
        const exampleUlLi = document.createElement("li");
        exampleUlLi.innerHTML = examplesVerbsOire[i][k];
        exampleUl.appendChild(exampleUlLi);
    }
    verbsOireDiv.appendChild(exampleUl);
}




  
    contentArea.appendChild(pageContent);
  
    handleContentNavClicks();
  }
  