// menangkap pilihan player
var p = prompt('pilih antara 3 pilihan ini:\ngajah, semut, atau manusia');
if(p){
    if (p == "gajah" || p == "semut" || p == "manusia") {
        pilihan = p;
    }else {
        pilihan = "";
        alert('Anda memasukkan data yang salah!');
    }
}else {
    pilihan = "";
    alert('Pilihan anda tidak boleh kosong!');
}
// menangkap pilihan komputer
// membangkitkan bilangan random
var comp = Math.random();
if (comp < 0.33) {
    comp = "gajah";
}else if (comp >=0.33 && comp <= 0.66) {
    comp = "semut";
}else {
    comp = "manusia";
}
// console.log(comp);

// menentukan rules
if(p == comp) {
    hasil = 'SERI';
}else if (p == 'semut' && comp == 'gajah' || p == 'gajah' && comp == 'manusia' || p == 'manusia' && comp == 'semut') {
    hasil = 'MENANG';
}else {
    hasil = 'KALAH';
}
// tampilkan hasilnya
if (pilihan != "") {
    alert('pilihan kamu: ' + p + '\npilihan komputer: ' + comp + '\ndan hasilnya adalah kamu ' + hasil + ' dengan komputer');
}