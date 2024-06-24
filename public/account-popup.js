// Header menu acount popup
export function handleMenuAccountClick() {
    const acountBtn = document.querySelector(".menu-element.account");
    const accountPopup = document.querySelector(".account-popup");
    if(acountBtn) {
        acountBtn.addEventListener("click", ()=> {
            accountPopup.style.display = "block";
        })
    }
}
