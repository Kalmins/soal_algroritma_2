const prompt = require('prompt-sync')({sigint:true})

let nilaiBelanja = Number( prompt('Masukkan nilai belanja : '))

let sisa = nilaiBelanja % 100

let nilaiBulat

if (sisa < 25) {
    nilaiBulat = nilaiBelanja - sisa
} else if (sisa < 50) {
    nilaiBulat = nilaiBelanja - sisa + 25
} else if (sisa < 75) {
    nilaiBulat = nilaiBelanja - sisa + 50
} else {
    nilaiBulat = nilaiBelanja - sisa + 75
}
console.log("Nilai belanja: Rp" + nilaiBelanja)
console.log("Nilai setelah pembulatan: Rp" + nilaiBulat)

console.log(`
    Nilai belanja               : ${nilaiBelanja}
    Nilai setelah pembulatan    : ${nilaiBulat}`)
