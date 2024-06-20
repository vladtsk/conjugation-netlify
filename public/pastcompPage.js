import { handleContentNavClicks } from "./contentNav.js";

export function generatePastCompPage() {
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
  
    contentNav.appendChild(verbConjugationLink);
    contentNav.appendChild(iconSpan);
    contentNav.appendChild(pastTenseLink);
  
    // Create page-content div
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");
  
    const mainHeading = document.createElement("h1");
    mainHeading.innerHTML = "The past tense <span class='tense-name'>Passé Composé</span>";
  
    const subHeading = document.createElement("h2");
    subHeading.innerHTML = "When Do You Use <i>Passé Composé</i> in French?";
  
    const definitionDiv = document.createElement("div");
    definitionDiv.classList.add("definition");
  
    const definitionParagraph = document.createElement("p");
    definitionParagraph.innerHTML =
      `In French, <span class="tense-name">Passé composé</span> is used to talk about the past,
      especially to describe actions that took place and were completed in the past.`;
  
    definitionDiv.appendChild(definitionParagraph);
  
  
    const paragraph2 = document.createElement("p");
    paragraph2.innerHTML = `It often corresponds to two different tenses in English: the past simple
    (<i>I worked</i>, <i>you met</i>, <i>he saw</i>) and the present perfect (<i> have worked</i>,
    <i>you've met</i>, <i>he has seen</i>).`;

    pageContent.appendChild(mainHeading);
    pageContent.appendChild(subHeading);
    pageContent.appendChild(definitionDiv);
    pageContent.appendChild(paragraph2);


    const examplesDiv = document.createElement("div");
    examplesDiv.classList.add("examples");

    const examplesP = document.createElement("p");
    examplesP.textContent = "Take a look at these examples:";

    pageContent.appendChild(examplesDiv);
  
    const example1 = document.createElement("p");
    example1.innerHTML =
      "<i>Il <b>a acheté</b> une maison.</i> (<i>He bought</i> a house. / <i>He has bought</i> a house.)";
  
    const example2 = document.createElement("p");
    example2.innerHTML =
      "<i>Je <b>suis allé</b> au cinéma.</i> (<i>I went</i> to the cinema.)";
  
    const example3 = document.createElement("p");
    example3.innerHTML =
      "<i>Elle <b>a perdu</b> ses clés.</i> (<i>She lost</i> her keys. / <i>She has lost</i> her keys.)";
  
  
    examplesDiv.appendChild(examplesP);
    examplesDiv.appendChild(example1);
    examplesDiv.appendChild(example2);
    examplesDiv.appendChild(example3);
  
    const pastH3 = document.createElement("h3");
    pastH3.innerHTML =
      "<i class='fa-solid fa-bolt'></i> To form <span class='tense-name'>Passé Composé</span> you'll need 2 parts:";

  const list = document.createElement("ul");
  list.classList.add("list-no-bullet");

  list.innerHTML = `<li><i class="fa-solid fa-arrow-right"></i> the <b>present tense</b>
  of the verb <b>avoir</b> (meaning to have) or <b>être</b> (meaning to be),</li>
<li><i class="fa-solid fa-arrow-right"></i> a part of the main verb
  called the <b>past participle</b> (<i>acheté</i>, <i>allé</i>, <i>vu</i>, etc.).`

  pageContent.appendChild(pastH3);
  pageContent.appendChild(list);



  
  contentArea.appendChild(pageContent);
  
  handleContentNavClicks();
  }
  