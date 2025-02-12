const text = "Sam is going to codingschool"

console.log(text.toUpperCase());

console.log(text.toLowerCase());

console.log(text.substring(0,3).toUpperCase(), text.substring(4,15), text.substring(22,29).toUpperCase());
console.log(text.substring(0,3), text.substring(4,15).toUpperCase(), text.substring(22,29));
console.log([text.substring(0,3), 
            text.substring(4,5).toUpperCase() + " ", 
            text.substring(5,6), 
            text.substring(7,8).toUpperCase() + " ",
            text.substring(8,12),
            text.substring(13,14).toUpperCase() + " ",
            text.substring(14,15),
            text.substring(22,23).toUpperCase() + " ",
            text.substring(23,29)].join(' ').replaceAll('  ', '')  
        );
