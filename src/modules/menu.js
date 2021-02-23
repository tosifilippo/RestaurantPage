function loadMenuPage() {
    const content = document.getElementById("content");
    content.innerHTML = "";
    const div = document.createElement("div");
    div.classList.add("menu-container");
    const pizzaFigure = document.createElement("figure");
    const appetizersFigure = document.createElement("figure");
    const firstDishesFigure = document.createElement("figure");
    const secondDishesFigure = document.createElement("figure");
    const dessertsFigure = document.createElement("figure");
    const drinksFigure = document.createElement("figure");
    div.append(pizzaFigure, appetizersFigure, firstDishesFigure, secondDishesFigure, dessertsFigure, drinksFigure);
    const pizzaImg = document.createElement("img");
    pizzaImg.setAttribute("src", "img/pizza.jpg")
    pizzaImg.setAttribute("alt", "pizza");
    pizzaImg.setAttribute("width", "200");
    const appetizerImg = document.createElement("img");
    appetizerImg.setAttribute("src", "img/appetizer.jpg");
    appetizerImg.setAttribute("alt", "charcuterie board");
    appetizerImg.setAttribute("width", "200");
    const firstDImg = document.createElement("img");
    firstDImg.setAttribute("src", "img/pasta.jpg")
    firstDImg.setAttribute("alt", "pasta plate");
    firstDImg.setAttribute("width", "200");
    const secondDImg = document.createElement("img");
    secondDImg.setAttribute("src", "img/arrosticini.jpg")
    secondDImg.setAttribute("alt", "lamb skewers");
    secondDImg.setAttribute("width", "200");
    const dessertImg = document.createElement("img");
    dessertImg.setAttribute("src", "img/millefoglie.jpg")
    dessertImg.setAttribute("alt", "millefoglie cake");
    dessertImg.setAttribute("width", "200");
    const drinkImg = document.createElement("img");
    drinkImg.setAttribute("src", "img/gin.jpg")
    drinkImg.setAttribute("alt", "gin tonic");
    drinkImg.setAttribute("width", "200");
    const pizzaCaption = document.createElement("figcaption");
    pizzaCaption.innerHTML = "PIZZA";
    const appetizerCaption = document.createElement("figcaption");
    appetizerCaption.innerHTML = "APPETIZERS";
    const firstDCaption = document.createElement("figcaption");
    firstDCaption.innerHTML = "FIRST DISHES";
    const secondDCaption = document.createElement("figcaption");
    secondDCaption.innerHTML = "SECOND DISHES";
    const dessertCaption = document.createElement("figcaption");
    dessertCaption.innerHTML = "DESSERTS";
    const drinkCaption = document.createElement("figcaption");
    drinkCaption.innerHTML = "DRINKS";
    pizzaFigure.append(pizzaImg, pizzaCaption);
    appetizersFigure.append(appetizerImg, appetizerCaption);
    firstDishesFigure.append(firstDImg, firstDCaption);
    secondDishesFigure.append(secondDImg, secondDCaption);
    dessertsFigure.append(dessertImg, dessertCaption);
    drinksFigure.append(drinkImg, drinkCaption);
    content.appendChild(div);
}

export default loadMenuPage;