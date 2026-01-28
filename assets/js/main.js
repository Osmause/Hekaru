//Import our function
import { initHeader } from "./includes/header.js";
import { mediaHeader } from "./mediaQuerie/header.js"
import { mediaFooter } from "./mediaQuerie/footer.js"

document.addEventListener("DOMContentLoaded", () => {
    initHeader();
    mediaFooter();
    mediaHeader();
});
