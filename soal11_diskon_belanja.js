const prompt = require('prompt-sync')({sigint:true})

let totalBelanja = Number(prompt('Masukkan total belanja : '))

let diskon = 0

if (totalBelanja > 100000) {
    diskon = totalBelanja * 0.1
}
let hargaSetelahDiskon = totalBelanja - diskon

console.log(`
    Total Belanja           : Rp ${totalBelanja}
    Diskon                  : Rp ${diskon}
    Harga setelah diskon    : Rp ${hargaSetelahDiskon}
    `)
