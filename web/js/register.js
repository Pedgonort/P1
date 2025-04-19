'use strict';
console.log("Hello, world!");



function main() {

    
    let cards = document.querySelectorAll("div.card");
    for (let card of cards) {
        
        card.style.boxShadow = "0 4px 8px 0 rgba(88, 73, 131, 0.63)";
    }

}


document.addEventListener("DOMContentLoaded", main);

