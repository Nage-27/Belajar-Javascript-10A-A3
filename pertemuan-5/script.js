// operator unary
let a = 5;
// Increment
a++
console.log(a);

// Conditional Operator

let laukPagi = 'ayam balado';

if (laukPagi == 'ayam semur'){
    console.log('makan pagi dengan ayam semur');
} else{
    console.log('makan pagi dengan lauk lain');
}

// let inputUser = prompt('masukan ekstrakulikuler pilihan anda : panahan, futsal, sapala ');
// if (inputUser == 'panahan'){
//     alert('anda memilih ekskul panahan');
// } else if(inputUser == 'futsal'){
//     alert('anda memilih ekskul futsal');
// } else if(inputUser == 'sapala'){
//     alert('anda memilih ekskul sapala');
// } else{
//     alert('anda gak milih ekskul');
// }

// tugas
// let angka = "8";
// if (angka % 2 === 0){
//     console.log('angka genap');
// } else if(angka % 2 === 1) {
//     console.log('angka ganjil');
// } else {
//     console.log('anda tidak memasukan angka');
// }

//Pengkondisian Switch
// let hari = 2;
// let namaHari;

// switch (hari) {
//   case 1:
//     namaHari = "Senin";
//     break;
//   case 2:
//     namaHari = "Selasa";
//     break;
//   case 3:
//     namaHari = "Rabu";
//     break;
//   default:
//     namaHari = "Input tidak valid";
// }

// console.log(namaHari); //output: selasa

//Switch dengan menggunakan prompt
let inputBuah = prompt("Masukkan nama buah (mangga, durian, jeruk, atau apel): ");

// Mengubah input ke huruf kecil agar pencocokann tetap valid (case-insensitive)
let buah = inputBuah ? inputBuah.toLowerCase() : "";

switch (buah) {
    case "mangga":
        alert("Mangga harganya Rp15.000 per kilo dek..");
        break;

    case "durian":
        alert("Durian Harganya Rp.5000 sepotong");
        break;

    case "jeruk":
    case "apel":
        alert("Harga salah satunya sama aja, Rp100.000 per gram bre, maklum dari antartika");
        break;
        default:
            alert("Waadduuuhhh, buahnya gak ada cik...");
}