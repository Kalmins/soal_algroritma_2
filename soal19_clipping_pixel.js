const prompt = require('prompt-sync')({sigint:true})

let nilaiPixel = Number(prompt('Masukkan nilai pixel : '))

if (nilaiPixel > 255) {
    nilaiPixel = 255
} else if (nilaiPixel < 0) {
    nilaiPixel = 0
}
console.log(" " + nilaiPixel)
console.log(`Nilai pixel setelah clipping : ${nilaiPixel}`)
