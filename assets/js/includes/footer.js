export function initFooter() {
  //media querie list ------------------------------
  let mobile = window.matchMedia("(max-width:767px)");
  let tablet = window.matchMedia("(min-width:768px) and (max-width:1023px)");
  let desktop = window.matchMedia("(min-width: 1024px)");
  //--------------------------------------
  //Select div ---------------------------
  let container = document.querySelector(".footer-container")
  let wrapped = document.querySelector(".footer-wrapped");
  let wrap = document.querySelector(".footer-wrap");
  let content = document.querySelector(".nav-footer");
  //--------------------------------------
  function changeMedia() {
    // PC
    if (desktop.matches) {
      container.classList.add("padding-5-15")
       container.classList.remove("padding-5")
      wrapped.classList.remove("column");
      wrapped.classList.remove("ai-center");
      wrap.classList.remove("column");
      wrap.classList.remove("ai-center");
      content.classList.remove("column");
      content.classList.remove("jc-center");
      content.classList.add("flex-wrap");
    } else if (tablet.matches) {
      // tablet
      container.classList.remove("padding-5-15")
      container.classList.add("padding-5")
      wrapped.classList.remove("column");
      wrapped.classList.add("ai-center");
      wrap.classList.remove("column");
      wrap.classList.add("ai-center");
      content.classList.remove("column");
      content.classList.add("jc-center");
      content.classList.add("flex-wrap");
    } else {
      // mobile
      wrapped.classList.add("column");
      wrap.classList.add("column");
      content.classList.add("column");
      content.classList.remove("flex-wrap");
    }
  }

  // Default state
  changeMedia();

  // Listen all breakpoint
  mobile.addEventListener("change", changeMedia);
  tablet.addEventListener("change", changeMedia);
  desktop.addEventListener("change", changeMedia);
}
