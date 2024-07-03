export function generateLoader() {
    const main = document.querySelector("main");
    let loader = document.querySelector(".loader");
    if(loader) {
        loader.classList.remove("loader-hidden");
        console.log("show loader")
    } else {
        loader = document.createElement("div"); 
        loader.classList.add("loader");
        main.appendChild(loader);
        console.log("generate loader")

    }
    
    
}

export function hideLoader() {
        //const main = document.querySelector("main");
        const loader = document.querySelector(".loader");
        console.log(loader);
        if(loader) {
            loader.classList.add("loader-hidden");
            console.log("loader classlist", loader.classList)
            /*loader.addEventListener("transitionend", ()=>{
            if(loader.parentNode) {
                loader.parentNode.removeChild(loader);
            } else {
                console.error("Parent node is null or undefined.");
            }
            
            })*/
        }
        
    
}