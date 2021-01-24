// panggil function
console.log(hitungLuasPersegiPanjang());
// console.log(hitungKelilingPersegiPanjang(10,20));

//function tanpa parameter
function hitungLuasPersegiPanjang() {
    var panjang = 10;
    var lebar = 20;
    var luas = panjang*lebar;
    return luas;
}

// fucntion dengan parameter
function hitungKelilingPersegiPanjang(p, l) {
    var keliling = 2*(p+l);
    return keliling;
}
