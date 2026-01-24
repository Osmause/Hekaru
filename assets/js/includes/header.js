//Export our function

export function initHeader() {
  //select wrapper div and other stuff
  let search = document.querySelector(".search-wrapper");
  let focusInput = document.querySelector(".inputPlace");
  let menuOff = document.querySelectorAll(
    ".logo-navigation, .menu-navigation-user",
  );

  //listen event when click menu open (callback)
  search.addEventListener("click", (event) =>{
    handleSearch(event, search, menuOff, focusInput)
  })

  

  // When user click outside
  window.addEventListener("click", (event) => {
    if (!search.contains(event.target)) {
      search.classList.remove("active");
      focusInput.placeholder = "";
      focusInput.value = ""; //text area become void
      menuOff.forEach((element) => {
       
          element.classList.remove("hidden");
      
      });
    }
  });
}

function handleSearch (event, search, menuOff, focusInput) {
  /*If div.search-wrapper dont have .active class then add .active class and put  "Rechercher un jeu" in placeholder */
  console.log(event)  
  if (!search.classList.contains("active")) {
      search.classList.add("active");
    }
    focusInput.placeholder = "Rechercher un jeu";

    menuOff.forEach((element) => {
      if (!element.classList.contains("hidden")) {
        element.classList.add("hidden");
      }
    });
}