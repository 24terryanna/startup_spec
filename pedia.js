document.addEventListener("DOMContentLoaded", () => {
    console.log("Javascript loaded!");

    const popup = document.getElementById("popup");
    const popupImage = document.getElementById("popup-image");
    const popupName = document.getElementById("popup-name");
    const popupDescription = document.getElementById("popup-description");
    const closeButton = document.querySelector(".close-button");
    const triggers = document.querySelectorAll(".popup-trigger");

    console.log("Found triggers:", triggers.length);

    //Show popup
    triggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            console.log("Button clicked:", trigger);
            const name = trigger.dataset.name;
            const image = trigger.dataset.image;
            const description = trigger.dataset.description;

            console.log("Popup Data:", { name, image, description});

            popupName.textContent = name;
            popupImage.src = image;
            popupDescription.textContent = description;

            popup.classList.remove("hidden");
            console.log("Popup shown");

        });
    });

    //close popup
    closeButton.addEventListener("click", () => {
        console.log("Close button clicked");
        popup.classList.add("hidden");
    });

    //close popup on clicking outside
    window.addEventListener("click", (event) => {
        if (event.target === popup) {
            console.log("clicked outside popup")
            popup.classList.add("hidden");
        }
    });
});