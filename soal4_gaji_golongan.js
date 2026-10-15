const prompt = require('prompt-sync')({sigint:true})

let nama = prompt('Masukkan nama karyawan : ')
let golongan = prompt('Masukkan golongan (A/B/C/D) : ')
let jamKerja = Number(prompt('Masukkan jumlah jam kerja : '))

let upahPerJam

if (golongan == 'A') {
    upahPerJam = 4000
} else if (golongan == 'B') {
    upahPerJam = 5000
} else if (golongan == 'C') {
    upahPerJam = 6000
} else if (golongan == 'D') {
    upahPerJam = 7500
}
let gaji
if (jamKerja <= 48) {
    gaji = jamKerja * upahPerJam
} else {
    let jamNormal = 48
    let jamLembur = jamKerja - 48
    gaji = (jamNormal * upahPerJam) + (jamLembur * 3000)
}
console.log(`
    Nama : ${nama}
    Gaji mingguan : ${gaji}
    `)
