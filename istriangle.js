const inputAngles = document.querySelectorAll(".input-angle");
const isTriangle = document.querySelector("#is-triangle");
const outputMessage = document.querySelector("#output-message");

function checkTrianglepossible(){

    const sumOfAngles = Number(inputAngles[0].value)+Number(inputAngles[1].value)+Number(inputAngles[2].value);
    console.log(sumOfAngles);
       
    if(sumOfAngles === 180)
    {
        console.log("Hey! It will form the triangle");
    }
    else {
        console.log("Hey! with this angles triangle not possible");
    }

}
isTriangle.addEventListener("click", checkTrianglepossible )

