/*  Consegna:
    
    Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
 
    -   per i multipli di 3 stampi “Fizz” al posto del numero
    -   per i multipli di 5 stampi “Buzz”.
    -   Per i numeri che sono sia multipli di  3 che di 5 stampi “FizzBuzz”.
*/

/*  Strumenti:
    -   for/let
    -   console.log()
*/

let containerEl = document.getElementById("fizz_row");

// Stampa all'interno della console dell'inspector i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    console.log(i);

    let newEl = document.createElement("col");
    containerEl.appendChild(newEl).innerHTML = i;

    newEl.style.display = 'flex';
    newEl.style.justifyContent = 'center';
    newEl.style.padding = '30px';
    newEl.style.margin = '15px';
    newEl.style.border = '1px solid black';
    newEl.style.color = 'black';
    newEl.style.maxWidth = '100px';
    newEl.style.fontWeight = 'normal';

    // Se i numeri sono multipli di 3 stampa "Fizz"
    if (i % 3 == 0 && i % 5 == 0 ) {
        newEl.innerHTML = 'FizzBuzz';
        newEl.style.backgroundColor = '#ffd166';

    } else if (i % 3 == 0) {
        newEl.innerHTML = 'Fizz';
        newEl.style.backgroundColor = '#0cd6a1';

    } else if (i % 5 == 0 ) {
        newEl.innerHTML = "Buzz";
        newEl.style.backgroundColor = '#f0466f';
    }
}