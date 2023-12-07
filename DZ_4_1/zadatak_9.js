function savrseniBrojevi(doBroja) {
    for (var i = 1; i <= doBroja; i++) {
        var sumaDjelitelja = 0;

        for (var j = 1; j < i; j++) {
            if (i % j === 0) {
                sumaDjelitelja += j;
            }
        }

        if (sumaDjelitelja === i) {
            console.log(i + " je savršen broj.");
        }
    }
}

// Primjer korištenja funkcije s argumentom 10000
savrseniBrojevi(10000);
