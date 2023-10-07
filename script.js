// JavaScript for handling content management functions
const editor = document.getElementById("editor");
const addTextButton = document.getElementById("add-text");
const addImageButton = document.getElementById("add-image");
const addVideoButton = document.getElementById("add-video");
const saveContentButton = document.getElementById("save-content");

addTextButton.addEventListener("click", () => {
    const textElement = document.createElement("p");
    textElement.textContent = "Enter your text here";
    editor.appendChild(textElement);
});

addImageButton.addEventListener("click", () => {
    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", "placeholder.jpg"); // Replace with your image URL
    editor.appendChild(imageElement);
});

addVideoButton.addEventListener("click", () => {
    const videoElement = document.createElement("iframe");
    videoElement.setAttribute("src", "https://www.youtube.com/embed/VIDEO_ID"); // Replace with your video URL
    videoElement.setAttribute("width", "560");
    videoElement.setAttribute("height", "315");
    editor.appendChild(videoElement);
});

saveContentButton.addEventListener("click", () => {
    const content = editor.innerHTML;
    // Send content to the server for saving (back-end not included in this example)
    console.log("Content saved:", content);
});
