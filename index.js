
"use strict";

window.onload = init;

function init() {
    const button = document.getElementById("button");
    button.onclick = onButtonClicked;
}

function onButtonClicked() {
    const scoops = Number(document.getElementById("inputScoops").value);
    const cup = document.getElementById("cupRadio");
    const cone = document.getElementById("coneRadio");
const toppings = document.querySelectorAll('input[name="topping"]:checked');

    //  base price
    let basePrice = 2.25 + (scoops - 1) * 1.25;

    // toppings cost for cups
    if (cup.checked) {
        let toppingsCost = 0;
        toppings.forEach(topping => {
            if (topping.value === "Sprinkles") {
                toppingsCost += 0.50;
            } else if (topping.value === "Hot Fudge") {
                toppingsCost += 1.25;
            } else if (topping.value === "Whipped Cream" || topping.value === "Cherry") {
                toppingsCost += 0.25;
            }
        });
        basePrice += toppingsCost;
    }

    // tax rate
    let tax = basePrice * 0.05;

    //  total due
    let totalDue = basePrice + tax;

    document.getElementById("basePrice").textContent = basePrice.toFixed(2);
    document.getElementById("tax").textContent = tax.toFixed(2);
    document.getElementById("totalDue").textContent = totalDue.toFixed(2);
}

// show/hide toppings 

let cupNotChecked = false;
const toppingsList = document.getElementById("toppings");
if (document.getElementById("cupRadio").checked) {
        toppingsList.style.display = "block";
    } else if(cupNotChecked) {
        toppingsList.style.display = "none";
        document.getElementById("sprinkles").checked = false;
        document.getElementById("whippedCream").checked = false;
        document.getElementById("hotFudge").checked = false;
        document.getElementById("cherry").checked = false;
    }


