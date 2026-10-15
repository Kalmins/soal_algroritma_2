const prompt = require('prompt-sync')({sigint:true})

let beratBadan = Number(prompt('Masukkan berat badan (kg) : '))
let tinggiBadan = Number(prompt('Masukkan tinggi badan (cm) : '))

let beratIdeal = tinggiBadan - 100
let selisih = beratBadan - beratIdeal

if (selisih >= -2 && selisih <= 2) {
    console.log("ideal")
} else {
    console.log("tidak ideal")
}
