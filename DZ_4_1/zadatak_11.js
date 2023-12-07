const tempDay = ['2023-11-29', -1, 0, -0.5, 0.5, 0, 1.2, 1.8, 2, 3, 4, 6, 9, 12, 7, 6, 6, 8, 5, 4, 2, 3, 2, 1, 0];

function analizirajTemperaturu(tempDay) {
    
    let datum = tempDay[0];

    
    let temperature = tempDay.slice(1);

   
    let najmanjaTemperatura = Math.min(...temperature);

    
    let najvecaTemperatura = Math.max(...temperature);

    
    let prosjecnaTemperatura = temperature.reduce((acc, temp) => acc + temp, 0) / temperature.length;

    
    console.log("Datum:", datum);
    console.log("Najmanja temperatura:", najmanjaTemperatura);
    console.log("Najveća temperatura:", najvecaTemperatura);
    console.log("Prosječna temperatura:", prosjecnaTemperatura.toFixed(2));
}


analizirajTemperaturu(tempDay);
