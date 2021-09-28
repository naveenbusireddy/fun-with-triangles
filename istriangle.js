const inputAngles = document.querySelectorAll(".input-angle");
const isTriangle = document.querySelector("#is-triangle");
const outputMessage = document.querySelector("#output");




function checkTrianglepossible() {
    const angle1 = Number(inputAngles[0].value);
    const angle2 = Number(inputAngles[1].value);
    const angle3 = Number(inputAngles[2].value);
    if(angle1<0 || angle2<0 || angle3<0) {
        outputMessage.innerText = "Negative values not allowed";
    }
    else {
        if (angle1 && angle2 && angle3) {
            const sumOfAngles = angle1 + angle2 + angle3;
    
            if (sumOfAngles === 180) {
                outputMessage.innerText = "Hey! with these angles can form the triangle";
            } else {
                outputMessage.innerText = "Hoo! with these angles can't form the triangle";
            }
        } else {
            outputMessage.innerText = "All three angles are required! otherwise we can't processed";
        }
    }    

}
isTriangle.addEventListener("click", checkTrianglepossible)