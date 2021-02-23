function loadHomePage() {
    const content = document.getElementById("content");
    const h1 = document.createElement("h1");
    h1.innerHTML = "PIPPO'S HOME KITCHEN";
    const img = document.createElement("img");
    img.setAttribute("src", "img/barbecue.jpg")
    img.setAttribute("alt", "chicken barbecue");
    img.setAttribute("width", "1000");
    const para = document.createElement("p");
    para.innerHTML = "lorem ipsum";
    content.appendChild(h1);
    content.appendChild(img);
    content.appendChild(para);
}

export default loadHomePage;
