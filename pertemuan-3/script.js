// Konversi tipe data

let angka = 100;
let konverAngka = String(angka);

console.log(konverAngka + konverAngka);
console.log(typeof(konverAngka));

let tahun = '2026';
let konverTahun = Number(tahun);

console.log(konverTahun + 4);

// Nilai falsy

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(false));

// Operator
// Operator Aritmatika

let a = 10;
let b = 5;

// Pertambahan
console.log("Penjumlahan :" + (a + b));

// Pengurangan
console.log("Pengurangan :" + (a - b));

// Perkalian
console.log("Perkalian :" + (a * b));

// Pembagian
console.log("Pembagian :" + (a / b));

// Modulus
console.log("Modulus :" + (a % b));

// Pangkat
console.log("Pangkat** :" + (a ** b));

// Operator penugasan

let x = 10;

console.log("Nilai x awal :" + x);

x += 10 ;
console.log("Nilai x setelah ditambah 10 :" + x);

x -= 5 ;
console.log("Nilai x setelah dikurangi 5 :" + x);

x *= 2 ;
console.log("Nilai x setelah dikali 2 :" + x);

x /= 4 ;
console.log("Nilai x setelah dibagi 4 :" + x);

x %= 3 ;
console.log("Nilai x setelah dimodulus 3 :" + x);

x **= 2 ;
console.log("Nilai x setelah dipangkatkan 2 :" + x);

// Operator Perbandingan

let c = 10;
let d = 5;
let e = '10';

// Lebih besar dari
console.log("Apakah c lebih besar dari d? " + (c > d));

// Lebih dari atau sama dengan
console.log("Apakah c lebih besar dari atau sama dengan d? " + (c >= d));

// Sama dengan
console.log("Sama dengan == " + (c == d));

// Sama dengan (strict)
console.log("Sama dengan === " + (c === d));

// Tidak sama dengan
console.log("Tdk sama dengan != " + (c != d));

// Tidak sama dengan (strict)
console.log("Tdk sama dengan !== " + (c !== d));