// Close popups (select popups on the first page + account popup) when clicked outside

export function handleClickOutsidePopup(event) {
    
    const tenseSelectPopupContainer = document.querySelector(".tenseSelectPopupContainer");
    const blurContainer = document.querySelector(".blurContainer");
    const selectDiv = document.querySelector(".selectDiv");
    const selectPhrTypeContainer = document.querySelector(".selectPhrTypeContainer");
    const accountPopup = document.querySelector(".account-popup");
    //menu-element account

   
      if(tenseSelectPopupContainer && tenseSelectPopupContainer.style.display !== "none" && !tenseSelectPopupContainer.contains(event.target) && event.target !== selectDiv) {
        if(blurContainer) {
          blurContainer.style.display = "none";
        }
      
        tenseSelectPopupContainer.style.display = "none";
      
      }
      
    
      if(selectPhrTypeContainer && selectPhrTypeContainer.style.display !== "none" && !selectPhrTypeContainer.contains(event.target)) {
              
        selectPhrTypeContainer.style.display = "none";
      
      }

      if(accountPopup && accountPopup.style.display !== "none" && !accountPopup.contains(event.target)){
        accountPopup.style.display = "none";
      }
  
  }