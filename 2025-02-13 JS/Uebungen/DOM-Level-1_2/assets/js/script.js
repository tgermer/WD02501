let h1 = document.querySelector("h1");
h1.innerHTML = "Hello World."

let h2 = document.querySelector("h2");
h2.innerHTML = "How are you?"

let write = document.write("<p id='p'>start of the element</p>");

document.getElementById("p").innerHTML = "end of the element"