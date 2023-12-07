function filtrirajVelikaSlova(arr) {
    let novoPolje = [];

    for (let i = 0; i < arr.length; i++) {
        let  trenutniElement = arr[i];

        
        if (trenutniElement === trenutniElement.toUpperCase()) {
            novoPolje.push(trenutniElement);
        } else {
            
            let slovaIBrojevi = trenutniElement.replace(/[^a-zA-Z0-9]/g, '');
            if (slovaIBrojevi.length >= 5) {
                novoPolje.push(trenutniElement);
            }
        }
    }

    return novoPolje;
}


let arr = ['Ovo', 'je', 'My', 'prvi', 'komad', 'OF', 'JAVASCRIPT', 'koda', 'Koji', ', ', 'je', 'proradio'];
let  filtriranoPolje = filtrirajVelikaSlova(arr);


console.log("Filtrirano polje:", filtriranoPolje);
