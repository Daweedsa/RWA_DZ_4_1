    
    
let kvadratIliGreska = function(x) {
    if (typeof x === 'number') {
        return x * x; 
    } else {
        return "Obavijest o pogrešci"; 
    }
};


console.log(kvadratIliGreska(5)); 
console.log(kvadratIliGreska("neki tekst")); 
