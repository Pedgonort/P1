"use strict";
import { photoRenderer } from "/js/renderers/photos.js";
import { photosAPI_auto } from "/js/api/_photos.js";
import { messageRenderer } from "/js/renderers/messages.js";

// Get the ID of the photo to load from the URL params
let urlParams = new URLSearchParams(window.location.search);
let photoId = urlParams.get("photoId");
console.log("The photo ID to load is: " + photoId);

async function main() {
    // Assign the handler function to the delete button
    let deleteBtn = document.querySelector("#button-delete");
    deleteBtn.onclick = handleDelete;
    let editBtn = document.querySelector("#button-edit");
    editBtn.onclick = handleEdit;


    // esto de abajo sobra?? de momento no molesta

    // Check that we have an ID before doing anything else
    if (photoId === null) {
        messageRenderer.showErrorMessage("Please, provide a photoId");
        return;
    }
    loadPhotoDetails();

}

function handleEdit(event) {
    window.location.href = "edit_photo.html?photoId=" + photoId;
}

async function handleDelete(event) {
    let answer = confirm("Do you really want to delete this photo?");
    if (answer) {
        try {
            await photosAPI_auto.delete(photoId);
            window.location = "/index.html";
        } catch (err) {
            messageRenderer.showErrorMessage(err.response.data.message);
        }
    }
}
    

async function loadPhotoDetails() {
    let photoContainer = document.querySelector("#photo-details-column");
    try {
        let photo = await photosAPI_auto.getById(photoId)
        let photoDetails = photoRenderer.asDetails(photo);
        photoContainer.appendChild(photoDetails);
    } catch (err) {
        messageRenderer.showErrorMessage("Error loading photo", err);
    }
}

document.addEventListener("DOMContentLoaded", main);


// function main() {
//     let photoContainer = document.querySelector("#photo-details-column");
    
//     let photo = {
//         title: "Samoyed",
//         description: "A very good boy.",
//         userId: 1,
//         url: "https://i.ibb.co/tY1Jcnc/wlZCfCv.jpg",
//         date: "12/01/1996",
//     };
    
//     let photoDetails = photoRenderer.asDetails(photo);
//     photoContainer.appendChild(photoDetails);

//     let urlParams = new URLSearchParams(window.location.search);

//  //    let photoId = urlParams.get("photoId");
//  //    console.log("The photo ID to load is: " + photoId);

// }
