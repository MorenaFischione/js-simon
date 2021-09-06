/* 
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

let listaNumeriRandom = [];
let numeroScelto = 5;

// Creo un ciclo While per inserire 16 numeri randomici nell'array listaBombe se il numero generato
    // non è già presente.

    while (listaNumeriRandom.length < numeroScelto ) {
        let num = getRandomNumber(1, 20);     
        if ( !listaNumeriRandom.includes(num) ) {
            listaNumeriRandom.push(num);
        } 
    }

alert("Questa è la lista da memorizzare: " + listaNumeriRandom);
console.log(listaNumeriRandom);

/* la funzione che richiamo all'interno del setTimeout non deve contenere l'argomento perchè 
* la funzione andrebbe ad essere eseguita prima del tempo stimato e,
* una volta trascorso il termine dei secondi fissati andrebbe a richimare il return della funzione.
*/
// setTimeout (miaLista, 30000);  

// Primo modo per inserire una funzione all'interno del setTimeout con argomento: 
// - mettendolo come 3 parametro.
// setTimeout (miaLista, 30000, 5)

// Secondo modo per inserire una funzione all'interno del setTimeout con argomento: 
// - inserendo una funzione anonima che richiama al suo interno la mia funzione
setTimeout(function(){  
    miaLista(5);
}, 10000);


function miaLista(numero) {
    let listaNumeriUtente = [];
    for ( let k = 0; k < numero; k++) {
        numeroScelto = parseInt(prompt("Inserisci un numero tra 1 e 20"));
        console.log(numeroScelto);
        if ( listaNumeriRandom.includes(numeroScelto) && !listaNumeriUtente.includes(numeroScelto)){
            listaNumeriUtente.push(numeroScelto);
            console.log(listaNumeriUtente);
        } 
    } 
    
    
    alert ("Hai indovinato " + listaNumeriUtente.length + " numeri. Esattamente i numeri: " + listaNumeriUtente);
}






// Funzioni.

function getRandomNumber(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


  
  
  