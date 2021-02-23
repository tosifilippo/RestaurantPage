function loadHomePage() {
    const content = document.getElementById("content");
    content.innerHTML = "";
    const img = document.createElement("img");
    const para = document.createElement("p");
    para.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    content.append( para );
    document.getElementById("contactButton").style.textDecoration = "none";
    document.getElementById("menuButton").style.textDecoration = "none";
    document.getElementById("homeButton").style.textDecoration = "underline";
}

export default loadHomePage;