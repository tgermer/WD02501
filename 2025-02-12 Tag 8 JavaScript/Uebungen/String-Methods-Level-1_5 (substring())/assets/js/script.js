const text = 'Susi is back from codingschool';

let eins = text.substring(0,4);
console.log(eins);

let zwei = text.substring(5,7);
console.log(zwei);

let drei = text.substring(24,31);
console.log(drei);

var gesamt = eins + " " + zwei + " " + drei;
console.log(gesamt);

function setText() {
    document.getElementById("myText").innerHTML = gesamt;
}