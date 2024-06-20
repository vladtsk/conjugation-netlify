import { handleContentNavClicks } from "./contentNav.js";

export function generateIntroPage() {
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
  
    introLink.textContent = "Intro";
    introLink.classList.add("introLink");
  
    contentNav.appendChild(verbConjugationLink);
    contentNav.appendChild(iconSpan);
    contentNav.appendChild(introLink);
  
    // Create page-content div
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");
  
    const mainHeading = document.createElement("h1");
    mainHeading.textContent = "Introduction to French conjugation and tenses";
  
    const subHeading = document.createElement("h2");
    subHeading.textContent = "What is verb conjugation?";
  
    const definitionDiv = document.createElement("div");
    definitionDiv.classList.add("definition");
  
    const definitionParagraph = document.createElement("p");
    definitionParagraph.innerHTML =
      `<i class="fa-solid fa-book-open"></i> <b>Verb conjugation</b> refers to changing a
      verb to express different aspects, such as when the action happens, who is
      performing the action, whether the action is completed or ongoing.`;
  
    definitionDiv.appendChild(definitionParagraph);

    pageContent.appendChild(mainHeading);
    pageContent.appendChild(subHeading);
    pageContent.appendChild(definitionDiv);



  
    const exampleP = document.createElement("p");
    exampleP.innerHTML = `For example, if you want to express <i>"I work"</i> or <i>"I'm working"</i>, you'll use: <b>je
    travaille</b>.
For <i>"you work"</i> / <i>"you're working"</i> (singular, informal), you'd use: <b>tu
    travailles</b>.
And for <i>"he works"</i> / <i>"he's working"</i>, the correct phrase is: <b>il travaille.</b></p>
<p>So you can't just say "je travaill<span class="red">er</span>", "tu travaill<span
    class="red">er</span>", etc. You have to
conjugate the verb,
so in this case you have to change the ending according to the subject (the person).`


const subHeading2 = document.createElement("h2");
subHeading2.textContent = "What is an infinitive?";

pageContent.appendChild(subHeading2);

const infinitiveP = document.createElement("p");
infinitiveP.innerHTML = `Each verb has an <b>infinitive</b> form, which typically have one of these endings:
<i>"-er"</i>,
<i>"-ir"</i>, or
<i>"-re"</i>.
It's the form of a verb that has not been conjugated and that you can find in a dictionary.`

const infinitiveP2 = document.createElement("p");
infinitiveP2.innerHTML = "For example, <b>parler</b> (to speak), <b>finir</b> (to finish), <b>attendre</b> (to wait).";



pageContent.appendChild(infinitiveP);
pageContent.appendChild(infinitiveP2);

contentArea.appendChild(pageContent);

handleContentNavClicks();
  
  }
  