const prompt = require('prompt-sync')({sigint:true})

let nilai = Number(prompt('Masukkan nilai ujian : '))

let indeks

if (nilai >= 80) {
    indeks = 'A'
} else if (nilai >= 70) {
    indeks = 'B'
} else if (nilai >= 55) {
    indeks = 'C'
} else if (nilai >= 40) {
    indeks = 'D'
} else {
    indeks = 'E'
}
console.log(` Indeks nilai : ${indeks}`)
