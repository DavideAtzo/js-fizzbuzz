'use strict';

// ciclo che va a stampare in console da 1 a 100 
for (let i= 1; i <= 100; i++){
    // ciclo ogni 15 va inserire la parola FizzBuzz 
    if(i % 15 === 0){
        console.log('FizzBuzz');
        
    }
    // ciclo ogni 5 va inserire la parola Buzz
    else if(i % 5 === 0){
        console.log('Buzz');
    }
    // ciclo ogni 3 va inserire la parola Fizz
    else if(i % 3 === 0){
        console.log('Fizz');
    }
    // altrimenti stampa gli altri numeri 
    else {
        console.log(i);
    }
}