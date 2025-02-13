let username = window.prompt("Bitte Benutzername eingeben");
let password = window.prompt("Bitte Passwort eingeben");


if ( username === "admin" && password === "secure123") {
    console.log("Login erfolgreich");
}
else if ( username === "admin" && password !== "secure123") {
    console.log("Falsches Passwort");
}
else {
    console.log("Unbekannter User");
}