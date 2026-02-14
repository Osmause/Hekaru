// import Cropperjs from "cropperjs";

// const cropper = new Cropper("#image");

export function initpageData() {
  let pageLoad = document.querySelector(".pageLoaded");
  if (!pageLoad) return;

  let pageType = pageLoad.dataset.page;

  if (pageType === "admin") {
    initAdmin(console.log("je suis dans la page admin"));
  }

  if (pageType === "Profile") {
    initProfile();
  }
}


export function initAdmin(){

      Array.from(document.querySelectorAll(".imageUploaded") || []).forEach(
      (element) => {
        element.addEventListener("change", () => {
          let file = element.files[0];
          if (!file) return;
          let fileName = file;
          element.closest("form").submit();
          document.querySelector(".fileName").textContent =
            "Fichier selectionner: " + fileName;
        });
        console.log(element);
      },
    )


}


export function initProfile() {}
