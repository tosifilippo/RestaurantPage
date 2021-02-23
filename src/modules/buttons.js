function loadButtons() {
    const buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("id", "buttonDiv");
    document.body.prepend(buttonDiv);
    const homeButton = document.createElement("button");
    homeButton.innerHTML = "HOME";
    homeButton.setAttribute("id", "homeButton");
    const contactButton = document.createElement("button");
    contactButton.innerHTML = "CONTACT";
    contactButton.setAttribute("id", "contactButton");
    const menuButton = document.createElement("button");
    menuButton.innerHTML = "MENU";
    menuButton.setAttribute("id", "menuButton");
    const rightButtonDiv = document.createElement("div");
    rightButtonDiv.setAttribute("id", "rightButtonDiv");
    buttonDiv.append(homeButton, rightButtonDiv);
    rightButtonDiv.append(contactButton, menuButton);
    homeButton.classList.add("navbuttons");
    contactButton.classList.add("navbuttons");
    menuButton.classList.add("navbuttons");
}

export default loadButtons;