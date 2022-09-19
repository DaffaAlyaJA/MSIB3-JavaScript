function berHitung(Operator) {
    let form = document.getElementById("calcForm"),
        a1 = parseFloat(form.angka1.value),
        a2 = parseFloat(form.angka2.value),
        hasilPerhitungan = form.hasilPerhitungan,
        totalPerhitungan;

        if (isNaN(a1) || isNaN(a2)) return alert('Tolong Masukkan Angka Terlebih Dahulu');

    switch (Operator) {
        case '+': totalPerhitungan = a1 + a2; break;
        case '-': totalPerhitungan = a1 - a2; break;
        case '*': totalPerhitungan = a1 * a2; break;
        case '/': totalPerhitungan = a1 / a2; break;
        case '^': totalPerhitungan = Math.pow(a1, a2); break;
        default: break;
    }

    hasilPerhitungan.value = totalPerhitungan
}

// const berHitung = (e) => {
//     let form = document.getElementById("calcForm"),
//         a1 = parseFloat(form.angka1.value),
//         a2 = parseFloat(form.angka2.value),
//         hasilPerhitungan = form.hasilPerhitungan,
//         totalPerhitungan;
//         Operator = e.value;

//         if (isNaN(a1) || isNaN(a2)) return alert('Tolong Masukkan Angka Terlebih Dahulu');

//     switch (Operator) {
//         case 'btn_tambah': totalPerhitungan = a1 + a2; break;
//         case 'btn_kurang': totalPerhitungan = a1 - a2; break;
//         case 'btn_kali': totalPerhitungan = a1 * a2; break;
//         case 'btn_bagi': totalPerhitungan = a1 / a2; break;
//         case 'btn_pangkat': totalPerhitungan = Math.pow(a1, a2); break;
//         default: break;
//     }

//     hasilPerhitungan.value = totalPerhitungan

// }