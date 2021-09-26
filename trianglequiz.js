const quizForm = document.querySelector(".quiz-form");
const checkScore = document.querySelector("#check-score");
const showMessage = document.querySelector("#output");

const correctAnswers = ["90°", "right angled", "acute", "equilateral", "perimeter", "hypotenuse", "5", "180", "60", "5"];

function checkQuizScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    showMessage.innerText = "Hey your score is: " + score;
}

checkScore.addEventListener("click", checkQuizScore);