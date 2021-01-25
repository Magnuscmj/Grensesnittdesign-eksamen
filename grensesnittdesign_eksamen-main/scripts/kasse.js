//Array with categories
const categories = [
    "Drikker",
    "Dessert"

]

//Array with all the products
const products = [
    {
        id: 1,
        name: "Filterkaffe",
        price: {
            liten: 28,
            medium: 32,
            stor: 36
        },
        description: "Start dagen med noe som aldri slår feil",
        image: "kaffe.jpg",
        category: categories[0],
        amount: 0
    },
    {
        id: 2,
        name: "Chino",
        price: {
            liten: 38,
            medium: 42,
            stor: 46
        },
        description: "En nydelig frokostkaffe med espresso, varm melk og steamet melkeskum",
        image: "cappuccino.jpg",
        category: categories[0],
        amount: 0
    },
    {
        id: 3,
        name: "Americano",
        price: {
            liten: 32,
            medium: 36,
            stor: 40
        },
        description: "Syntes du espresso kan bli litt sterk? Da er denne perfekt for deg",
        image: "americano.jpg",
        category: categories[0],
        amount: 0
    },
    {
        id: 4,
        name: "Iskaffe",
        price: {
            liten: 36,
            medium: 42,
            stor: 50
        },
        description: "Perfekt oppkvikker på varme dager",
        image: "iskaffe.png",
        category: categories[0],
        amount: 0
    },
    {
        id: 5,
        name: "Caffè Mocha",
        price: {
            liten: 38,
            medium: 42,
            stor: 46
        },
        description: "Blande sjokolade og kaffe? Nam!",
        image: "mocha.jpg",
        category: categories[0],
        amount: 0
    },
    {
        id: 6,
        name: "Caffè Latte",
        price: {
            liten: 38,
            medium: 44,
            stor: 48
        },
        description: "Den litt mildere typen? Kjør på med kaffe og melk",
        image: "kaffelatte.jpg",
        category: categories[0],
        amount: 0
    },
    {
        id: 7,
        name: "Caramel Macchiato",
        price: {
            liten: 45,
            medium: 48,
            stor: 51
        },
        description: "En delikat kaffespesialitet som inneholder espresso, melk og karamell",
        image: "Caramelmacchiato.jpg",
        category: categories[0],
        amount: 0
    },
    {
        id: 8,
        name: "Espresso",
        price: {
            liten: 34,
            medium: 38,
            stor: 42
        },
        description: "En dyp, robust og intens smak",
        image: "espresso.png",
        category: categories[0],
        amount: 0
    },
    {
        id: 9,
        name: "Cortado",
        price: {
            liten: 36,
            medium: 40,
            stor: 44
        },
        description: "En god blanding av italienernes og franskmennenes kaffe; Espresso og varm melk",
        image: "cortado.jpg",
        category: categories[0],
        amount: 0
    },
    {
        id: 10,
        name: "Iste",
        price: {
            liten: 38,
            medium: 47,
            stor: 55
        },
        description: "Ønsker du deg te, men du svetter av varmen? Da er iste noe for deg",
        image: "icetea.jpg",
        category: categories[0],
        amount: 0
    },
    {
        id: 11,
        name: "Brownies",
        price: {
            liten: 38
        },
        description: "En sprø og saftig sjokoladekake",
        image: "brownies.jpg",
        category: categories[1],
        amount: 0
    },
    {
        id: 12,
        name: "Oreokake",
        price: {
            liten: 54
        },
        description: "Sjokolade, krem, kremost og oreo?!",
        image: "oreocake.jpg",
        category: categories[1],
        amount: 0
    },
    {
        id: 13,
        name: "Kanelbolle",
        price: {
            liten: 46
        },
        description: "Vår bestselger! Passer perfekt til en varm kaffe",
        image: "cinnamon.jpg",
        category: categories[1],
        amount: 0
    },
    {
        id: 14,
        name: "Croissant",
        price: {
            liten: 38
        },
        description: "På utkikk etter frokost? En croissant gjør susen, legg gjerne til noe pålegg",
        image: "croissant.jpg",
        category: categories[1],
        amount: 0
    },
    {
        id: 15,
        name: "Chiapudding",
        price: {
            liten: 42
        },
        description: "En ny og spennende frokost, som er både næringsrik og mettende",
        image: "chiapudding.jpg",
        category: categories[1],
        amount: 0
    },
    {
        id: 16,
        name: "Brioche",
        price: {
            liten: 44
        },
        description: "Så luftig og lett at den nesten flyr avgårde",
        image: "brioche.jpg",
        category: categories[1],
        amount: 0
    },
    {
        id: 17,
        name: "Scones",
        price: {
            liten: 37
        },
        description: "Kos deg med noen deilige scones!",
        image: "scones.jpg",
        category: categories[1],
        amount: 0
    },

]

