
function isProstiBroj(broj) {
    if (broj < 2) return false;
  
    for (let i = 2; i < broj; i++) {
      if (broj % i === 0) {
        return false;
      }
    }
  
    return true; 
  }
  
  function ispisiProstiBrojeva(od, doo) {
    for (let i = od; i <= doo; i++) {
      if (isProstiBroj(i)) {
        console.log(i);
        document.write(i+' <br/>');
      }
    }
  }
  
  
  ispisiProstiBrojeva(1, 1000);
  
  
  