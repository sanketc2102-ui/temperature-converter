const temperatureConverterForm = document.querySelector("form");
const temperature = document.querySelector("#degree");
const temperatureUnit = document.querySelector("#fromUnit");
const temperatureConvertInto = document.querySelector("#toUnit");
const resultValue = document.querySelector(".resultVal");

temperatureConverterForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    temperatureUnit.value === "cel" &&
    temperatureConvertInto.value === "fer"
  ) {
    const celcusToFaherenheit = (temperature.value * 9) / 5 + 32;
    resultValue.textContent = celcusToFaherenheit.toFixed(2);
  } else if (
    temperatureUnit.value === "fer" &&
    temperatureConvertInto.value === "cel"
  ) {
    const faherenheitToCelcus = (temperature.value - 32) * (5 / 9);
    resultValue.textContent = faherenheitToCelcus.toFixed(2);
  } else {
    alert("pls check the inputs");
  }

  temperature.value = 0;
});
