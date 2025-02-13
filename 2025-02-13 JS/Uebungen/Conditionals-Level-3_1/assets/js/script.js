let budget = window.prompt("Geben Sie Ihr Urlaubsbudget ein");
budget = Number(budget);
let climate = window.prompt("Geben Sie Ihr Liebensklima in der Form warm/kalt/mild ein");
let experience = window.prompt("Geben Sie Abenteuer oder Entspannung ein.");


if (budget <1200) {
    console.log("Bleib lieber in Deutschland und besuche die Berge oder die Ostsee.");
}
else if (climate.startsWith("w") || experience.toLowerCase.startsWith("A")) {
    console.log("Reise nach Thailand für ein Dchnungelabenteuer.");
}
else if (climate.startsWith("w") || experience.toLowerCase.startsWith("E")) {
    console.log("Reise nach Bali für einen Strandurlaub!");
}
else if (climate.startsWith("k") || experience.toLowerCase.startsWith("A")) {
    console.log("Norwegen: Perfekt für eine Nordlicht-Wanderung!");
}
else if (climate.startsWith("k") || experience.toLowerCase.startsWith("E")) {
    console.log("Island: Heiße Quellen und wunderschöne Landschaften!");
}
else if (climate.startsWith("m")) {
    console.log("Spanien oder Portual sind großartige Reiseziele für dich!");
}
else {
    console.log("Leider haben wir nichts für Dich im angebot, aber es gibt viele schöne Reiseziele!");
    
}