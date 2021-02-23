function loadContactPage() {
    const content = document.getElementById("content");
    content.innerHTML = "";
    const div = document.createElement("div");
    const para = document.createElement("p");
    div.classList.add("parabox");
    para.innerHTML = "Contact me at: <br> tosifilippo@outlook.it";
    content.appendChild(div);
    div.appendChild(para);
}
export default loadContactPage;