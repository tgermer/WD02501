
let punkte = 101;

if (punkte < 0 || punkte >100) {
    window.prompt("Ungültige Punktzahl");
}
else if (punkte >=0 && punkte <50) {
    window.prompt("Nicht bestanden");
}
else if (punkte <75) {
    window.prompt("Befriedigend");
}
else if (punkte <90) {
    window.prompt("Gut");
}
else {
    window.prompt("Sehr gut");
}