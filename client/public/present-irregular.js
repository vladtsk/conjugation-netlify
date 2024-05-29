export function generatePresentIrregularPage() {
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

    const presentGroup3Link = document.createElement("a");
    presentGroup3Link.textContent = "Irregular verbs";

    contentNav.appendChild(iconSpan1);
    contentNav.appendChild(presentGroup3Link);



    // Create page-content div
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");
  
    const mainHeading = document.createElement("h1");
    mainHeading.textContent = "Irregular Verbs in the Present Tense";

    const irregP = document.createElement("p");
    irregP.innerHTML = `Let's look at 4 very common irregular verbs conjugated in the present tense:
    <b><i>être</i></b> (to be), <i><b>avoir</i></b> (to have), <i><b>aller</i></b> (to go),
    <i><b>faire</i></b> (to do, to make).`;
    
    pageContent.appendChild(mainHeading);
    pageContent.appendChild(irregP);
    
    const exampleDiv = document.createElement("div");
    exampleDiv.classList.add("examples-list");
    pageContent.appendChild(exampleDiv);

    const examples = [
        [
            "<i>Je <b>suis</b> fatigué.</i> (I'm tired.)",
            "<i>J'<b>ai</b> une voiture.</i> (I have a car.)",
            "<i>Je <b>vais</b> au travail.</i> (I'm going to work.)",
            "<i>Je <b>fais</b> du yoga.</i> (I do yoga.)"
        ],
        [
            "<i>Tu <b>es</b> fatigué.</i> (You're tired.)",
            "<i>Tu <b>as</b> une voiture.</i> (You have a car.)",
            "<i>Tu <b>vas</b> au travail.</i> (You're going to work.)",
            "<i>Tu <b>fais</b> du yoga.</i> (You do yoga.)"
        ],
        [
            "<i>Il/elle/on <b>est</b> fatigué.</i> (He/she/one is tired.)",
            "<i>Il/elle/on <b>a</b> une voiture.</i> (He/she/one has a car.)",
            "<i>Il/elle/on <b>va</b> au travail.</i> (He/she/one is going to work.)",
            "<i>Il/elle/on <b>fait</b> du yoga.</i> (He/she/one does yoga.)"
        ],
        [
            "<i>Nous <b>sommes</b> fatigués.</i> (We're tired.)",
            "<i>Nous <b>avons</b> une voiture.</i> (We have a car.)",
            "<i>Nous <b>allons</b> au travail.</i> (We're going to work.)",
            "<i>Nous <b>faisons</b> du yoga.</i> (We do yoga.)"
        ],
        [
            "<i>Vous <b>êtes</b> fatigués.</i> (You're tired.)",
            "<i>Vous <b>avez</b> une voiture.</i> (You have a car.)",
            "<i>Vous <b>allez</b> au travail.</i> (You're going to work.)",
            "<i>Vous <b>faites</b> du yoga.</i> (You do yoga.)"
        ],
        [
            "<i>Ils/elles <b>sont</b> fatigués.</i> (They're tired.)",
            "<i>Ils/elles <b>ont</b> une voiture.</i> (They have a car.)",
            "<i>Ils/elles <b>vont</b> au travail.</i> (They're going to work.)",
            "<i>Ils/elles <b>font</b> du yoga.</i> (They do yoga.)"
        ]
    ]
    
    for (let i = 0; i < examples.length; i++) {
        const exampleUl = document.createElement("ul");
        for (let k = 0; k < examples[i].length; k++) {
            const exampleUlLi = document.createElement("li");
            exampleUlLi.innerHTML = examples[i][k];
            exampleUl.appendChild(exampleUlLi);
        }
        exampleDiv.appendChild(exampleUl);
    }

    const tipDiv = document.createElement("div");
    const tipP = document.createElement("p");
    tipP.classList.add("tip")
    tipP.innerHTML = `<i class="fa-solid fa-exclamation-triangle"></i> Although in most cases <i>"être"</i> can be
    translated as "to be" and <i>"avoir"</i> as "to have",
    this isn't always the case. For example, to say "I'm hungry" you use "avoir" and not "être":
    <i>"<b>J'ai</b> faim"</i> (literally "I have hunger").
    To say how old you are, it's the same thing: <i>"<b>J'ai</b> 25 ans"</i> and not "Je <span
        class="red">suis</span> 25 ans".`;
    tipDiv.appendChild(tipP);

    pageContent.appendChild(tipDiv);



    contentArea.appendChild(pageContent);

}