const prompt = require('prompt-sync')({sigint:true})

let angka = Number(prompt('Masukkan angka (1-10) : '))

let romawi
 
if (angka == 1) {
    romawi = "I"
} else if (angka == 2) {
    romawi = "II"
} else if (angka == 3) {
    romawi = "III"
} else if (angka == 4) {
    romawi = "IV"
} else if (angka == 5) {
    romawi = "V"
} else if (angka == 6) {
    romawi = "VI"
} else if (angka == 7) {
    romawi = "VII"
} else if (angka == 8) {
    romawi = "VIII"
} else if (angka == 9) {
    romawi = "IX"
} else if (angka == 10) {
    romawi = "X"
}
console.log(`Angka Romawi : ${romawi}`)
