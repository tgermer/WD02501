let score = 5 + 5 * 10;  
console.log('Ergebnis: ' + score);

score = (5 + 5) * 10;  
console.log('Ergebnis: ' + score);

score = 0;  
score = score + 10;  
console.log('Ergebnis: ' + score);

score += 10;  
console.log('Ergebnis: ' + score)

let zahl = 1;  
zahl = zahl + 1;  
zahl += 1;
console.log(zahl);

zahl++;  
console.log('increment: ' + zahl);

zahl--;  
console.log('dekrement: ' + zahl);

let a = 5;
let b = a--;  // b wird 5, aber a wird danach 4
console.log(a, b); // Ausgabe: 4 5

let x = 5;
let y = --x;  // x wird zuerst 4, dann wird y = 4
console.log(x, y); // Ausgabe: 4 4