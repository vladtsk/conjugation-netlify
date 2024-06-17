// Show a message for authenticated users with no active subscription

import { handleCheckoutClickNoSub } from "./subscribe.js";
export function showNoSubMessage() {
    //const main = document.querySelector("main");
    //const mainSection = document.querySelector(".mainSection");

    /*const sidebarContainer = document.querySelector(".sidebarContainer");
    const sidebarTabletContainer = document.querySelector(".sidebarTablet");
    const mobileMenu = document.querySelector(".mobileMenu");

    if(sidebarContainer && sidebarTabletContainer && mobileMenu) {
        sidebarContainer.style.display = "none";
        sidebarTabletContainer.style.display = "none";
        mobileMenu.style.display = "none";
    }
*/
    const contentArea = document.querySelector(".content-area");

    const noSubDiv = document.createElement("div");
    noSubDiv.classList.add("noSubDiv");
    contentArea.appendChild(noSubDiv);

    const noSubMsg = document.createElement("h1");
    noSubMsg.innerText = "You currently have no active subscription";
    noSubDiv.appendChild(noSubMsg);

    const noSubExpl = document.createElement("p");
    noSubExpl.classList.add("noSubExpl1");
    noSubExpl.innerText =
        "Click the 'subscribe' button below to select a subscription or log out to use the free version.";
    noSubDiv.appendChild(noSubExpl);

    const subscribeSection = document.createElement("div");
    subscribeSection.classList.add("subscribeSection");
    noSubDiv.appendChild(subscribeSection);
    const subscribeBtn = document.createElement("button");
    subscribeBtn.id = "noSubsubscribeBtn";
    subscribeBtn.setAttribute("type", "submit");
    subscribeBtn.innerText = "Subscribe";
    subscribeSection.appendChild(subscribeBtn);

    handleCheckoutClickNoSub();
}