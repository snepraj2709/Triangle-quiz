const allInputs = document.querySelectorAll(".input");
const submitButton = document.querySelector("#submit-button");
const outputMessage = document.querySelector(".output");
// console.log(angle1.value);

submitButton.addEventListener("click", isTriangle);

function isTriangle() {
  let sumOfAngles =
    Number(allInputs[0].value) +
    Number(allInputs[1].value) +
    Number(allInputs[2].value);

  if (sumOfAngles === 180) {
    outputMessage.innerText = "Yay! its a triangle";
  } else {
    outputMessage.innerText = "Oops! its not a Triangle";
  }
}
