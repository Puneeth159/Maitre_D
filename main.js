
const total = document.querySelector("#total");
const rate = document.querySelector("#rate");
const tip = document.querySelector("#tip");
const tax = document.querySelector("#tax");
const grandtotal = document.querySelector("#grandtotal");

button.addEventListener("click", calc);

function calc(){
    let calctip = rate.value*total.value/100.0;
    tip.textContent ='Tip: $'+ calctip;
    calctotal = (rate.value*total.value/100.0)+Number(total.value)+5.5;
    grandtotal.textContent = 'Grand Total: $'+ calctotal;
}
console.log(document.getElementById());
