const prompt = require('prompt-sync')({sigint:true})

let bilangan = Number(prompt("Masukkan bilangan bulat positif:"))

if (bilangan % 4 == 0) {
    console.log(bilangan + " adalah kelipatan 4")
} else {
    console.log(bilangan + " bukan kelipatan 4")
}
