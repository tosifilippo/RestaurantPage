function loadMenuPage() {
    const content = document.getElementById("content");
    content.innerHTML = "";
    const pizzaFigure = document.createElement("div");
    pizzaFigure.classList.add("food");
    const appetizersFigure = document.createElement("div");
    appetizersFigure.classList.add("food");
    const firstDishesFigure = document.createElement("div");
    firstDishesFigure.classList.add("food");
    const secondDishesFigure = document.createElement("div");
    secondDishesFigure.classList.add("food");
    const dessertsFigure = document.createElement("div");
    dessertsFigure.classList.add("food");
    const drinksFigure = document.createElement("div");
    drinksFigure.classList.add("food");
    content.append(pizzaFigure, appetizersFigure, firstDishesFigure, secondDishesFigure, dessertsFigure, drinksFigure);
    const pizzaImg = document.createElement("img");
    pizzaImg.setAttribute("src", "img/pizza.jpg")
    pizzaImg.setAttribute("alt", "pizza");
    pizzaFigure.appendChild(pizzaImg);
    const appetizerImg = document.createElement("img");
    appetizerImg.setAttribute("src", "img/appetizer.jpg");
    appetizerImg.setAttribute("alt", "charcuterie board");
    appetizersFigure.appendChild(appetizerImg);
    const firstDImg = document.createElement("img");
    firstDImg.setAttribute("src", "img/pasta.jpg")
    firstDImg.setAttribute("alt", "pasta plate");
    firstDishesFigure.appendChild(firstDImg);
    const secondDImg = document.createElement("img");
    secondDImg.setAttribute("src", "img/arrosticini.jpg")
    secondDImg.setAttribute("alt", "lamb skewers");
    secondDishesFigure.appendChild(secondDImg);
    const dessertImg = document.createElement("img");
    dessertImg.setAttribute("src", "img/millefoglie.jpg")
    dessertImg.setAttribute("alt", "millefoglie cake");
    dessertsFigure.appendChild(dessertImg);
    const drinkImg = document.createElement("img");
    drinkImg.setAttribute("src", "img/gin.jpg")
    drinkImg.setAttribute("alt", "gin tonic");
    drinksFigure.appendChild(drinkImg);
    const pizzaDescription = document.createElement("div");
    pizzaDescription.classList.add("description");
    pizzaFigure.appendChild(pizzaDescription);
    const appetizerDescription = document.createElement("div");
    appetizersFigure.appendChild(appetizerDescription);
    appetizerDescription.classList.add("description");
    const firstDishesDescription = document.createElement("div");
    firstDishesFigure.appendChild(firstDishesDescription);
    firstDishesDescription.classList.add("description");
    const secondDishesDescription = document.createElement("div");
    secondDishesFigure.appendChild(secondDishesDescription);
    secondDishesDescription.classList.add("description");
    const dessertsDescription = document.createElement("div");
    dessertsFigure.appendChild(dessertsDescription);
    dessertsDescription.classList.add("description");
    const drinksDescription = document.createElement("div");
    drinksFigure.appendChild(drinksDescription);
    drinksDescription.classList.add("description");
    const pizzaCaption = document.createElement("h2");
    pizzaCaption.innerHTML = "PIZZA";
    pizzaDescription.appendChild(pizzaCaption);
    const appetizerCaption = document.createElement("h2");
    appetizerCaption.innerHTML = "APPETIZERS";
    appetizerDescription.appendChild(appetizerCaption);
    const firstDCaption = document.createElement("h2");
    firstDCaption.innerHTML = "FIRST DISHES";
    firstDishesDescription.appendChild(firstDCaption);
    const secondDCaption = document.createElement("h2");
    secondDCaption.innerHTML = "SECOND DISHES";
    secondDishesDescription.appendChild(secondDCaption);
    const dessertCaption = document.createElement("h2");
    dessertCaption.innerHTML = "DESSERTS";
    dessertsDescription.appendChild(dessertCaption);
    const drinkCaption = document.createElement("h2");
    drinkCaption.innerHTML = "DRINKS";
    drinksDescription.appendChild(drinkCaption);
}

export default loadMenuPage;