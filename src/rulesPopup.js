// A popup explaining how to use the app

// Building the popup structure

export function generateRulesPopupSection() {

  const main = document.querySelector("main");

const blurContainer = document.createElement("div");
blurContainer.classList.add("blurContainer");
main.appendChild(blurContainer);
blurContainer.style.display = "none";

const rulesSection = document.createElement("div");
rulesSection.classList.add("rulesSection");

main.appendChild(rulesSection);
rulesSection.style.display = "none";

const closeBtn = document.createElement("i");
closeBtn.classList.add("fa-solid", "fa-xmark", "popup-close");
rulesSection.appendChild(closeBtn);

const rulesDiv1 = document.createElement("div");
rulesSection.appendChild(rulesDiv1);
rulesDiv1.innerHTML = "<h1>How to use the app</h1>";

const rulesStartDiv = document.createElement("div");
rulesSection.appendChild(rulesStartDiv);
rulesStartDiv.classList.add("rulesStartDiv");
rulesStartDiv.innerHTML =
  "<i class='fa-solid fa-rocket'></i><h2>Getting started</h2>";

const rulesStart = document.createElement("div");
rulesSection.appendChild(rulesStart);

const rulesStartP1 = document.createElement("p");
rulesStart.appendChild(rulesStartP1);
rulesStartP1.innerHTML =
  "You can get started by simply selecting a tense and a number of phrases you'd like to practise and click <span class='bold'>'Start now'</span> on the main page (welcome page).";

const rulesStartP2 = document.createElement("p");
rulesStart.appendChild(rulesStartP2);
rulesStartP2.innerHTML =
  "Premium users can access their accounts by clicking the <span class='bold'>'login'</span> button to <span class='bold'>track their progress</span>, practise additional verbs and tenses and take advantage of our <u>smart repetition system</u>. The system takes into account your mistakes and shows you phrases at specific intervals to help you remember information faster.";

const rulesGoalDiv = document.createElement("div");
rulesSection.appendChild(rulesGoalDiv);
rulesGoalDiv.classList.add("rulesGoalDiv");
rulesGoalDiv.innerHTML =
  "<i class='fa-regular fa-compass'></i><h2>The goal</h2>";

const rulesGoal = document.createElement("div");
rulesSection.appendChild(rulesGoal);

const rulesGoalP1 = document.createElement("p");
rulesGoal.appendChild(rulesGoalP1);
rulesGoalP1.innerHTML =
  "The goal is to practise conjugation of <span class='bold'>common verbs</span> in various tenses within context.";

const rulesGoalP2 = document.createElement("p");
rulesGoal.appendChild(rulesGoalP2);
rulesGoalP2.innerHTML =
  "You will see phrases with one or several blank spaces and a verb to conjugate in the selected tense. You'll need to type a conjugated verb form in the input field to complete the sentence and click <span class='bold'>'submit'</span>. You can use buttons with <u>special characters</u> like 'é' or 'ç' to type faster.";

const rulesPronuncDiv = document.createElement("div");
rulesSection.appendChild(rulesPronuncDiv);
rulesPronuncDiv.classList.add("rulesPronuncDiv");
rulesPronuncDiv.innerHTML =
  "<i class='fa-solid fa-volume-low'></i><h2>The pronunciation</h2>";

const rulesPronunc = document.createElement("div");
rulesSection.appendChild(rulesPronunc);

const rulesPronuncP1 = document.createElement("p");
rulesPronunc.appendChild(rulesPronuncP1);
rulesPronuncP1.innerHTML =
  "Once you've submitted your answer, you'll see a <span class='bold'>speaker icon</span> appear next to the phrase. Click on it to hear an automatically generated pronunciation of the phrase.";

const rulesPronuncP2 = document.createElement("p");
rulesPronunc.appendChild(rulesPronuncP2);
rulesPronuncP2.innerHTML =
  "Note that this feature might not be available in all browsers, so we recommend using <u>Chrome</u>, <u>Edge</u>, or <u>Safari</u>.";

// Adding an event listener

//const rulesBtn = document.querySelector(".rules-button");
const helpBtn = document.querySelector(".menu-element.help");
helpBtn.addEventListener("click", (event) => {
  rulesSection.style.display = "block";
  blurContainer.style.display = "block";
  event.stopPropagation();
});

closeBtn.addEventListener("click", (event) => {
  rulesSection.style.display = "none";
  blurContainer.style.display = "none";
  event.stopPropagation();
});

}

