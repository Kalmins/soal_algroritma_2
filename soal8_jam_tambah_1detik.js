const prompt = require('prompt-sync')({sigint:true})

let hh = Number(prompt('Masukkan jam:'))
let mm = Number(prompt('Masukkan menit:'))
let ss = Number(prompt('Masukkan detik:'))

ss = ss + 1
if (ss == 60) {
    ss = 0
    mm = mm + 1
    if (mm == 60) {
        mm = 0
        hh = hh + 1
        if (hh == 24) {
            hh = 0
        }
    }
}
console.log(` Jam baru : ${hh}:${mm}:${ss}`)
