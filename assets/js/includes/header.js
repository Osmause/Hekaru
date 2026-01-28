//Export our function
export function initHeader() {
  //select wrapper div and other stuff
  let search = document.querySelector(".search-wrapper");
  let focusInput = document.querySelector(".inputPlace");
  let closeSearch = document.querySelector(".close-search");
  let navMenu = document.querySelector(".nav-menu-user");
  let menuOff = document.querySelectorAll(
    ".logo-navigation, .menu-navigation-user",
  );

  //listen event when click menu open (callback)
  search.addEventListener("click", (event) => {
    handleSearch(event, search, focusInput, closeSearch, menuOff, navMenu);
  });

  // When user click outside
  window.addEventListener("click", (event) => {
    if (!search.contains(event.target)) {
      search.classList.remove("active");
      focusInput.placeholder = "";
      focusInput.value = ""; //text area become void
      closeSearch.classList.add("hide");  
      setTimeout(() => {
        navMenu.classList.add("ji-center");
        menuOff.forEach((element) => {
          element.classList.remove("hide");
        });
      }, 310);
    }
  });
}

function handleSearch(
  event,
  search,
  focusInput,
  closeSearch,
  menuOff,
  navMenu,
) {
  /*If div.search-wrapper dont have .active class then add .active class and put  "Resident Evil, JRPG, Solo..." in placeholder */
  console.log(event);
  if (!search.classList.contains("active")) {
    search.classList.add("active");
    closeSearch.classList.remove("hide");
    navMenu.classList.remove("ji-center");
  }
  focusInput.placeholder = "Resident Evil, JRPG, Solo...";
  menuOff.forEach((element) => {
    if (!element.classList.contains("hide")) {
      element.classList.add("hide");
    }
  });
}
