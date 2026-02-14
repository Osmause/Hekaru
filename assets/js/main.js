//Import our function
import { initHeader } from "./includes/header.js";
import { initSide } from "./includes/sideConnect.js"
import { initFrame, initPlay} from "./pages/catalog.js";
import { initpageData } from "./includes/feature.js";
// import 'cropperjs';
document.addEventListener("DOMContentLoaded", () => {
    console.log('Import reussi !');
    
    initHeader();
    initSide();
    initFrame();
    initPlay();
    initpageData();
});
