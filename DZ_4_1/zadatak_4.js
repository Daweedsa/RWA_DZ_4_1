

// ispis od najvećega do najmanjega 
/*  let polje= [1,2,3,4,5,6,7,9,55,12,4,85];
    document.write("inicijalna dužina je:"+polje.length);
    polje.sort(function(a,b){
    return b - a;

})
document.write(" <br/> Sortiranje: ", polje);
*/


// ispis od najmanjega prema najvećem
/* 
    let polje= [1,2,3,4,5,6,7,9,55,12,4,85];
    document.write("inicijalna dužina je:"+polje.length);
    polje.sort(function(a,b){
    return a - b;

})
document.write(" <br/> Sortiranje: ", polje);
*/


//brisanje zadnja zadnja 2 člana i dodavanje 19 i 22 
    
let polje= [1,2,3,4,5,6,7,9,55,12,4,85];
        
    polje.sort(function(a,b){
        return a - b;
    });
    document.write(" <br/> Sortiranje prema većem od manjega ", polje);

    polje.splice(-2);
    document.write(" <br/> Polje nakon uklanjanja zadnja 2 člana ", polje);

    polje.push(19,22);
    document.write(" <br/> Polje nakon dodavanja novih članova ", polje);
    // definiranje novoga niza i spajanje oba niza u jedan i ispis
    let polje2 = ['Banana ', 'Orange ', 'Apple ', 'Mango '];
    let polje_final =[polje, polje2];

    document.write(polje_final);






