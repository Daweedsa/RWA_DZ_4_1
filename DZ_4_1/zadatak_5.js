
let osoba1 = { firstName: "Marko", lastName: "Maric", age: 40, eyeColor: "black" };
let osoba2 = { firstName: "Ana", lastName: "Anić", age: 30, eyeColor: "brown" };
let osoba3 = { firstName: "Ivan", lastName: "Ivanić", age: 25, eyeColor: "blue" };
let osoba4 = { firstName: "Maja", lastName: "Majić", age: 35, eyeColor: "green" };


let osobe = [osoba1, osoba2, osoba3, osoba4];


for (let i = 0; i < osobe.length; i++) {
    var trenutnaOsoba = osobe[i];
    document.write("Osoba <br/>" + (i + 1) + ":");
    for (let kljuc in trenutnaOsoba) {
        document.write("  " + kljuc + ": " + trenutnaOsoba[kljuc]);
    }
}
