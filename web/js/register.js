'use strict';
console.log("Hello, world!");
import { messageRenderer } from "/js/renderers/messages.js";
import { userValidator } from "/js/validators/users.js";

import { sessionManager } from "/js/utils/session.js";
// import { authAPI } from "/js/api/auth.js";
import { authAPI_auto } from "/js/api/_auth.js";


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
    let errors = userValidator.validateRegister(formData);
    if (errors.length > 0) {
        let errorsDiv = document.getElementById("errors");
        errorsDiv.innerHTML = "";
        for (let error of errors) {
            messageRenderer.showErrorMessage(error);
        }
    } else {
        sendRegister(formData);
    }
}    

async function sendRegister(formData) {
    try {               // authAPI
        let loginData = await authAPI_auto.register(formData);
        let sessionToken = loginData.sessionToken;
        let loggedUser = loginData.user;
        sessionManager.login(sessionToken, loggedUser);
        window.location.href = "index.html";
    } catch (err) {
        messageRenderer.showErrorMessage("Error registering a new user", err);
    }
}

document.addEventListener("DOMContentLoaded", main);

