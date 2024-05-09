"use strict";

function displayMailingLabel(name, address, city, state, zip){

    console.log(`${name}\n${address}\n${city}, ${state}\n${zip}`);
}

function addNumbers(num1, num2){
    console.log(`${num1} + ${num2} = ${num1+num2}`);
    //return num1+num2;
}

function displayReceipt(totalDue, amountPaid){
    console.log(`Total Due: $${totalDue}\nAmount Paid: $${amountPaid}\n\nChange Due: $${amountPaid - totalDue}`)

}

displayMailingLabel("Taylor Alfred","1255 Harlequin Way", "Ellenwood", "GA","30294");
console.log()
addNumbers(8,5);
console.log()
displayReceipt(50,65);