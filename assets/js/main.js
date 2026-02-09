//Import our function
import { initHeader } from "./includes/header.js";
import { initSide } from "./includes/sideConnect.js"
import { initFrame, initPlay} from "./pages/catalog.js";
document.addEventListener("DOMContentLoaded", () => {
    initHeader();
    initSide();
    initFrame();
    initPlay();
});
