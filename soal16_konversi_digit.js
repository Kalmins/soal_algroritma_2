const prompt = require('prompt-sync')({sigint:true})

let karakter = prompt("Masukkan karakter digit (0-9):")
if (karakter >= "0" && karakter <= "9") {
    let nilai = Number(karakter)
    console.log("Nilai integer: " + nilai)
} else {
    console.log("Hasil konversi: -99")
}
