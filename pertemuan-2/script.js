// string

let myName = 'ahmad';
let adress = 'jl. raya no. 1';
let a = '5';
let b = '6';
let c = a * b;
console.log(typeof(c));
console.log('nama saya' + myName + ' dan alamat saya ' + adress);
console.log(a + b);
console.log(myName);

// //tugas
// const enter = 'Baris Pertama\nBaris Kedua';
// const tab = 'Kolom satu\tKolom dua';
// const kutip = 'Hari ini Jum\'at';
// const kutipDua = 'Si Bro berkata "Halo"';
// const backslash = 'Karakter ini bernama backslash \\';

// console.log(enter);
// console.log(tab);
// console.log(kutip);
// console.log(kutipDua);
// console.log(backslash);

// //number
// let z = 10**4;
// console.log(z);

// //boolean

// let isTrue = true;
// console.log(typeof(isTrue));

// //null & Undefined
// let varOne = null;
// console.log(typeof(varOne));

// let myUndefined;
// console.log(typeof(myUndefined));

//PRIMITIVE & NON-PRIMITIVE ( ARRAY & OBJECT )
//array
const array = ['spagetti', 'ayam geprek', 'nasi goreng'];
console.log(`nama saya ${myName} alamat saya ${adress} dan makanan favorit saya adalah ${array[0]}`);

// Tulis variabel dgn 5 data dsismpan di array dam tampilakn datanya 
// crt yg berkaitan dari data diatas pake document.write
const myArray = ['CB 150R', 'VIXION R 155', 'GSX S 150', 'XSR 155', 'SUPRA X 125'];
myArray.push('NMAX 155');
myArray.push('PCX 160');
myArray.push('ADV 160');
myArray.pop();
myArray.shift();
myArray.unshift('CBR 250RR');
myArray.slice(1, 3);
console.log(myArray);
// const ygGakSuka = ['jengkol', 'pete', 'terasi', 'pare', 'genjer'];
// console.log(`nama saya ${myName} saya tinggal di ${adress} dan motor impian saya adalah ${myArray[0]} <br> dan saya tidak suka makanan seperti ${ygGakSuka[0]} dan ${ygGakSuka[1]}`);

// OBJECT 
let myObject = {
    nama : "Fahry",
    alamat : "JL. Braga",
    usia : 25,
    makananFavorit: ['spagetti', 'ayam geprek', 'nasi goreng'],
}
myObject.hobi = "mancing";
console.log(myObject.hobi);
// TUGAS OBJECT
let myObject2 = {
    nama : "Rangga",
    alamat : "Komplek Pergudangan Alun Indah, Gedung D Pintu 23, RT.3/RW.3, Cakung Bar., Kec. Cakung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13950",
    usia : 20,
    makananFavorit: ['naspad', 'ubi ungu', 'mie ayam'],
    pekerjaan : "Kurir",
    alamatPekerjaan : "Jl. Raya Bekasi Km. 21, RT.1/RW.3, Cakung Bar., Kec. Cakung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13910",
}
myObject2.hobi = "main game";
console.log(myObject2);
console.log(5 * undefined);
let angka = prompt('masukkan angka dari 1-10');
alert(`angka yang anda masukkan adalah` + typeof(angka));