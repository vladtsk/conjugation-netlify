export function generateLoader() {
    const main = document.querySelector("main");
    let loader = document.querySelector(".loader");
    if(loader) {
        loader.classList.remove("loader-hidden");
       
    } else {
        loader = document.createElement("div"); 
        loader.classList.add("loader");
        main.appendChild(loader);
      

    }
    
    
}

export function hideLoader() {
        //const main = document.querySelector("main");
        const loader = document.querySelector(".loader");
        
        if(loader) {
            loader.classList.add("loader-hidden");
        }
        
    
}