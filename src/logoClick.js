// Reloading the app when a user clicks on the logo

export function reloadAppOnLogoClick() {
    const logo = document.querySelector(".logo");
    if(logo) {
        logo.addEventListener("click", ()=> {
            location.reload();
        })
    }
}