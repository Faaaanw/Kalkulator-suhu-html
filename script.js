const btn = document.querySelector('#btn-hitung');
const txt_sisi = document.querySelector('#sisi');
const luas = document.querySelector('.luas');
const txt_fa = document.querySelector('#f');
const faren = document.querySelector('#faren');

btn.addEventListener('click', function() {
    let sisi = parseFloat(txt_sisi.value);
    let fa = parseFloat(txt_fa.value);
    
    // Memeriksa apakah input untuk Celsius telah diisi
    if (txt_sisi.value !== '') {
        // Memeriksa apakah input untuk Celsius valid
        if (!isNaN(sisi)) {
            // Melakukan perhitungan dan menampilkan hasil
            let luas_result = (sisi * 9/5) + 32;
            luas.innerHTML = "Hasil konversi Celcius ke Fahrenheit: " + luas_result.toFixed(2) + " °F";
        } else {
            // Menampilkan pesan kesalahan jika input untuk Celsius tidak valid
            luas.innerHTML = "Masukkan angka yang valid untuk sisi.";
        }
    } 
    else {
        // Mengosongkan hasil jika input untuk Celsius tidak diisi
        luas.innerHTML = "";
    }
    
    // Memeriksa apakah input untuk Fahrenheit telah diisi
    if (txt_fa.value !== '') {
        // Memeriksa apakah input untuk Fahrenheit valid
        if (!isNaN(fa)) {
            // Melakukan perhitungan dan menampilkan hasil
            let faren_result = (9/5) * (fa - 32);
            faren.innerHTML = "Hasil konversi Fahrenheit ke Celcius: " + faren_result.toFixed(2) + " °C";
        } else {
            // Menampilkan pesan kesalahan jika input untuk Fahrenheit tidak valid
            faren.innerHTML = "Masukkan angka yang valid untuk suhu Fahrenheit.";
        }
    }
     else {
        // Mengosongkan hasil jika input untuk Fahrenheit tidak diisi
        faren.innerHTML = "";
    }
});
