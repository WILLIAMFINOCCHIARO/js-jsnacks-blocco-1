// JSnack 1
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while
// JSnack 2
// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.
// JSnack 3
// Stampa le potenze di 2 fino a 1000.
// Ripeto alcuni consigli del giorno:
//  1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
//  2. JavaScript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
//  3. si ma noi cosa vogliamo fare?
//  4. torniamo a scrivere in italiano
//  5. proviamo ad immaginare le operazioni che vogliamo 
//  far svolgere al nostro programma così come lo faremmo "a mano"


// JSnack 1

// let somma = 0;

// for ( i = 0; i < 5; i++) {
//   const n = parseInt(prompt("inserisci un numero"));
//   somma +=n;
// }


// let i = 0;
// let somma = 0;

// while (i < 5) {
//   i++;
//   const n = parseInt(prompt("inserisci un numero"));
//   somma +=n;
// }

// console.log(somma);


// JSnack 2

let parola1 = prompt("Inserisci una parola ");
let parola2 = prompt("Inserisci unaparola ");


if (  parola1.length === parola2.length  ) {
  console.log(parola1, "e", parola2);
    

} else if ( parola1.length > parola2.length) {
    console.log("la parola più lunga è :",parola1);
} 
else {
  console.log("la parola più lunga è :",parola2);

}
