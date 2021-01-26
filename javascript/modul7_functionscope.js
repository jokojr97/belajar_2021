// variable scope / window
// var a = 1;

// function tes() {
//     var b = 2;
//     // jika ada var akan dibuat variable lokal
//     var a = 2;
//     // jika tidaka da var maka akan menimpa variabel global scope
//     // a = 2;
//     console.log('a = ' + a);
//     console.log('window a = ' + window.a);
// }

// tes();
// akan error
// console.log('b = ' + b);


// materi 2
// "use strict";

function test() {
    a = 2;
}

test();
console.log(a);