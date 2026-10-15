const prompt = require('prompt-sync')({sigint:true})

let a = Number(prompt('Masukkan bilangan pertama : '))
let b = Number(prompt('Masukkan bilangan kedua : '))
let c = Number(prompt('Masukkan bilangan ketiga : '))

let temp

if (a > b) {
    temp = a
    a = b
    b = temp
}
if (b > c) {
    temp = b
    b = c
    c = temp
}
if (a > b) {
    temp = a
    a = b
    b = temp
}
console.log(`Bilangan terurut ${a}, ${b}, ${c}`)
