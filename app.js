const toConvert = document.querySelector(".to-convert-value");
const converted = document.querySelector(".converted-value");
const switchBtn = document.querySelector("#switch");
const convertBtn = document.querySelector(".convert-btn");
const toConvertDegree = document.querySelector("#to-convert");
const convertInDegree = document.querySelector("#converted");
const message = document.querySelector(".message");

let celsiusToFehrenheit = true;
converted.disabled = true;

toConvertDegree.textContent = "°C";
toConvertDegree.style.fontSize = "20px";
toConvertDegree.style.fontWeight = "bold";
convertInDegree.textContent = "°F";
convertInDegree.style.fontSize = "20px";
convertInDegree.style.fontWeight = "bold";


switchBtn.addEventListener('click', function() {
  toConvert.value = "";
  converted.value = "";
  toConvert.style.borderColor = "#D1D1D1";
  if (celsiusToFehrenheit === true) {
    celsiusToFehrenheit = false;
    toConvertDegree.textContent = "°F";
    convertInDegree.textContent = "°C";
  } else {
    toConvertDegree.textContent = "°C";
    convertInDegree.textContent = "°F";
    celsiusToFehrenheit = true;
  }
});

convertBtn.addEventListener('click',function(){
  let valueToConvert = parseInt(toConvert.value);
  if (isNaN(valueToConvert)) {
    toConvert.style.borderColor = "red";
    message.textContent = "Please insert a number!";
    message.style.color = "red";
  } else {
    toConvert.style.borderColor = "green";
    message.textContent = "";
    let calculatedValue;
    if (celsiusToFehrenheit === true) {
      calculatedValue = valueToConvert * 1.8 + 32
    } else {
      calculatedValue = (valueToConvert - 32) / 1.8
    }
    if (Number.isInteger(calculatedValue) === false) {
      converted.value = calculatedValue.toFixed(2);
    } else {
      converted.value = calculatedValue;
    }
   
  }
});
