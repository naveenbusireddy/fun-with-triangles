const base = document.querySelector("#base-value");
const height = document.querySelector("#height-value");
const checkArea = document.querySelector("#check-area");
const showMessage = document.querySelector("#output");

function calculateArea() {
    if (base.value && height.value) {
        const triangleArea = 0.5 * (Number(base.value) * Number(height.value));
        showMessage.innerText = "Area of Triangle is: " + triangleArea;
    } else {
        showMessage.innerText = "Base and Height of the triangle is required to calculate the area of triangle";
    }
}

checkArea.addEventListener("click", calculateArea);