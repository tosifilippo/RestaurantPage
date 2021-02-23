function loadHomePage() {
    const content = document.getElementById("content");
    content.innerHTML = "";
    const div = document.createElement("div");
    div.classList.add("parabox");
    const para = document.createElement("p");
    para.innerHTML = "Welcome to my Kitchen! <br> Nice food, great company.";
    content.appendChild(div);
    div.append(para);
}

export default loadHomePage;