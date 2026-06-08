let weightInput = document.querySelector(".weight_input");
let heightInput = document.querySelector(".height_input");
let weightSpan = document.querySelector(".weight_value");
let heightSpan = document.querySelector(".height_value");
let BMINumber = document.querySelector(".BMI_value");
let BMILabel = document.querySelector(".BMI_label");

function weightInputHandler() {
  let weightValue = weightInput.value;
  weightSpan.innerHTML = weightValue + " kg";
  showBMI();
}
function heightInputHandler() {
  let heightValue = heightInput.value;
  heightSpan.innerHTML = heightValue + " cm";
  showBMI();
}
function showBMI() {
  let BMI = (weightInput.value / (heightInput.value / 100) ** 2).toFixed(1);
  if (BMI <= 18.5) {
    BMILabel.innerHTML = "Under Weight!";
    BMINumber.style.color = "#FFEB3B";
  } else if (18.5 < BMI && BMI <= 24.9) {
    BMILabel.innerHTML = "Normal Weight!";
    BMINumber.style.color = "#0be881";
  } else if (24.9 < BMI && BMI <= 29.9) {
    BMILabel.innerHTML = "Over Weight!";
    BMINumber.style.color = "#FFEB3B";
  } else if (29.9 < BMI && BMI <= 34.9) {
    BMILabel.innerHTML = "Fat!";
    BMINumber.style.color = "#FF7043";
  } else if (34.9 < BMI && BMI <= 39.9) {
    BMILabel.innerHTML = "Very Fat!";
    BMINumber.style.color = "#E53935";
  } else {
    BMILabel.innerHTML = "Very Very Fat!";
    BMINumber.style.color = "#B71C1C";
  }
  BMINumber.innerHTML = BMI;
}

weightInput.addEventListener("input", weightInputHandler);
heightInput.addEventListener("input", heightInputHandler);
