const prompt = require('prompt-sync')({sigint:true})

let a = Number(prompt('Masukkan sisi a : '))
let b = Number(prompt('Masukkan sisi b : '))
let c = Number(prompt('Masukkan sisi c : '))

if ((a * a) + (b * b) == (c * c)) {
    console.log("Segitiga siku-siku")
} else if ((a * a) + (b * b) > (c * c)) {
    console.log("Segitiga lancip")
} else {
    console.log("Segitiga tumpul")
}
