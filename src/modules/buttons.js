function loadButtons() {
    const h1 = document.createElement("h1");
    h1.innerHTML = "PIPPO'S HOME KITCHEN";
    const buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("id", "buttonDiv");
    document.body.prepend(buttonDiv);
    document.body.prepend(h1);
    const homeButton = document.createElement("button");
    homeButton.innerHTML = "HOME";
    homeButton.setAttribute("id", "homeButton");
    const contactButton = document.createElement("button");
    contactButton.innerHTML = "ABOUT";
    contactButton.setAttribute("id", "contactButton");
    const menuButton = document.createElement("button");
    menuButton.innerHTML = "MENU";
    menuButton.setAttribute("id", "menuButton");
    buttonDiv.append(homeButton, menuButton, contactButton);
    homeButton.classList.add("navbuttons");
    contactButton.classList.add("navbuttons");
    menuButton.classList.add("navbuttons");
}

export default loadButtons;