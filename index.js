let meterVal
let feetVal
let literVal
let gallonVal
let kiloVal
let poundVal

let count = 20
let converterEl = document.getElementById("converter-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

meterVal = (count / 3.281).toFixed(3)
feetVal = (count * 3.281).toFixed(3)
literVal = (count / 3.785).toFixed(3)
gallonVal = (count * 3.785).toFixed(3)
kiloVal = (count * 2.205).toFixed(3)
poundVal = (count / 2.205).toFixed(3)

converterEl.textContent = count
lengthEl.textContent = `
    ${count} meters = ${feetVal} feet | ${count} feet = ${meterVal} meters`
volumeEl.textContent = `
    ${count} liters = ${literVal} gallons | ${count} gallons = ${gallonVal} liters` 
massEl.textContent = `
    ${count} kilos = ${kiloVal} pounds | ${count} pounds = ${poundVal} pounds`       