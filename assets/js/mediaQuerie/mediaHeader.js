export function mediaHeader(){
    //MediaQuerie ---------------------------
    let mobile = window.matchMedia("max-width: 430px");
    let desktop = window.matchMedia("(min-width: 1000px)");
    //---------------------------------------
    //select div ----------------------------
    let plateform = document.querySelector(".nav-plateform-mobile");
    let searchPhone = document.querySelector(".isMobile");
    let navmenuDesktop = document.querySelector(".nav-menu-user-desktop");
    let headerState = document.querySelector(".header-state")
     //---------------------------------------
    function changeMediaHeader(){
        if (desktop.matches){
            plateform.classList.add("hide")
            searchPhone.classList.add("hide")
            navmenuDesktop.classList.remove("hide")
            headerState.classList.add("bg-transparent")
            console.log("Changer!")
        } else {
            plateform.classList.remove("hide")
            searchPhone.classList.remove("hide")
            navmenuDesktop.classList.add("hide")
            headerState.classList.remove("bg-transparent")
        }
    }
    changeMediaHeader()

  mobile.addEventListener("change", changeMediaHeader);
  desktop.addEventListener("change", changeMediaHeader);
}