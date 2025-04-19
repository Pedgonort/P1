"use strict";

// alert("estoy en js");

//import { parseHTML } from '../utils/parseHTML.js';

function main() {
    //console.log("Hola");
    let myDiv = document.getElementById("demo");
    myDiv.textContent = "hola TI";
    myDiv.style.backgroundColor = "Orange";

    let myP = document.createElement("p");
    myP.textContent = "soy nuevo parrafo"
    myDiv.appendChild(myP);

    let myImg = document.createElement("img");
    myImg.src = "images/gatoJS.jpeg"
    myDiv.appendChild(myImg)

    let html = '<img src="images/gatoJS.jpeg">'
    let img = parseHTML(html);
    myDiv.appendChild(img);


}

document.addEventListener("DOMContentLoaded", main);
