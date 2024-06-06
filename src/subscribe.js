export function handleCheckoutClick() {
  const subscribeBtn = document.getElementById("subscribeBtn");
  if(subscribeBtn) {
  subscribeBtn.addEventListener("click", () => {
    
  window.location = "../checkout.html";
     
  });
}
}



