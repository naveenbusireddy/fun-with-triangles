const inputAngles = document.querySelectorAll(".input-angle");
const isTriangle = document.querySelector("#is-triangle");
const outputMessage = document.querySelector("#output");

function checkTrianglepossible() {
    if (inputAngles[0].value && inputAngles[1].value && inputAngles[2].value) {
        const sumOfAngles = Number(inputAngles[0].value) + Number(inputAngles[1].value) + Number(inputAngles[2].value);

        if (sumOfAngles === 180) {
            outputMessage.innerText = "Hey! with these angles can form the triangle";
        } else {
            outputMessage.innerText = "Hoo! with these angles can't form the triangle";
        }
    } else {
        outputMessage.innerText = "All three angles are required! otherwise we can't processed";
    }

}
isTriangle.addEventListener("click", checkTrianglepossible)