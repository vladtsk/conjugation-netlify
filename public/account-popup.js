// Header menu acount popup
export function handleMenuAccountClick() {
    const accountBtn = document.querySelector(".menu-element.account");
    const accountPopup = document.querySelector(".account-popup");
    if(accountBtn) {
        accountBtn.addEventListener("click", ()=> {
            accountPopup.style.display = "flex";
        })
    }
}
