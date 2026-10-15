const prompt = require('prompt-sync')({sigint:true})

let bulan = prompt('Masukkan nomor bulan (1-12) : ')
let tahun = prompt('Masukkan tahun : ')

let jumlahHari

if (bulan == 1 || bulan == 3 || bulan == 5 || bulan == 7 || bulan == 8 || bulan == 10 || bulan == 12) {
    jumlahHari = 31
} else if (bulan == 4 || bulan == 6 || bulan == 9 || bulan == 11) {
    jumlahHari = 30
} else if (bulan == 2) {
    if ((tahun % 4 == 0 && tahun % 100 != 0) || (tahun % 400 == 0)) {
        jumlahHari = 29
    } else {
        jumlahHari = 28
    }
}
console.log(`jumlah hari ${jumlahHari}`)
