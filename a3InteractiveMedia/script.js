const memoryObject = document.querySelector(".memory-object");

const imageContainer = document.querySelector(".image-container");

const postcardImage = document.querySelector(".postcard-image");

const magnifier = document.querySelector(".magnifier");

const paperHeading = document.querySelector("#paperHeading");

const paperText = document.querySelector("#paperText");

const memoryDate = document.querySelector("#memoryDate");

const memoryTitle = document.querySelector("#memoryTitle");

const memoryStory = document.querySelector("#memoryStory");

let fadeTimer;

magnifier.style.backgroundImage =
    'url("' + postcardImage.src + '")';

memoryObject.addEventListener("mouseenter", function () {
    clearTimeout(fadeTimer);

    memoryDate.textContent =
        memoryObject.dataset.date;

    memoryTitle.textContent =
        memoryObject.dataset.title;

    memoryStory.textContent =
        memoryObject.dataset.story;

    paperHeading.classList.add("hide");

    setTimeout(function () {
        paperText.classList.add("show");
    }, 500);
});

memoryObject.addEventListener("mouseleave", function () {
    paperText.classList.remove("show");

    fadeTimer = setTimeout(function () {
        memoryDate.textContent = "";

        memoryTitle.textContent = "";

        memoryStory.textContent = "";

        paperHeading.classList.remove("hide");
    }, 1200);
});

imageContainer.addEventListener("mousemove", function (event) {
    const imagePosition =
        imageContainer.getBoundingClientRect();

    const mouseX =
        event.clientX - imagePosition.left;

    const mouseY =
        event.clientY - imagePosition.top;

    magnifier.style.left =
        mouseX + "px";

    magnifier.style.top =
        mouseY + "px";

    const zoomAmount = 2;

    const zoomedWidth =
        imagePosition.width * zoomAmount;

    const zoomedHeight =
        imagePosition.height * zoomAmount;

    magnifier.style.backgroundSize =
        zoomedWidth + "px " + zoomedHeight + "px";

    const mousePercentX =
        mouseX / imagePosition.width;

    const mousePercentY =
        mouseY / imagePosition.height;

    const backgroundX =
        mousePercentX * zoomedWidth
        - magnifier.offsetWidth / 2;

    const backgroundY =
        mousePercentY * zoomedHeight
        - magnifier.offsetHeight / 2;

    magnifier.style.backgroundPosition =
        "-" + backgroundX + "px "
        + "-" + backgroundY + "px";
});