// Operator Logika

// Operator AND (&&)
let a = 5 === '5' && 6 > 3;
console.log("Hasil operator AND (&&) :" + a); //false

let b = 5 !== 10 && 6 < 10;
console.log("Hasil operator AND (&&) :" + b); //true

let c = 100 != '10' && 10 == '10';
console.log("Hasil operator AND (&&) :" + c); //true

// Operator OR (||)
let d = 10 <= 10 || 10 != '10';
console.log("Hasil operator OR (||) :" + d); //true

let e = 10 > 10 || 10 === '10';
console.log("Hasil operator OR (||) :" + e); //false

// Operator NOT (!)
let f = 5 < 10;
console.log(!f); //false

// TUGAS 
// Tugas operator AND (&&)
let tugas1 = 10 > 5 && 20 < 30;
console.log("Hasil operator AND (&&) :" + tugas1); //true

let tugas2 = 10 < 5 && 20 > 30;
console.log("Hasil operator AND (&&) :" + tugas2); //false

let tugas3 = 10 === 10 && 20 !== 20;
console.log("Hasil operator AND (&&) :" + tugas3); //false

let tugas4 = '10' !== '10' && '10' > '5';
console.log("Hasil operator AND (&&) :" + tugas4); //false

// Tugas operator || OR
let or1 = 5 >= 5 || 9 < 10;
console.log("Hasil operator OR || :" + or1); //true

let or2 = 10 == '10' || 10 < 2;
console.log("Hasil operator OR || :" + or2); //true

let or3 = 15 === '30' || 8 >= 8;
console.log("Hasil operator OR || :" + or3); //true

let or4 = 60 <= 25 || 90 === '90';
console.log("Hasil operator OR || :" + or4); //false 

// Tugas OP Not !
let n1 = 10 > 5;
console.log("Hasil OP not ! :" + !n1); //false

let n2 = 25 < 15;
console.log("Hasil OP not ! :" + !n2); //true
