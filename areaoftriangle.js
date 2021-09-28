const base = document.querySelector("#base-value");
const height = document.querySelector("#height-value");
const checkArea = document.querySelector("#check-area");
const showMessage = document.querySelector("#output");

function calculateArea() {
    const baseLength = Number(base.value);
    const heightLength = Number(height.value);

    if(baseLength < 0 || heightLength < 0) {
        showMessage.innerText = "Negative values not allowed";
    }
    else {

        if (baseLength && heightLength) {

            const triangleArea = 0.5 * (baseLength * heightLength);

            showMessage.innerText = "Area of Triangle is: " + (triangleArea).toFixed(2);

        } else {
            showMessage.innerText = "Base and Height of the triangle is required to calculate the area of triangle";
        }
    }
    
}

checkArea.addEventListener("click", calculateArea);