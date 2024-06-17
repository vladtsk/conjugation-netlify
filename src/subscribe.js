export function handleCheckoutClick() {
  const subscribeBtn = document.getElementById("subscribeBtn");
  if(subscribeBtn) {
  subscribeBtn.addEventListener("click", () => {
    
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

