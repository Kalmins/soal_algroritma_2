const prompt = require('prompt-sync')({sigint:true})

let totalBelanja = Number(prompt('Masukkan total belanja:'))

let persenDiskon

if (totalBelanja > 100000) {
    persenDiskon = 10
    diskon = totalBelanja * 0.1
} else {
    persenDiskon = 0
    diskon = 0
}
let hargaSetelahDiskon = totalBelanja - diskon

console.log("Total belanja: Rp" + totalBelanja)
console.log("Diskon " + persenDiskon + "%: Rp" + diskon)
console.log("Total bayar: Rp" + hargaSetelahDiskon)

console.log(`
    Total belanja               : Rp ${totalBelanja}
    Diskon Rp ${persenDiskon}%  : Rp ${diskon}
    Total bayar                 : Rp ${hargaSetelahDiskon}
    `)