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


// // materi 2
// "use strict";

// function test() {
//     a = 2;
// }

// test();
// console.log(a);

// // Function Rekrusif/recursion
// function reskrusif(n) {
//     // harus ada base case atau kondisi berakhirnya function
//     if (n === 0) return;
//     console.log(n);
//     reskrusif(n-1);
// }

// reskrusif(10);

// Function Declaration dan Expression
// // declaration
// deklarasi('joko');
// function deklarasi(nama) {
//     console.log('hai ' + nama + '!');
// }

// deklarasi('joko');

// Expression
// // akan error jika di panggil sebelum di deklarasikan
// expresi('joko');
var expresi = function(nama) {
    console.log('hai ' + nama + '!');
}

expresi('joko');