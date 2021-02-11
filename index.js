const setupDoubleArrayListInstruktur = (listInstruktur, jumlahInstruktur, jumlahSoalLC) => {
    let finalArray = [];
    let limit = Math.floor(jumlahInstruktur / jumlahSoalLC);
    let counter = 0;
    for (let i = 0; i < limit; i++) {
        let tempArray = [];
        for (let j = 0; j < jumlahSoalLC; j++) {
            if (counter > listInstruktur.length - 1) {
                break;
            }
            else {
                tempArray.push(listInstruktur[counter]);
                counter++;
            }
        }
        finalArray.push(tempArray);//disni gagal
    }
    return finalArray;
}

const makeObject = (judulGrading, jumlahSoalLC, jumlahSiswa, noUrut, jumlahInstruktur) => {

    // batas no absen
    let noAbsenAkhir = ((jumlahSiswa + noUrut) - 1);

    // template obj akhir
    let obj = {};

    // ukuran jarak absen
    const limit = Math.ceil(jumlahSiswa / Math.ceil(jumlahInstruktur / jumlahSoalLC));

    for (let i = 0; i < jumlahSoalLC; i++) {//looping jumlah soal LC
        let absenAwal = noUrut;//no absen awal
        let key = `grading ${judulGrading} soal no ${i + 1}`;//key objek akhir
        obj[key] = [];
        for (let j = 0; j < Math.ceil(jumlahInstruktur / jumlahSoalLC); j++) {//looping untuk pembagian grading
            let absenAkhir = absenAwal + limit;//limit absen akhir
            if (absenAwal > noAbsenAkhir) {
                absenAwal = noUrut;
            }
            if (absenAkhir > noAbsenAkhir) {
                absenAkhir = noAbsenAkhir;
            }
            let objUrutanAbsen = {};
            let urutanAbsen = `${absenAwal}-${absenAkhir}`;
            objUrutanAbsen[urutanAbsen] = "";
            obj[key].push(objUrutanAbsen);
            absenAwal = absenAkhir + 1;
        }
    }
    return obj;
}

const execute = () => {
    const judulGrading = document.getElementById("judulGrading").value;
    const jumlahSiswa = Number(document.getElementById("jumlahSiswa").value);
    const listInstruktur = document.getElementById("listInstruktur").value.split('\n');
    const jumlahSoalLC = Number(document.getElementById("jumlahSoal").value);
    const noUrut = Number(document.getElementById("noUrut").value);
    const jumlahInstruktur = listInstruktur.length;

    let setup = setupDoubleArrayListInstruktur(listInstruktur, jumlahInstruktur, jumlahSoalLC)
    let object = makeObject(judulGrading, jumlahSoalLC, jumlahSiswa, noUrut, jumlahInstruktur) 
    console.log(setup,object)

    // Setup Instruktur Name
    // for (const key in object) {
    //     let counter = 0;
    //     for (let i = 0; i < object[key].length; i++) {
    //       for (const key2 in object[key][0]) {
    //         let indexRandom = Math.floor(Math.random() * 3);
    //         let namaGrader = setup[counter][indexRandom];
    //         while (!namaGrader) {
    //           indexRandom = Math.floor(Math.random() * 3);
    //           namaGrader = setup[counter][indexRandom];
    //         }
    //         object[key][0][key2] = namaGrader;
    //         setup[counter] = setup[counter].filter((el) => { return el !== namaGrader });
    //         counter++;
    //       }
    //     }
    //   }
    //   console.log(object)
    // console.log(judulGrading, jumlahSiswa, listInstruktur, jumlahSoalLC, noUrut, jumlahInstruktur)
}