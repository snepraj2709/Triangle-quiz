const allSides = document.querySelectorAll(".side");
const submitButton = document.querySelector(".submit-button");
const outputMessage = document.querySelector(".output-message");

submitButton.addEventListener("click", calculateHypotenuse);

function calculateHypotenuse() {
  let hypotenuse = 0;
  hypotenuse = Math.sqrt(allSides[0].value ** 2 + allSides[1].value ** 2);
  outputMessage.innerText = "Hypotenuse: " + hypotenuse;
}
