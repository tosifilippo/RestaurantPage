function loadContactPage() {
    const content = document.getElementById("content");
    const div = document.createElement("div");
    const para = document.createElement("p");
    para.innerHTML = "Contact me at: tosifilippo@outlook.it";
    content.appendChild(div);
    div.appendChild(para);
}
export default loadContactPage;