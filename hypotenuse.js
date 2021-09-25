const lengths = document.querySelectorAll(".input-lengths");
const checkHypotenuse = document.querySelector("#check-hypotenuse");
const showMessage = document.querySelector("#output");


function calculateHypotenuse() {
    if (lengths[0].value && lengths[1].value) {
        const lengthOfHypotenuse = Math.hypot(Number(lengths[0].value), Number(lengths[1].value));

        showMessage.innerText = "The length of hypotenuse is: " + lengthOfHypotenuse;
    } else {
        showMessage.innerText = "Both lengths are required to calculate Hypotenuse";
    }

}

checkHypotenuse.addEventListener("click", calculateHypotenuse);