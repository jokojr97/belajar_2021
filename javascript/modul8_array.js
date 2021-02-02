// array
var arr = ['joko', 'kori', 'riya', 'yadi', [0, 1, 99], true];
// console.log("array indeks ke 0 " + arr[0]);
// console.log("array indeks ke 1 " + arr[1]);
// console.log("array indeks ke 2 " + arr[2]);
// console.log("array indeks ke 3 " + arr[3]);
// console.log("array indeks ke 4 indeks ke 0 " + arr[4][0]);
// console.log("array indeks ke indeks ke 1 " + arr[4][1]);
// console.log("array indeks ke indeks ke 2 " + arr[4][2]);
// console.log("array indeks ke 5 " + arr[5]);
// console.log("array " + arr);

// // 2. push dan pop
// // menambahkan di akhir indeks
// arr.push('riyadi');
// // menghapus indeks terakhir
// arr.pop();

// // 3. shift dan unshift
// // menambahkan di awal indeks
// arr.unshift('riyadi');
// // menghapus indeks terawal
// arr.shift();

// // array di gabungkan dan di pisahkan dengan ', '
// console.log(arr.join(', '));
// // jumlah array
// console.log(arr.length);
// console.log(arr.length);

// for (var i = 0; i<= arr.length;i++) {
//     console.log(arr[i]);
// }

// 4. slice dan splice
// a. splice untuk menyisipkan array di tengah
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2);
// arr.splice(2, 0, 'koriyadi', 'jokoriyadi');
// b. slice untuk mengambil array ditengah dan dijadikan array baru
// slice(indexAwal, sampaiIndexBerapa);
// var arr2 = arr.slice(0,3);
// console.log(arr2.join(', '));

// 5. foreach dan map
// perbedaan foreach dan map adalah map bisa mengembalikan (return) nilai dan di taruh di variabel baru
var mahasiswa = ['joko', 'kori', 'riya', 'yadi'];
var angka = [3,2,1,8,5,6,7,4,9];
// forEach
// mahasiswa.forEach(function(e, i){
//     console.log('Mahasiswa ke ' + (i+1) + ' adalah ' + e);
// });

// Map
// var angka2 = angka.map(function(e) {
//     return e*2;
// });
// console.log(angka2.join(' - '));

// 6. sort
console.log(angka.join(' - '));
angka.sort();
console.log(angka.join(' - '));
var jml = angka[1] + angka[0];
console.log(jml);