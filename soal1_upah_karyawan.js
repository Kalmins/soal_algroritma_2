const prompt = require('prompt-sync')({sigint:true})

let jamKerja = Number(prompt("Masukkan jumlah jam kerja:"))

let upah

if (jamKerja <= 48) {
    upah = jamKerja * 2000
} else {
    let jamNormal = 48
    let jamLembur = jamKerja - 48
    upah = (jamNormal * 2000) + (jamLembur * 3000)
}
console.log(`
    Total upah mingguan : ${upah}
`)