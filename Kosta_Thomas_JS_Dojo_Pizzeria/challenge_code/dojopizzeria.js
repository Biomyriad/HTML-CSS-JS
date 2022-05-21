var crustOpts = {
    0: "deep dish",
    1: "pan",
    2: "hand tossed",
    3: "thin",
    4: "stuffed",
    5: "cracker",
    6: "flat",
    7: "thick"
}

var sauceOpts = {
    0: "traditional",
    1: "marinara",
    2: "1000 island",
    3: "bbq",
    4: "Pesto",
    5: "white garlic",
    6: "Buffalo",
    7: "Hummus",
    8: "garlic ranch"
}

var cheeseOpts = {
    0: "mozzarella",
    1: "cheddar",
    2: "ricotta",
    3: "gouda",
    4: "Parmesan "
}

var toppingsVeggieOpts = {
    0: "Mushroom",
    1: "Extra cheese",
    2: "Onion",
    3: "Black olives",
    4: "Green pepper",
    5: "garlic",
    6: "Tomato",
    7: "basil",
    8: "Spinach",
    9: "Pineapple"
}

var toppingsMeatOpts = {
    0: "Pepperoni",
    1: "Sausage",
    2: "Bacon",
    3: "Chicken",
    4: "Beef",
    5: "Ham",
}

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crust = crustType;
    pizza.sauce = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

function randomPizza() {
    var crustSel = crustOpts[rand(Object.keys(crustOpts).length)];
    var sauceSel = sauceOpts[rand(Object.keys(sauceOpts).length)];
    var cheeseSel = cheeseOpts[rand(Object.keys(cheeseOpts).length)];
    var toppingsSel = [];

    var hasMeat = rand(1);
    var hasVeggies = rand(1);
    var numOfVeggies = rand(3);
    var numOfMeat = rand(3);

    if(hasMeat) {
        for(var i=0;i<numOfMeat;i++) {
            toppingsSel.push(toppingsMeatOpts[rand(Object.keys(toppingsMeatOpts).length)])
        }
    }

    if(hasVeggies) {
        for(var i=0;i<numOfVeggies;i++) {
            toppingsSel.push(toppingsVeggieOpts[rand(Object.keys(toppingsVeggieOpts).length)])
        }   
    }

    return pizzaOven(crustSel, sauceSel, cheeseSel, toppingsSel);
}

function rand(maxNumber) {
    return Math.floor(Math.random() * maxNumber + 1);
}

var myFirstPizza = ["deep dish", "traditional", ["mozzarella"],["pepperoni", "sausage"]];
var mySecondPizza = ["hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]];

var MyThirdPizza = ["hand tossed", "traditional", ["mozzarella"],["pineapple", "ham"]];
var MyForthPizza = ["pan", "1000 island", ["mozzarella"],["green peppers", "onions", "olives", "mushrooms"]];

function btnClick() {
    var textOutput = document.getElementById("js-output");

    var ourPizza = randomPizza();

    textOutput.value = "Here is your HOT Pizza!\n";
    textOutput.value += "Your crust is " + ourPizza.crust + " crust ";
    textOutput.value += "with " + ourPizza.sauce + " sauce.\n\n";
    textOutput.value += "We have topped it with our premium " + ourPizza.cheeses + " cheese.\n";
    textOutput.value += "Next we layered on a generous helping of:\n\n"; 

    for(var i = 0; i < ourPizza.toppings.length;i++) {
        textOutput.value += "   * " + ourPizza.toppings[i] + "\n";
    }

    textOutput.value += "\nWe really hope you enjoy! Please tell your friends\n"; 
    textOutput.value += "for 5% off your next visit!\n"; 

}