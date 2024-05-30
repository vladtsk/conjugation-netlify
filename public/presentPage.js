export function generatePresentPage() {
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

  // Create page-content div
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  const mainHeading = document.createElement("h1");
  mainHeading.textContent = "The present tense (le présent de l'indicatif)";

  const subHeading = document.createElement("h2");
  subHeading.textContent = "When Do You Use the Present Tense in French?";

  const definitionDiv = document.createElement("div");
  definitionDiv.classList.add("definition");

  const definitionParagraph = document.createElement("p");
  definitionParagraph.innerHTML =
    `<i class="fa-solid fa-lightbulb"></i> In French, <span class="tense-name">the simple present tense</span> (le présent de 
      l'indicatif) is often used to describe an action that is happening now, a habit, a general fact/truth or a future plan.`;

  definitionDiv.appendChild(definitionParagraph);

  const examplesDiv = document.createElement("div");
  examplesDiv.classList.add("examples");

  const examplesIntro = document.createElement("p");
  examplesIntro.textContent = "Here are a few examples:";

  const example1 = document.createElement("p");
  example1.innerHTML =
    "<i>Je <b>regarde</b> un film.</i> (I'm <b>watching</b> a film.)";

  const example2 = document.createElement("p");
  example2.innerHTML =
    "<i>Il <b>travaille</b> tous les jours.</i> (He <b>works</b> every day.)";

  const example3 = document.createElement("p");
  example3.innerHTML =
    "<i>Elle <b>parle</b> trois langues.</i> (She <b>speaks</b> three languages.)";

  const example4 = document.createElement("p");
  example4.innerHTML =
    "<i>Vous <b>arrivez</b> à 16h.</i> (You <b>arrive</b> at 4pm.)";

  examplesDiv.appendChild(examplesIntro);
  examplesDiv.appendChild(example1);
  examplesDiv.appendChild(example2);
  examplesDiv.appendChild(example3);
  examplesDiv.appendChild(example4);

  pageContent.appendChild(mainHeading);
  pageContent.appendChild(subHeading);
  pageContent.appendChild(definitionDiv);
  pageContent.appendChild(examplesDiv);

  contentArea.appendChild(pageContent);

}
