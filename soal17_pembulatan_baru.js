const prompt = require('prompt-sync')({sigint:true})

let nilaiBelanja = Number(prompt('Masukkan nilai belanja: '))

let nilaiBulat = Math.floor(nilaiBelanja / 25) * 25

console.log(`Nilai belanja: Rp${nilaiBelanja}`)
console.log(`Nilai setelah pembulatan: Rp${nilaiBulat}`)
