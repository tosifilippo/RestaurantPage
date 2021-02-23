function loadButtons() {
    const buttonDiv = document.createElement("div");
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
    buttonDiv.append(homeButton, contactButton, menuButton);
}

export default loadButtons;