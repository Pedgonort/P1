"use strict";
console.log("Hello, world!");
import { parseHTML } from "/js/utils/parseHTML.js";
import { photoRenderer } from "/js/renderers/photos.js";
import { galleryRenderer } from '/js/renderers/gallery.js';


function main() {
    /*
    let age = 25;
    let heightCm = 1.76;
    let firstName = "John";
    let goodStudent = true;

    let greeting = `My name is ${firstName} and I'm ${age} years old`;
    console.log(greeting);
    if (goodStudent) {
        console.log("I'm a good student!");
    } else {
        console.log("I'm not a good student.");
    }

    let myList = ["one", "two", "three"];
    let myObject = {
        one: 1,
        two: 2,
        three: 3
    };
    
    for(let elem of myList) {
        console.log(elem);
    }
    

    console.log(myObject.one); // Prints 1 (value, not key)
    for (let elem of myList) {
        console.log(myObject[elem]); // Prints 1, 2, 3
    }

    function addTwoNumbers(a, b) {
        let sum = a + b;
        return sum;
    }
    let result = addTwoNumbers(5, 3);
    console.log(result);
    */
   
    /* let addTwoNumbers = (a, b) => {
        return a + b
        };
        let result = addTwoNumbers(5, 3);
        console.log(result); */

    // let addTwoNumbers = (a, b) => a + b;

    let myDiv = document.getElementById("dom-test");
    myDiv.textContent = "This was added using JavaScript";
    myDiv.style.backgroundColor = "#EEEEEE";
    myDiv.style.color = "black";
    myDiv.style.fontFamily = "monospace";

    let newP = document.createElement("p");
    newP.textContent = "This is a new paragraph";
    myDiv.appendChild(newP);
    /*
    let newImage = document.createElement("img");
    newImage.src = "https://loadedlandscapes.com/wp-content/uploads/2019/07/lighting.jpg";
    newImage.title = "A beautiful landscape";
    myDiv.appendChild(newImage);
    */

    //let container = document.querySelector("div.container");
    //container.style.backgroundColor = "#BBBBBB";

    //document.getElementById("id"); son 
    //document.querySelector("#id"); iguales

    /*  SOMBREADO >>
    let container1 = document.querySelector("div.container");
    let cards = container1.querySelectorAll("div.card");
    for (let card of cards) {
        card.style.boxShadow =
         "0 4px 8px 0 rgba(17, 26, 52, 0.74)";
    }  */


    let html = `<div class="col-md-4">
<div class="card bg-dark text-light">
<img src="https://i.ibb.co/tY1Jcnc/wlZCfCv.jpg" 
class="card-img-top">
<div class="card-body">
<h5 class="card-title text-center">Samoyed</h5>
<p class="card-text">A very good boy.</p>
<p class="text-end">@user1</p>
</div>
</div>
</div>`;
    let newCard = parseHTML(html);
    let container2 = document.getElementById("gallery");
    // container2.appendChild(newCard);

    // Renderers 
    /*
    function photoAsCard(photo) {
        let html = `<div class="col-md-4">
        <div class="card bg-dark text-light">
        <img src="${photo.url}" class="card-img-top">
        <div class="card-body">
        <h5 class="card-title text-center">${photo.title}</h5>
        <p class="card-text">${photo.description}</p>
        <p class="text-end">User ${photo.userId}</p>
        </div>
        </div>
        </div>`;
        let card = parseHTML(html);
        return card;
    } */

    let container = document.getElementById("gallery");
    
    let photo = {
        title: "Samoyed",
        description: "A very good boy.",
        userId: 1,
        url: "https://i.ibb.co/tY1Jcnc/wlZCfCv.jpg",
    };
    
    let card = photoRenderer.asCard(photo);
    // container.appendChild(card);
    
    let photos = [
        {
        title: "Samoyed",
        description: "A very good boy.",
        userId: 1,
        url: "https://i.ibb.co/tY1Jcnc/wlZCfCv.jpg",
        date: "15/08/2020",
        },
        {
        title: "ETSII",
        description: "E.T.S. Ing. Informatica, Universidad de Sevilla",
        userId: 2,
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/ETSI_Inform %C3%A1tica_Sevilla_y_DrupalCamp_Spain_2011.jpg/1920px-ETSI_Inform %C3 %A1tica_Sevilla_y_DrupalCamp_Spain_2011.jpg",
        date: "01/01/2021",
        },
        {
        title: "Seville",
        description: "The beautiful city of Seville",
        userId: 3,
        url: "https://urbansevilla.es/wp-content/uploads/2019/03/urban-sevilla-foto-ciudad.jpg",
        date: "03/02/2019",
        },
        {
        title: "Abstract art",
        description: "Clipart",
        userId: 4,
        url: "https://clipartart.com/images/worst-clipart-ever-1.jpg",
        date: "14/08/2019",
        },
        ];
        let gallery = galleryRenderer.asCardGallery(photos);
        container.appendChild(gallery);


    console.log("photoRenderer.asCard:", photoRenderer.asCard(photo));
    console.log("galleryRenderer.asCardGallery:", galleryRenderer.asCardGallery(photos));
        
}



document.addEventListener("DOMContentLoaded", main);