//Empty array that gets filled with products
let shoppingCart = [];


//Empty array that gets filled with previously bought products
let history = [];

//Function that prints out all the product-cards dynamically
const printProductCards = (name, image, description, price, id, category, amount) => {
    let productCard = document.createElement('div');
    productCard.setAttribute('class', 'productCard');
    productCard.setAttribute('id', 'productCard' + id);
    productCard.setAttribute('onClick', 'productCardOnClick(this.id)');
    let dropDown = `
    <select id="dropdownId${id}" onchange="sizeChange(this, price${id}, ${id})">
        <option value="liten">Liten</option>
        <option value="medium">Medium</option>
        <option value="stor">Stor</option>
    </select>`;

    let foodButtons = `
    <div class="amountContainer" id="amountDiv${id}">
                <button class="remove-button" onclick="removeFromCartFood(${id}, price${id}, addComment(commentBox${id}),productTitle${id}, counterBox${id})">-</button>
                <button class="remove-button"onclick="addToCartFood(${id}, price${id}, addComment(commentBox${id}),productTitle${id}, counterBox${id})">+</button>
    </div>`;

    let drinkButtons = `
    <div class="amountContainer" id="amountDiv${id}">
        <button class="remove-button" onclick="removeFromCartDrink(${id}, price${id}, addComment(commentBox${id}),productTitle${id}, dropdownId${id}.value, counterBox${id})">-</button>
        <button class="remove-button" onclick="addToCartDrink(${id}, price${id}, addComment(commentBox${id}),productTitle${id}, dropdownId${id}.value, counterBox${id})">+</button>
    </div>
    `;
                
    let productContent = `
            <h3 id="productTitle${id}">${name} </h3>
            <p class="priceTags"id="price${id}">Pris: ${price} kr</p>
            <p class="description">${description}</p>
            <img src="../img/${image}" alt="${name} image">
            <div class="commentContainer">
            <input class="comment-here" id="commentBox${id}" type="text" placeholder="Kommentar...">
            </div>
            <p id="counterBox${id}" class="counter">Antall: ${amount}</p>
            `
    ;


    if (category == "Drikker") {
        productContent += dropDown;
        productContent += drinkButtons;
    }else{
        productContent += foodButtons;
    }

    productCard.innerHTML = productContent;

    return productCard;
}

//Function to show the history element
let clicked2 = false;
let showHistory = () => {
    let historyContainer = document.getElementById("historyContainer");
    let section = document.getElementById("section");

    if(!clicked2){
        historyContainer.style.top = "-100%";
        clicked2 = true;
    }else{
        historyContainer.style.top = 0;
        section.style.overflowY = "scroll";
        clicked2 = false;
    }

}

//Function to get history items from localStorage when the page loads
let historyOnLoad = () => {

    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+ " kl:"+ today.getHours() + ":" + today.getMinutes();
    let historyContainer = document.getElementById("historyContainer");
    historyContainer.innerHTML = `
    <div id="historyHeaderDiv">
        <h1>Kjøpshistorikk</h1> 
    </div>`;
    
    for(let i = 0; i < localStorage.length; i++){
        let storage = JSON.parse(localStorage.getItem(localStorage.key(i)));

        for(let j = 0; j < storage.length; j++){
            let historyItem = document.createElement("div");


            if(storage[j].size != "undefined"){
                let itemContent = `
                <div class="historyItems">
                    <h2>${storage[j].amount}x ${storage[j].size} ${storage[j].name}</h2>
                    <p>Pris: ${storage[j].price}</p>
                    <p class="comment">Kommentar: ${storage[j].comment}</p>
                    <p id="dateP">${date}</p>
                </div>
                `;
                historyItem.innerHTML = itemContent;
            }else {
                let itemContent = `
                <div class="historyItems">
                    <h2>${storage[j].amount}x ${storage[j].name}</h2>
                    <p>Pris: ${storage[j].price}</p>
                    <p>Kommentar: ${storage[j].comment}</p>
                    <p id="dateP">${date}</p>
                </div>
                `;
                historyItem.innerHTML = itemContent;
            }
            
            historyContainer.appendChild(historyItem);
        }
        
    }

}


