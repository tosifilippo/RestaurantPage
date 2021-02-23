function loadContactPage() {
    const content = document.getElementById("content");
    content.innerHTML = "";
    const div = document.createElement("div");
    const para = document.createElement("p");
    para.innerHTML = "Contact me at: tosifilippo@outlook.it";
    content.appendChild(div);
    div.appendChild(para);
    document.getElementById("contactButton").style.textDecoration = "underline";
    document.getElementById("menuButton").style.textDecoration = "none";
    document.getElementById("homeButton").style.textDecoration = "none";
}
export default loadContactPage;