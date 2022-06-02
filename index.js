let meterVal
let feetVal
let literVal
let gallonVal
let kiloVal
let poundVal

let count
let numberEl = document.getElementById("number-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

       
function display(count) {
    meterVal = (count / 3.281).toFixed(3)
    feetVal = (count * 3.281).toFixed(3)
    literVal = (count / 3.785).toFixed(3)
    gallonVal = (count * 3.785).toFixed(3)
    kiloVal = (count * 2.205).toFixed(3)
    poundVal = (count / 2.205).toFixed(3)

    lengthEl.textContent = `
        ${count} meters = ${feetVal} feet | ${count} feet = ${meterVal} meters`
    volumeEl.textContent = `
        ${count} liters = ${literVal} gallons | ${count} gallons = ${gallonVal} liters` 
    massEl.textContent = `
        ${count} kilos = ${kiloVal} pounds | ${count} pounds = ${poundVal} pounds`
}

reset()

function reset() {
    count = 0
    display(count)
    numberEl.value = ""
}

function convert() {
    count = numberEl.value
    display(count)
}    

