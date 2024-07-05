import { handleContentNavClicks } from "./contentNav.js";

export function generateSubjunctivePage() {
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
  
    const subjunctiveLink = document.createElement("a");
    subjunctiveLink.textContent = "The French subjunctive";
    subjunctiveLink.classList.add("subjunctiveLink");
  
    contentNav.appendChild(verbConjugationLink);
    contentNav.appendChild(iconSpan);
    contentNav.appendChild(subjunctiveLink);
  
    // Create page-content div
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");
  
    const mainHeading = document.createElement("h1");
    mainHeading.textContent = `The French subjunctive (Le subjonctif)`;
    pageContent.appendChild(mainHeading);

    const definitionDiv = document.createElement("div");
    definitionDiv.classList.add("definition");

    const definitionParagraph = document.createElement("p");
    definitionParagraph.innerHTML =
    `<i class="fa-solid fa-book-open"></i> <b>The French subjunctive (le subjonctif)</b> 
    is a grammatical mood (a verb form or a category such as "imperative" or "conditional") 
    used after certain verbs and phrases expressing emotions, desires, doubts, necessity, etc.`;

    definitionDiv.appendChild(definitionParagraph);
    pageContent.appendChild(definitionDiv);
  //
  
    const explanation = document.createElement("div");
    explanation.classList.add("explanation");
    pageContent.appendChild(explanation);

    const explanationParagraph = document.createElement("p");
    explanationParagraph.innerHTML = 
      `It may seem complicated, but it comes down to knowing whether a verb or expression 
      takes the subjunctive mood (or, in contrast, the indicative mood). Look at this example:`;

    const exampleParagraph = document.createElement("p");
    exampleParagraph.innerHTML = 
      `<i><b>Il faut que tu sois là à 18h.</b> ("You need to be here at 6pm." / 
      "You must be here at 6pm." or more literally "It is necessary that you be here…")</i>`;

    const incorrectExampleParagraph = document.createElement("p");
    incorrectExampleParagraph.innerHTML = 
      `In this case, it's not correct to say "<i>Il faut que tu <span class="wrong">es</span> là</i>", 
      because "<b>il faut que</b>" (it's necessary that) is always used with a subjunctive, 
      and the present subjunctive form of 'être' for 'tu' is '<b>tu sois</b>'.`;

    const contrastParagraph = document.createElement("p");
    contrastParagraph.innerHTML = 
      `In contrast, "<i>espérer que</i>" does not use the subjunctive, so you should say 
      "<i>J'espère que tu <b>pourras</b> m'aider.</i>" and not "<i>J'espère que tu 
      <span class="wrong">puisses</span> m'aider.</i>"`;

    explanation.append(explanationParagraph, exampleParagraph, incorrectExampleParagraph, contrastParagraph);



    const commonVerbsHeading = document.createElement("h3");
commonVerbsHeading.textContent = "Here are some common verbs and expressions after which the subjunctive is used:";
pageContent.appendChild(commonVerbsHeading);

const verbsList = document.createElement("ul");
verbsList.classList.add("list-no-bullet");

const desiresLi = document.createElement("li");
desiresLi.classList.add("list-paragraph");
desiresLi.innerHTML = `<i class="fa-solid fa-arrow-right"></i> <b>Vouloir, souhaiter, aimer, demander</b> (que)</b><ul>
    <li>- <i><u>Je souhaite que</u> tu <b>viennes</b> me voir.</i> (I'd like you to come and see me.)</li>
    <li>- <i><u>Il voudrait que</u> vous <b>finissiez</b> le rapport avant samedi.</i> (He'd like you to finish the report by Saturday.)</li>
  </ul>`;

const feelingsLi = document.createElement("li");
feelingsLi.classList.add("list-paragraph");
feelingsLi.innerHTML = `<i class="fa-solid fa-arrow-right"></i> Je suis, tu es... + <b>content, ravi, furieux, déçu, triste, désolé</b> ... (que)<ul>
    <li>- <i><u>Ils sont contents que</u> nous <b>partions</b> avec eux.</i> (They're happy we're going with them.)</li>
    <li>- <i><u>Je suis désolé que</u> vous ne <b>puissiez</b> pas venir.</i> (I'm sorry you can't come.)</li>
  </ul>`;

const importanceLi = document.createElement("li");
importanceLi.classList.add("list-paragraph");
importanceLi.innerHTML = `<i class="fa-solid fa-arrow-right"></i> C'est/Il est + <b>bien, important, intéressant, bizarre, étonnant</b>... (que)<ul>
    <li>- <i><u>C'est bien que</u> les habitants <b>prennent</b> soin de leur ville.</i> (It's good that residents are taking care of their town.)</li>
    <li>- <i><u>Il est important que</u> tu <b>sois</b> là.</i> (It's important that you're here.)</li>
  </ul>`;

const doubtLi = document.createElement("li");
doubtLi.classList.add("list-paragraph");
doubtLi.innerHTML = `<i class="fa-solid fa-arrow-right"></i> <b>Je ne pense pas</b> (que), <b>je ne crois pas</b> (que), <b>je ne suis pas sûr</b> (que), <b>je doute</b> (que)*… (phrases expressing doubt or uncertainty)<ul>
    <li>- <i><u>Je ne suis pas sûr qu</u>'il <b>fasse</b> beau demain.</i> (I'm not sure if the weather will be good tomorrow.)</li>
    <li>- <i>Il <u>doute que</u> Jade <b>vienne</b> voir le match.</i> (He doubts that Jade will come to watch the match.)</li>
  </ul>`;

const necessityLi = document.createElement("li");
necessityLi.classList.add("list-paragraph");
necessityLi.innerHTML = `<i class="fa-solid fa-arrow-right"></i> <b>Il faut</b> (que), <b>il est nécessaire</b> (que)…<ul>
    <li>- <i><u>Il faut que</u> j'<b>aille</b> à la poste.</i> (I need to go to the post office.)</li>
  </ul>`;

const connectorsLi = document.createElement("li");
connectorsLi.classList.add("list-paragraph");
connectorsLi.innerHTML = `<i class="fa-solid fa-arrow-right"></i> Various connectors like "<b>pour que</b>" (so that), 
"<b>avant que</b>" (before), "<b>bien que</b>" (although), "<b>en attendant que</b>" (until), etc.<ul>
    <li>- <i>Je vais regarder ma série <u>en attendant que</u> tu <b>finisses</b> ton travail.</i> (I'm going to watch my series until you finish your work.)</li>
  </ul>`;

verbsList.append(desiresLi, feelingsLi, importanceLi, doubtLi, necessityLi, connectorsLi);
pageContent.appendChild(verbsList);


const noteDiv = document.createElement("div");
noteDiv.classList.add("explanation");
const noteP = document.createElement("p");
noteDiv.appendChild(noteP);

noteP.innerHTML = `* In affirmative sentences such as <i>"Je suis sûr que"</i>, <i>"je pense que…"</i>, we <u>do not</u> use the subjunctive: 
<i>"Je suis sûr qu'il <u>fera</u> beau demain"</i> (I'm sure the weather will be good tomorrow).`
    
pageContent.appendChild(noteDiv);

    const subjunctiveTipExplanation = document.createElement("div");
    subjunctiveTipExplanation.classList.add("explanation");
    
    const subjunctiveTipParagraph = document.createElement("p");

    subjunctiveTipParagraph.innerHTML = 
      `<i class="fa-regular fa-lightbulb"></i> As you can see, the subjunctive always follows "<b>que</b>" (or sometimes "<b>qui</b>"), 
      but the presence of "<b>que</b>" or "<b>qui</b>" does not mean that you should use the subjunctive. 
      We recommend that you learn the expressions that require the subjunctive and you can do this by 
      practising the sentences using this app in the "practice mode" (just click the "practice" button and select the subjunctive).`;
      
    subjunctiveTipExplanation.appendChild(subjunctiveTipParagraph);
    
    
    const subjunctiveNoteDiv = document.createElement("div");
    subjunctiveNoteDiv.classList.add("explanation");

    const subjunctiveNoteParagraph = document.createElement("p");
    subjunctiveNoteParagraph.innerHTML = 
      `<i class="fa-solid fa-triangle-exclamation"></i> Note that the subjunctive is usually used when there are <u>2 different subjects</u> in the sentence. 
      In other words, you can't have the same subject twice when using the subjunctive. 
      To avoid repeating the subject, we use the infinitive:`;
    
    const subjunctiveNoteParagraph2 = document.createElement("p");
    subjunctiveNoteParagraph2.innerHTML = `We don't say "<u>Je</u> veux que <u>je</u> <span class="wrong">vienne</span>.", we say "Je veux <b>venir</b>."`


    subjunctiveNoteDiv.appendChild(subjunctiveNoteParagraph);
    subjunctiveNoteDiv.appendChild(subjunctiveNoteParagraph2);

    pageContent.appendChild(subjunctiveTipExplanation);
    pageContent.appendChild(subjunctiveNoteDiv);

    contentArea.appendChild(pageContent);

    handleContentNavClicks();
}
