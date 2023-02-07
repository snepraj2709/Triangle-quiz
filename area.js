const baseOfTriangle = document.querySelector("#base");
const heightOfTriangle = document.querySelector("#height");
const submitButton = document.querySelector(".submit-button");
const outputMessage = document.querySelector(".output-message");

submitButton.addEventListener("click", function areaOfTriangle() {
  let areaOfTriangle = 0;
  areaOfTriangle =
    0.5 * Number(baseOfTriangle.value) * Number(heightOfTriangle.value);
  console.log(areaOfTriangle);

  outputMessage.innerText = "Area of triangle: " + areaOfTriangle;
});
