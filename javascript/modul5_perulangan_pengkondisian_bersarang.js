// // materi 1
// var string = '';
// for(var i =1; i<= 10; i++){
//     for (var j = 1; j<= 5; j++) {
//         // sama dengan, string = string + '*'
//         string += '*';
//     }
//     string += '\n';
// }
// console.log(string);

// // materi 2 segita bintang
// var string = '';
// for(var i =1; i<= 10; i++){
//     for (var j = 1; j<= i; j++) {
//         // sama dengan, string = string + '*'
//         string += '*';
//     }
//     string += '\n';
// }
// console.log(string);

// // materi 3 segita bintang terbalik
// var string = '';
// for(var i =10; i>= 1; i--){
//     for (var j = 1; j<= i; j++) {
//         // sama dengan, string = string + '*'
//         string += '*';
//     }
//     string += '\n';
// }
// console.log(string);

// // materi 4 segita bintang terbalik 2
// var string = '';
// for(var i =10; i >= 1; i--){
//     for (var k = 10; k >= i; k--) {
//         string += ' ';
//     }
//     for (var j = 1; j<= i; j++) {
//         // sama dengan, string = string + '*'
//         string += '*';
//     }
//     string += '\n';
// }
// console.log(string);

// // materi 5 segita sama kaki kesamping
// var string = '';
// for(var i = 1; i <= 10; i++){
//     for (var j = 1; j<= i; j++) {
//         string += '*';
//     }
//     string += '\n';
// }
// for (var k = i; k >= 1; k--) {
//     for (var l = 1; l <= k; l++) {
//         string += '*';
//     }
//     string += '\n';
// }
// console.log(string);

// // materi 6 segitiga sama kaki
// var string = '';
// var jmlbaris = 5;
// for (var i = 1; i <= jmlbaris; i++) {
//     for (var j = jmlbaris; j >= i; j--) {
//         string += ' ';
//     }
//     for (var k = 1; k<=(2*i-1);k++) {
//         string += '*';
//     }
//         string += '\n';
// }
// console.log(string);

// materi 7 belah ketupat
var string = '';
var jmlbaris = 10;
for (var i = 1; i <= jmlbaris; i++) {
    for (var j = jmlbaris; j >= i; j--) {
        string += ' ';
    }
    for (var k = 1; k<=(2*i-1);k++) {
        string += '*';
    }
        string += '\n';
}
for (var l = 1; l <= jmlbaris; l++) {
    for (var m = 1; m <= l; m++) {
        string += ' ';
    }
    for (var n = jmlbaris; n>=(2*l-jmlbaris);n--) {
        string += '*';
    }
    string += '\n';
}
console.log(string);