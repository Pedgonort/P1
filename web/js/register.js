'use strict';
console.log("Hello, world!");
import { messageRenderer } from "/js/renderers/messages.js";
import { userValidator } from "/js/validators/users.js";



function main() {

    //Prueba card
    let cards = document.querySelectorAll("div.card");
    for (let card of cards) {
        
        card.style.boxShadow = "0 4px 8px 0 rgba(88, 73, 131, 0.63)";
    }

    // Formulario
    let registerForm = document.getElementById("register-form");
    registerForm.onsubmit = handleSubmitRegister;
    }


function handleSubmitRegister(event) {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);

    let errors = 
        userValidator.validateRegister(formData);


    if (errors.length > 0) {
        event.preventDefault();
        let errorsDiv = document.getElementById("errors");
        errorsDiv.innerHTML = "";

        for (let error of errors) {
            messageRenderer.showErrorMessage(error);
        }
    }

}
    

document.addEventListener("DOMContentLoaded", main);

