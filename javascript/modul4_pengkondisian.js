// // materi 1 if else
// var jumlahAngkot = 10;
// var noAngkot = 1;

// for (noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
//     if (noAngkot <= 6) {
//         console.log('Angkot No. ' + noAngkot + ' Beroperasi Dengan Baik.');
//     }else {
//         console.log('Angkot No. ' + noAngkot + ' Sedang Tidak Beroperasi.');
//     }
// }

// // materi 2 else if
// var jumlahAngkot = 10;
// var noAngkot = 1;

// for (noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
//     if (noAngkot <= 6) {
//         console.log('Angkot No. ' + noAngkot + ' Beroperasi Dengan Baik.');
//     }else if (noAngkot === 8){
//         console.log('Angkot No. ' + noAngkot + ' Sedang Lembur.');
//     } else {
//         console.log('Angkot No. ' + noAngkot + ' Sedang Tidak Beroperasi.');
//     }
// }

// materi 3 quiz pengkondisian
// var jumlahAngkot = 10;
// var noAngkot = 1;

// for (noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
//     if (noAngkot <= 6 && noAngkot !== 5) {
//         console.log('Angkot No. ' + noAngkot + ' Beroperasi Dengan Baik.');
//     }else if (noAngkot === 8 || noAngkot === 5 || noAngkot === 10){
//         console.log('Angkot No. ' + noAngkot + ' Sedang Lembur.');
//     } else {
//         console.log('Angkot No. ' + noAngkot + ' Sedang Tidak Beroperasi.');
//     }
// }

// materi 4 pengkondisian switch
var item = prompt('Masukkan nama makanan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)');

switch (item) {
    case 'nasi' : 
        alert('Makanan / minuman SEHAT!');
        break;
    case 'daging' : 
        alert('Makanan / minuman SEHAT!');
        break;
    case 'susu' : 
        alert('Makanan / minuman SEHAT!');
        break;
    case 'hamburger' : 
        alert('Makanan / minuman TIDAK SEHAT!');
        break;
    case 'softdrink' : 
        alert('Makanan / minuman TIDAK SEHAT!');
        break;
    default : 
        alert('anda memasukkan nama makanan yang SALAH!');
        break;
}