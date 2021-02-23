function loadHomePage() {
    const content = document.getElementById("content");
    content.innerHTML = "";
    // const h1 = document.createElement("h1");
    // h1.innerHTML = "PIPPO'S HOME KITCHEN";
    const img = document.createElement("img");
    // img.setAttribute("src", "img/barbecue.jpg")
    // img.setAttribute("alt", "chicken barbecue");
    // img.setAttribute("width", "1000");
    const para = document.createElement("p");
    para.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    content.append( para );
}

export default loadHomePage;