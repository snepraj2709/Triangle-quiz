const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-button");
const outputMessage = document.querySelector("#output-message");

const correctAnswer = ["75", "90"];

submitButton.addEventListener("click", quiz);
function quiz() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);

  for (let inputValue of formResults.values()) {
    if (inputValue === correctAnswer[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  outputMessage.innerText = "Your Score: " + score;
}