//Function to add items from shoppingcart to history(localStorage);
let purchaseAndAddToHistory = () => {
    let cartParent = document.getElementById("shoppingCart");
    localStorage.setItem(Date.now(), JSON.stringify(shoppingCart));

    historyOnLoad();
    shoppingCart = [];
    cartParent.innerHTML = "";
    alert("Venter på kunde...")
    window.location = window.location;
    showShoppingList();
    showShoppingCart();
    
}

//Function to create selected products to shoppingcart element
let insertItemsToCart = (amount, name, price, comment, size) => {
    let id = Math.floor(Math.random() * (10000 - 1));
    let cartCard = document.createElement("div");
    cartCard.setAttribute("class", "cartItems");
    cartCard.setAttribute("id", "cartItem" + id);

    cartCardContent = `
        <h2>${amount}x ${size} ${name}</h2>
        <p>Kommentar: ${comment}</p>
        <p>${price}kr</p>
    `;

    cartCard.innerHTML = cartCardContent;

    return cartCard;

}

//Function to print out the products selected to shoppingcart
let printCartItems = () => {
    let cartParent = document.getElementById("shoppingCart");
    cartParent.innerHTML = "";
    for(let i = 0; i < shoppingCart.length; i++){
        let cartCardItem = insertItemsToCart(shoppingCart[i].amount, shoppingCart[i].name, shoppingCart[i].price, shoppingCart[i].comment, shoppingCart[i].size);
        cartParent.appendChild(cartCardItem);
    }
}

//Function to update total-price element in shoppingcart
let showShoppingCart = () => {
    let shoppingCartDiv = document.getElementById("shoppingCartContainer");
    let priceP = document.getElementById("totalPPris");

    let price = 0;

        shoppingCartDiv.style.display = "grid";

        for(let i = 0; i < shoppingCart.length; i++){
            price += shoppingCart[i].price;
        }
        priceP.innerHTML = price + "kr";
   
}

//function to change price and size of product
let sizeChange = (size, priceElement, id) => {
    let selectedSize = size.value;
    if (selectedSize == "liten") {
        priceElement.innerHTML = "Pris: " + products[id - 1].price.liten;
    } else if (selectedSize == "medium") {
        console.log(priceElement)
        priceElement.innerHTML = "Pris: " + products[id - 1].price.medium;
    } else if (selectedSize == "stor") {
        priceElement.innerHTML = "Pris: " + products[id - 1].price.stor;
    }

}

//Adds 1 to "Antall: 0" -> "Antall: 1"
let addProduct = (counterElement, id) => {
    products[id].amount += 1;
    counterElement.innerHTML = "Antall: " + products[id].amount;


}

//Removes 1 from "Antall: 1" -> "Antall: 0"
let removeProduct = (counterElement, id) => {
    if (products[id].amount <= 0) {
        return;
    }
    products[id].amount -= 1;
    counterElement.innerHTML = "Antall: " + products[id].amount;

}

//Saves comments to shopping cart
let addComment = (commentBox) => {
    let comment = commentBox.value;
    return comment;
}

//Function to remove drink product from shoppingcart
let removeFromCartDrink = (id, price, comment, name, size, counterElement) => {
    let priceInt = price.innerHTML;
    let nameString = name.innerHTML;
    console.log(priceInt);
    console.log(price);
    
    removeProduct(counterElement, id);
    let amount = products[id].amount;
    priceInt = parseInt(priceInt.slice(6, 8));


    let cartObject = {
        amount: amount,
        name: nameString,
        price: priceInt * amount,
        comment: comment,
        size: size
    }

    let found = false;
    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].name == nameString && shoppingCart[i].size == size) {
            found = true;
            shoppingCart[i].amount = amount;
            shoppingCart[i].size = size;
            shoppingCart[i].price = priceInt * amount;
            shoppingCart[i].comment = comment;
            break;
        }
    }

    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].amount == 0) {
            shoppingCart.splice(i, 1);
        }
    }


    if(amount > 0 && !found){
        shoppingCart.push(cartObject);
    }

  
    printCartItems();
    showShoppingCart();
    
    console.log(shoppingCart);
    
    
}


