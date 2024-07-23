import { generateContactForm } from "./forms.js";

// Header menu acount popup
export function handleMenuAccountClick() {
    const accountBtn = document.querySelector(".menu-element.account");
    const accountPopup = document.querySelector(".account-popup");
    const helpPopup = document.querySelector(".help-popup");

    if(accountBtn) {
        accountBtn.addEventListener("click", ()=> {
            accountPopup.style.display = "flex";

            if(helpPopup && helpPopup.style.display !== "none") {
                helpPopup.style.display = "none";
            }
        })
    }

    
}


// Header menu help popup
export function handleMenuHelpClick() {
    const helpBtn = document.querySelector(".menu-element.help");
    const helpPopup = document.querySelector(".help-popup");
    const accountPopup = document.querySelector(".account-popup");

    if(helpBtn) {
        helpBtn.addEventListener("click", ()=> {
            helpPopup.style.display = "flex";

            if(accountPopup && accountPopup.style.display !== "none") {
                accountPopup.style.display = "none";
            }
        })
    }

 
   
}


   // Generate the contact form

   /*export function handleContactBtnClick() {

    const contactBtn = document.querySelector(".contact-button");
    if(contactBtn){
       
            

            const contactForm = document.querySelector(".contact-form");
            console.log(contactForm);



            contactForm.addEventListener("submit", (event) => {
                event.preventDefault();
                
              })  

            //event.stopPropagation();
    
    }
   } */