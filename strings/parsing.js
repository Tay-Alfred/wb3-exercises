"use strict";

let fullName = "Taylor Alfred";

let firstName = fullName.substring(0,fullName.indexOf(" "));
let lastName = fullName.substring(fullName.indexOf(" ")+1);

console.log(
    `Name: ${fullName}\nFirst name: ${firstName}\nLast name: ${lastName}`
);