//Export our function
export function initHeader() {
  //select wrapper div and other stuff
  let searchInputs = Array.from(document.querySelectorAll(".search-wrapper"));
  let focusInput = document.querySelector(".inputPlace");
  let closeSearch = Array.from(document.querySelectorAll(".close-btn"));
  let navMenu = document.querySelector(".nav-menu-user");
  let menuOff = document.querySelectorAll(
    ".logo-navigation, .menu-navigation-user",
  );
  console.log(searchInputs);
  console.log(closeSearch);

  //listen event when click menu open (callback)
  searchInputs.forEach((search) => {
    search.addEventListener("click", (event) => {
      handleSearch(event, search, focusInput, closeSearch, menuOff, navMenu);
    });
  });

  //when user click on the cross then close input search

  closeSearch.forEach((close) =>{
    close.addEventListener("click", (action) => {
      handleClose(action, close, focusInput, closeSearch, menuOff, navMenu);
    } )
  })

  function handleSearch(
    event,
    search,
    focusInput,
    closeSearch,
    menuOff,
    navMenu
  ) {
    console.log(event);
    /*If div.search-wrapper dont have .active class then add .active class and put "Resident Evil, JRPG, Solo..." in placeholder */
    if (!search.classList.contains("active")) {
      search.classList.add("active");
     // closeSearch.classList.remove("hide");
      navMenu.classList.remove("ji-center");
    }
    focusInput.placeholder = "Resident Evil, JRPG, Solo...";
    menuOff.forEach((element) => {
      if (!element.classList.contains("hide")) {
        element.classList.add("hide");
      }
    });
  }

  function handleClose(close,focusInput,
    closeSearch,
    menuOff,
    navMenu){
    if (!close.classList.contains("active")){
      close.classList.remove("active");
      focusInput.placeholder = "";
      focusInput.value = ""; //text area become void
      closeSearch.classList.add("hidden")
      navMenu.classList.add("ji-center")
      menuOff.forEach((element) => {
          element.classList.remove("hide");
      });
    }
    }

     
}
