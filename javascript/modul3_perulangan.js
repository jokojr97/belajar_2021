// pengulangan while
// materi 1
// var nilai = 1;
// while (nilai <= 10){
//     console.log('Angkot No. ' + nilai + ' beroperasi dengan baik.');
//     nilai++;
// }

// pengulangan for
// var noAngkot = 1;
// for (noAngkot = 1; noAngkot <= 10; noAngkot++) {
//     console.log('Angkot No. ' + noAngkot + ' Beroperasi dengan Baik.');
// }

// materi 2
var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
    console.log('Angkot No. ' + noAngkot + ' Beroperasi Dengan Baik.');
    noAngkot++;
}

for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
    console.log('Angkot No. ' + noAngkot + ' Sedang Tidak Beroperasi.');
}