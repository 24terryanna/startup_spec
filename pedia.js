document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const popupImage = document.getElementById("popup-image");
    const popupName = document.getElementById("popup-name");
    const popupDescription = document.getElementById("popup-description");
    const closeButton = document.querySelector(".close-button");
    const triggers = document.querySelectorAll(".popup-trigger");

    //Show popup
    triggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            const name = trigger.dataset.name;
            const image = trigger.dataset.image;
            const description = trigger.dataset.description;

            popupName.textContent = name;
            popupImage.src = image;
            popupDescription.textContent = description;

            popup.classList.remove("hidden");

        });
    });

    //close popup
    closeButton.addEventListener("click", () => {

    });

});