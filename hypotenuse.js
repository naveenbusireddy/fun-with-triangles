const lengths = document.querySelectorAll(".input-lengths");
const checkHypotenuse = document.querySelector("#check-hypotenuse");
const showMessage = document.querySelector("#output");


function calculateHypotenuse() {
    const lengthA = Number(lengths[0].value);
    const lengthB = Number(lengths[1].value);

    if(lengthA < 0 || lengthB < 0) {
        showMessage.innerText = "Please enter the positive values";
    }
    else {

        if (lengthA && lengthB) {

            const lengthOfHypotenuse = Math.hypot(lengthA, lengthB);    
            showMessage.innerText = "The length of hypotenuse is: " + (lengthOfHypotenuse).toFixed(2);

        } else {
            showMessage.innerText = "Both lengths are required to calculate Hypotenuse";
        }
    }

    

}

checkHypotenuse.addEventListener("click", calculateHypotenuse);