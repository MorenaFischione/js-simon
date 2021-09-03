/* 
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

let listaNumeriRandom = [];
let numeroScelto;

for ( let i = 0; i < 5; i++) {
    listaNumeriRandom.push(getRandomNumber(1, 100));
} 
alert("Questa è la lista da memorizzare: " + listaNumeriRandom);
console.log(listaNumeriRandom);


setTimeout (miaLista(), 10000);



function miaLista() {
    let listaNumeriUtente = [];
    for ( let k = 0; k < 5; k++) {
        numeroScelto = parseInt(prompt("Inserisci un numero tra 1 e 20"));
        console.log(numeroScelto);
        for (let x = 0; x < listaNumeriRandom.length; x++) {
            if ( numeroScelto === listaNumeriRandom[x] ){
                listaNumeriUtente.push(numeroScelto);
                console.log(listaNumeriUtente)
            }
        } 
    } 
    alert ("Hai indovinato " + listaNumeriUtente.length + " numeri. Esattamente i numeri: " + listaNumeriUtente);
    
}




// Funzioni.

function getRandomNumber(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


  
  
  