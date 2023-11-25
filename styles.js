let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")
let inputEl = document.getElementById("input")
let buttonConvert = document.getElementById("btn-convert")
let buttonClear = document.getElementById("btn-clear")

const metersFeet = 3.28084
const litersGallons = 3.78541
const kilogramsPounds = 2.20462

buttonConvert.addEventListener("click", function() {
    let inputValue = parseFloat(inputEl.value)
    if (!isNaN(inputValue) && inputValue > 0) {
        const ConvertedLengthTimes = (inputValue * metersFeet).toFixed(2)
        const ConvertedVolumeTimes = (inputValue * litersGallons).toFixed(2)
        const ConvertedMassTimes = (inputValue * kilogramsPounds).toFixed(2)
        const ConvertedLengthDivide = (inputValue / metersFeet).toFixed(2)
        const ConvertedVolumeDivide = (inputValue / litersGallons).toFixed(2)
        const ConvertedMassDivide = (inputValue / kilogramsPounds).toFixed(2)
        lengthEl.textContent = `${inputValue} meters = ${ConvertedLengthTimes} feet | ${inputValue} feet = ${ConvertedLengthDivide} meters`
        volumeEl.textContent = `${inputValue} liters = ${ConvertedVolumeTimes} gallons | ${inputValue} gallons = ${ConvertedVolumeDivide} liters`
        massEl.textContent = `${inputValue} kilos = ${ConvertedMassTimes} pounds | ${inputValue} pounds = ${ConvertedMassDivide} kilos`
    } else {
        alert ("Please enter a number!")
    }
})


buttonClear.addEventListener("click", function() {
    inputEl.value = "";
    lengthEl.value = "";
    volumeEl.value = "";
    massEl.value = "";

    location.reload()
})