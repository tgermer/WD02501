
let warenwert = window.prompt("Bitte geben Sie Ihren Warenwert ein, um Ihren persönlihcen Rabatt zu berechnen.");
warenwert = parseFloat(warenwert.replace(",", ".")); //Number(warenwert);
let rabatt
let rabattInProzent
let preis

if (warenwert <50) {
    rabatt = 0;
}
else if (warenwert <=100) {
    rabatt = 0.1;
}
else {
    rabatt = 0.2;
}

rabattInProzent = (rabatt * 100);
rabattInEuro = (warenwert*rabatt).toFixed(2);
preis = (warenwert - warenwert * rabatt).toFixed(2);


console.log("Einkaufswert:", warenwert, "Euro");
console.log("Rabatt in Prozent:", rabattInProzent, "%" );
console.log("Rabatt in Euro:", rabattInEuro, "Euro" );
console.log("Verkaufspres:", preis, "Euro");

document.getElementById("wert").innerHTML = warenwert;
document.getElementById("rabatt").innerHTML = rabattInProzent;
document.getElementById("rabattInEuro").innerHTML = rabattInEuro;
document.getElementById("summe").innerHTML = preis;
