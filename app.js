function setupDoubleArrayListInstruktur(listInstruktur,jumlahInstruktur,jumlahSoalLC){
  let finalArray = [];
  let limit = Math.floor(jumlahInstruktur/jumlahSoalLC);
  let counter = 0;
  for (let i = 0; i < limit; i++) {
    let tempArray = [];
      for (let j = 0; j < jumlahSoalLC; j++) {
        if(counter > listInstruktur.length-1){
          break;
        }
        else{
          tempArray.push(listInstruktur[counter]);
          counter++;
        }
      } 
      console.log(tempArray,"---->");
      finalArray.push(tempArray);
  }
  return finalArray;
}


function makeObject(judulGrading,jumlahSoalLC,jumlahSiswa,noUrut,jumlahInstruktur){

  // batas no absen
  let noAbsenAkhir = ((jumlahSiswa+noUrut)-1);

  // template obj akhir
  let obj = {};

  // ukuran jarak absen
  const limit = Math.ceil(jumlahSiswa / Math.ceil(jumlahInstruktur / jumlahSoalLC));

  for (let i = 0; i < jumlahSoalLC; i++) {//looping jumlah soal LC
    let absenAwal = noUrut;//no absen awal
    let key = `grading ${judulGrading} soal no ${i+1}`;//key objek akhir
    obj[key] = [];
    for (let j = 0; j < Math.ceil(jumlahInstruktur/jumlahSoalLC); j++) {//looping untuk pembagian grading
      let absenAkhir = absenAwal+limit;//limit absen akhir
      if(absenAwal > noAbsenAkhir){
        absenAwal = noUrut;
      }
      if(absenAkhir > noAbsenAkhir){
        absenAkhir = noAbsenAkhir;
      }
      let objUrutanAbsen = {};
      let urutanAbsen = `${absenAwal}-${absenAkhir}`;
      objUrutanAbsen[urutanAbsen] = "";
      obj[key].push(objUrutanAbsen);
      absenAwal = absenAkhir+1;
    }
  }
  return obj;
}

function setUpInstructorName(obj,arr){
  for (const key in obj) {
    let counter = 0;
    for (let i = 0; i < obj[key].length; i++) {
        for (const key2 in obj[key][0]) {
            let indexRandom = Math.floor(Math.random()*arr[counter].length);
            let namaGrader = arr[counter][indexRandom];
            obj[key][0][key2] = namaGrader;
            arr[counter] = arr[counter].filter(el => el!==namaGrader);
            counter++;
        }
    }
  }
  return obj;
}


function myFunction(){
  // get all value
  let judulGrading = document.getElementById("judulGrading").value;
  let jumlahSiswa = Number(document.getElementById("jumlahSiswa").value);
  let listInstruktur = document.getElementById("listInstruktur").value.split('\n');
  let jumlahSoalLC = Number(document.getElementById("jumlahSoal").value);
  const noUrut = Number(document.getElementById("noUrut").value);
  let jumlahInstruktur = listInstruktur.length;
  let doubleArrayListInstruktur = setupDoubleArrayListInstruktur(listInstruktur,jumlahInstruktur,jumlahSoalLC);
  let obj = makeObject(judulGrading,jumlahSoalLC,jumlahSiswa,noUrut,jumlahInstruktur);
  let finalResult = setUpInstructorName(obj,doubleArrayListInstruktur);
  console.log(obj,"---->",doubleArrayListInstruktur,'---->');
}










