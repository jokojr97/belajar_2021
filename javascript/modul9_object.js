// // object literal
// 1. PROBLEM: tidak effektif untuk object yang banyak
// var mhs = {
//     nama: "Joko Riyadi",
//     umur: 23,
//     energi: 10,
//     ips: [3, 3.5, 3.2, 3.4],
//     alamat: {
//         dusun: "kajangan",
//         desa: "jono",
//         kecamatan: "temayang",
//         kabupaten: "bojonegoro"
//     },
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan`);
//     }
// };

// console.log("nama = " + mhs.nama);
// console.log("ips indeks ke 2 = " + mhs.ips[2]);
// console.log("alamat desa = " + mhs.alamat.desa);

// object melalui function declaration
function BuatObjectMahasiswa(nama, nrp, email, jurusan, energi) {
    var mhs= {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    mhs.energi = energi;

    mhs.makan = function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat Makan`);
    }

    mhs.main = function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, Selamat Main`);
    }

    return mhs;
}

var mhs = BuatObjectMahasiswa('joko', 123457, 'joko.ryadi@gmail.com', 'teknik informatika', 10);
var mhs2 = BuatObjectMahasiswa('riyadi', 433457, 'joko.ryadi09@gmail.com', 'teknik informatika', 10);

// object melalui constructor
function Mahasiswa(nama, nrp, email, jurusan){
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs3 = new Mahasiswa('joko riyadi', 12343245, 'joko.riyadi97@gmail.com', 'manajemen informatika');
var mhs4 = new Mahasiswa('riyadi joko', 3243245, 'joko.riyadi90@gmail.com', 'manajemen informatika');



// object melalui object.create()
const MethodMahasiswa = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat Makan`);
    },
    main: function (jam) {
        this.energi += jam;
        console.log(`Halo ${this.nama}, Selamat Main`);
    },
    tidur: function (jam) {
        this.energi += jam*2;
        console.log(`Halo ${this.nama}, Selamat Tidur`);
    }
}

function Mahasiswaobj(nama, energi) {    
    // ada 2 cara
    // 1. harus deklarasi dua kali
    // let mahasiswa = {};
    // mahasiswa.nama = nama;
    // mahasiswa.energi = energi;
    // mahasiswa.makan = MethodMahasiswa.makan;
    // mahasiswa.main = MethodMahasiswa.main;
    // mahasiswa.tidur = MethodMahasiswa.tidur;

    // 2. menggunakan Object.create()
    let mahasiswa = Object.create(MethodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    
    return mahasiswa;
}

let joko = Mahasiswaobj('Joko', 10);
let riyadi = Mahasiswaobj('Riyadi', 10);