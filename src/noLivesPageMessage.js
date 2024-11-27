// Show a message when a user has run out of lives

import { handleCheckoutClickNoSub } from "./subscribe.js";

export function showNoMoreLivesMessage() {
  //const main = document.querySelector("main");
  const contentArea = document.querySelector(".content-area");
  const mainSection = document.querySelector(".mainSection");
  if (mainSection) {
    contentArea.removeChild(mainSection);
  }

  const noLivesDiv = document.createElement("div");
  noLivesDiv.classList.add("noSubDiv");
  contentArea.appendChild(noLivesDiv);

  const noLivesMsg = document.createElement("h1");
  noLivesMsg.innerHTML =
    "<i class='fa-solid fa-heart-crack'></i> Out of hearts!";
  noLivesDiv.appendChild(noLivesMsg);

  const noLivesExpl = document.createElement("p");
  noLivesExpl.classList.add("noSubExpl1");
  noLivesExpl.innerText =
    "You have no more hearts left! Come back in an hour to continue, or get a premium subscription (starting at €0.99 / month) to use the app with no limits.";
  noLivesDiv.appendChild(noLivesExpl);

  const subscribeSection = document.createElement("div");
  subscribeSection.classList.add("subscribeSection");
  noLivesDiv.appendChild(subscribeSection);
  const subscribeBtn = document.createElement("button");
  subscribeBtn.id = "noSubsubscribeBtn";
  subscribeBtn.setAttribute("type", "submit");
  subscribeBtn.innerText = "Learn more";
  subscribeSection.appendChild(subscribeBtn);

  handleCheckoutClickNoSub();
}
