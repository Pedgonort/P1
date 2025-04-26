"use strict";
import { photoRenderer } from "/js/renderers/photos.js";
import { photosAPI_auto } from "/js/api/_photos.js";
import { messageRenderer } from "/js/renderers/messages.js";

// Get the ID of the photo to load from the URL params
let urlParams = new URLSearchParams(window.location.search);
let photoId = urlParams.get("photoId");
console.log("The photo ID to load is: " + photoId);

async function main() {
    // Check that we have an ID before doing anything else
    if (photoId === null) {
        messageRenderer.showErrorMessage("Please, provide a photoId");
        return;
    }
    loadPhotoDetails();
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
