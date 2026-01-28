export function mediaHeader(){
    //MediaQuerie ---------------------------
    let mobile = window.matchMedia("max-width: 26.875em");
    let desktop = window.matchMedia("(min-width: 62.5em)");
    //---------------------------------------
    //select div ----------------------------
    let plateform = document.querySelector(".nav-plateform-mobile");
    let searchIcon = document.querySelector(".search-icon-input");
    let navmenuDesktop = document.querySelector(".nav-menu-user-desktop");
    function changeMediaHeader(){
        if (desktop.matches){
            plateform.classList.add("hide")
            searchIcon.classList.add("hide")
            navmenuDesktop.classList.remove("hide")
            console.log("Changer!")
        } else {
            plateform.classList.remove("hide")
            searchIcon.classList.remove("hide")
            navmenuDesktop.classList.add("hide")
        }
    }
    changeMediaHeader()

  mobile.addEventListener("change", changeMediaHeader);
  desktop.addEventListener("change", changeMediaHeader);
}