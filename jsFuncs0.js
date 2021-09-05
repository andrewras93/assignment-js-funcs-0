'use strict'

let vat = 25 / 100;

function addVat(a) {
    return a + ( a * vat);
}

function subVat(a) {
    return a - (a * vat);
}

function calcVat(a) {
    return a * vat;
}

console.log(calcVat(100));