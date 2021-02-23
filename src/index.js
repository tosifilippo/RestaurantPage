import loadHomePage from './modules/home-page.js';
import loadButtons from './modules/buttons.js';
import loadContactPage from './modules/contact.js';
import loadMenuPage from './modules/menu.js';

function handleEvents() {
    const homeButton = document.getElementById("homeButton");
    const contactButton = document.getElementById("contactButton");
    const menuButton = document.getElementById("menuButton");

    homeButton.addEventListener("click", loadHomePage);
    contactButton.addEventListener("click", loadContactPage);
    menuButton.addEventListener("click", loadMenuPage);
}

loadHomePage();
loadButtons();
handleEvents();
