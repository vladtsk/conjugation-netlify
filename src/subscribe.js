export function handleCheckoutClick() {
  //const subscribeBtn = document.getElementById("subscribeBtn");
  //const subscribeBtn = document.querySelector(".fa-gem"); 
  const premiumBtn = document.querySelector(".menu-element.premiumBtn");
  if(premiumBtn) {
  premiumBtn.addEventListener("click", () => {
    
  window.location = "../checkout.html";
     
  });
}
}

export function handleCheckoutClickNoSub() {
  const noSubsubscribeBtn = document.getElementById("noSubsubscribeBtn");
  if(noSubsubscribeBtn) {
    noSubsubscribeBtn.addEventListener("click", () => {
    
  window.location = "../checkout.html";
     
  });
}
}
