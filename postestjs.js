//1. Menghitung Luas Segitiga
let alas = prompt("Masukkan Alas Segitiga : ");
let tinggi = prompt("Masukkan Tinggi Segitiga : ");

//rumus luas segitiga
let luasstiga = (1/2)*alas*tinggi;

console.log(`Luas Segitiga adalah : ${luasstiga}`);
document.write(`1. Luas Segitiga adalah : ${luasstiga}`);
document.write("<br />")

//2. Menghitung Luas Lingkaran
let jari = prompt("Masukkan Jari-jari lingkaran : ");

//rumus luas lingkaran
if (jari%7 == 0) {
    luaslingkaran = (22/7)*jari*jari
} else {
    luaslingkaran = 3.14*jari*jari
};

console.log(`Luas Lingkaran adalah : ${luaslingkaran}`);
document.write(`2. Luas Lingkaran adalah : ${luaslingkaran}`);

//3. Membuat variabel dengan tipe data object
let favorit = {
    warna : "biru",
    makanan : "sate",
    minuman : "air putih",
    musik : "alternative rock",
    mobil : "bmw"
};

//menampilkan tanpa menggunakan perulangan
console.log("Ini adalah hasil menampilkan tipe data object")
console.log(favorit["warna"]);
console.log(favorit["makanan"]);
console.log(favorit.minuman);
console.log(favorit.musik);
console.log(favorit.mobil);

//4. Membuat Variabel dengan tipe data array
let hewan = [
    "Singa",
    "Harimau",
    "Jaguar",
    "Serigala",
    "Cheetah"
];

console.log("Ini adalah hasil menampilkan array dengan perulangan")
hewan.forEach(function(ulang) {
    console.log(ulang)
});