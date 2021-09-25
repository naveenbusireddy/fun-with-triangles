const base = document.querySelector("#base-value");
const height = document.querySelector("#height-value");
const checkArea = document.querySelector("#check-area");
const showMessage = document.querySelector("#output");

function calculateArea() {

    const triangleArea = 0.5*(Number(base.value)*Number(height.value));
    console.log(triangleArea);

}

checkArea.addEventListener("click", calculateArea);