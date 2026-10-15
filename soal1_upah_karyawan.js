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

// const prompt = require('prompt-sync')({sigint:true})

// let jamKerja = Number(prompt('Jumlah jam kerja : '))
// let upah
// let jamNormal = 48
// let jamLembur = jamKerja - jamNormal 

// if(jamKerja <= 48) {
//     upah = jamKerja * 2000
// } else {
//     upah = (jamNormal * 2000) + (jamLembur * 3000)
// }

// console.log(`
//     Jumlah jam kerjanya adalah ${jamKerja} jam
//     Total upah mingguannya adalah Rp. ${upah}
// `)