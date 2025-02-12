let firstName = "Egon";
let lastName = "Müller";
let age = 30;
let placeOfBirth = "München";
let weight = 80;
let height = 181;
let hobby = "Coding";

let sentenceV1 = firstName + " " 
                + lastName + " ist " 
                + age + " Jahre alt. Er " 
                + " wiegt " 
                + weight 
                + " kg bei " 
                + height 
                + " m Körpergröße. Sein Hobby ist "
                + hobby
                + ".";

console.log(sentenceV1);

let sentenceV2 = `${firstName} ${lastName} ist ${age} Jahre alt. Er wiegt ${weight} kg bei ${height} m Körpergröße. Sein Hobby ist ${hobby}.`;

console.log(sentenceV2);

function setSentence() {
    document.getElementById("sentence").innerHTML = sentenceV2;
}