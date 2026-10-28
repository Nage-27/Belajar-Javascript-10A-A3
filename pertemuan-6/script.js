// Perulangan For
for (let a = 1; a <= 50; a++) {
    if (a % 2 === 1) {
        console.log("Hello World ! " + a);
    }
}

// Mobil grab 1 - 10 dlm keadaan baik
for (let b = 1 ; b <= 10; b++) {
    if ( b === 9) {
        console.log("Mobil Grab " + b + " lagi diservis di bengkel");
    } else if ( b === 2 ) {
        console.log("Mobil Grab " + b + " di cipet");
    }
     else {
        console.log("Mobil Grab " + b + " dalam keadaan baik.");
    }
}

// Perulangan While
let bis = 1;

while(bis <= 10) {
    if (bis === 7) {
        console.log('Bis ' + bis + ' dalam keadaan rusak')
    } else {
        console.log('Bis ' + bis + ' dalam keadaan baik')
    }
    bis++    
}

// Perulangan DO WHILE
let kapal = 15
do {
    console.log('Kapal ' + kapal + ' dalam keadaan baik')
    kapal++
} while(kapal <= 10);