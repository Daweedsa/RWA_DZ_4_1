function randomBrojevi(min, max) {
    for (let  i = 0; i < 5; i++) {
        let randomBroj = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log("Random broj " + (i + 1) + ": " + randomBroj);
    }
}


randomBrojevi(1, 10);
