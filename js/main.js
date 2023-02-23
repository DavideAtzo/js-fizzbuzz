'use strict';

// dichiaro variabile che andrà ad inserire l'elemento in html 
const container = document.querySelector('.container')
let stringa = '';

// ciclo che va a stampare in console da 1 a 100 
for (let i= 1; i <= 100; i++){
    const cards = document.createElement('div');
    container.append(cards);
    // ciclo ogni 15 va inserire la parola FizzBuzz 
    if(i % 15 === 0){
        stringa ='FizzBuzz'
        console.log('FizzBuzz');
        cards.append(stringa);
        cards.classList.add('FizzBuzz');
    }
    // ciclo ogni 5 va inserire la parola Buzz
    else if(i % 5 === 0){
        console.log('Buzz');
        stringa ='Buzz';
        cards.append(stringa);
        cards.classList.add('Buzz');
    }
    // ciclo ogni 3 va inserire la parola Fizz
    else if(i % 3 === 0){
        console.log('Fizz');
        stringa ='Frizz';
        cards.append(stringa);
        cards.classList.add('Frizz');

    }
    // altrimenti stampa gli altri numeri 
    else {
        console.log(i);
        cards.append(i);
        cards.classList.add('number')
    }



}