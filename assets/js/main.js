//Import our function
import { initHeader } from "./includes/header.js";
import { mediaHeader } from "./mediaQuerie/mediaHeader.js"
import { mediaFooter } from "./mediaQuerie/mediaFooter.js"

document.addEventListener("DOMContentLoaded", () => {
    initHeader();
    mediaFooter();
    mediaHeader();
});
