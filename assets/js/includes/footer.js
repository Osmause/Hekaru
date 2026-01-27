export function initFooter() {
    //media querie list
    let mobile = window.matchMedia("(max-width:767px)")
    let tablet = window.matchMedia("(min-width:768px) and (max-width:1023px)")
    let desktop = window.matchMedia("(min-width: 1024px)"); 
    let wrap = document.querySelector(".footer-wrap");

    function changeMedia() {
        if (desktop.matches) {
            wrap.classList.add("grid")
            wrap.classList.remove("flex")
            console.log("Classe changer");
        } else if (tablet.matches) {
            wrap.classList.remove("grid")
            wrap.classList.add("flex")
        } else{
            console.log
        }
    }

    //FINIR LE MEDIAQUERIE EN JS


    // Default state
    changeMedia();

    // Listen all breakpoint
    mobile.addEventListener("change", changeMedia)
    tablet.addEventListener("change", changeMedia)
    desktop.addEventListener("change", changeMedia)
    
}