//Function to remove food product from shoppingcart
let removeFromCartFood = (id, price, comment, name, counterElement) => {
    let priceInt = price.innerHTML;
    let nameString = name.innerHTML;
    removeProduct(counterElement, id);
    let amount = products[id].amount;
    priceInt = parseInt(priceInt.slice(6, 8));


    let cartObject = {
        amount: amount,
        name: nameString,
        price: priceInt * amount,
        comment: comment
    }

    let found = false;
    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].name == nameString) {
            found = true;
            shoppingCart[i].amount = amount;
            shoppingCart[i].price = priceInt * amount;
            shoppingCart[i].comment = comment;
            break;
        }
    }

    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].amount == 0) {
            shoppingCart.splice(i, 1);
        }
    }


    if(amount > 0 && !found){
        shoppingCart.push(cartObject);
    }

    printCartItems();
    showShoppingCart();
    
    console.log(shoppingCart);
    
    
}


//Function to add drink product to shoppingcart
let addToCartDrink = (id, price, comment, name, size, counterElement) => {
    let priceInt = price.innerHTML;
    let nameString = name.innerHTML;
    let amount = products[id].amount;
    amount++;
    addProduct(counterElement, id);
    priceInt = parseInt(priceInt.slice(6, 8));


    let cartObject = {
        amount: amount,
        name: nameString,
        price: priceInt * amount,
        comment: comment,
        size: size
    }

    let found = false;
    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].name == nameString && shoppingCart[i].size == size) {
            found = true;
            shoppingCart[i].amount = amount;
            shoppingCart[i].size = size;
            shoppingCart[i].price = priceInt * amount;
            shoppingCart[i].comment = comment;
            break;
        }
    }


    if (amount > 0 && !found) {
        shoppingCart.push(cartObject);
    }

    printCartItems();
    showShoppingCart();
    
    console.log(shoppingCart);
    
    
}

//Function to add food product to shoppingcart
let addToCartFood = (id, price, comment, name, counterElement) => {
    let priceInt = price.innerHTML;
    let nameString = name.innerHTML;
    let amount = products[id].amount;
    amount++;
    addProduct(counterElement, id);
    priceInt = parseInt(priceInt.slice(6, 8));


    let cartObject = {
        amount: amount,
        name: nameString,
        price: priceInt * amount,
        comment: comment
    }

    let found = false;
    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].name == nameString) {
            found = true;
            shoppingCart[i].amount = amount;
            shoppingCart[i].price = priceInt * amount;
            shoppingCart[i].comment = comment;
            break;
        }
    }


    if (amount > 0 && !found) {
        shoppingCart.push(cartObject);
    }

    printCartItems();
    showShoppingCart();
    
    console.log(shoppingCart);
    
    
}

// Function to print out categorycontainers
const printCategories = () => {
    let productContainer = document.getElementById("productsContainer");

    for (let i = 0; i < categories.length; i++) {
        const categoryContainer = document.createElement('div');
        let categoryname = categories[i];
        categoryContainer.setAttribute('class', 'categoryContainer');
        let categoryTitle = `<h2>${categoryname}</h2>`;
        categoryContainer.innerHTML = categoryTitle;
        productContainer.appendChild(categoryContainer);

        for (let j = 0; j < products.length; j++) {
            if (categoryname == products[j].category) {
                let productCard = printProductCards(products[j].name, products[j].image, products[j].description, products[j].price.liten, products[j].id, products[j].category, products[j].amount);
                categoryContainer.appendChild(productCard);
            }
        }
    }
}


//Function to make productcards bigger when clicked
let clicked = false;
let productCardOnClick = (elementId) => {
    let currentElement = document.getElementById(elementId);
    let dropDown = document.querySelector("#" + elementId + " select");
    currentElement.style.height = "500px";
    currentElement.className = "productCardExpanded";
    if (dropDown != null) {
        dropDown.style.display = "block";
    }




}




//Default functions that runs on page load
printCategories();
historyOnLoad();