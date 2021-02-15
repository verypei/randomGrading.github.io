function doubleArrayListInstruktur(jumlahSoal,listInstruktur){
  // console.log(listInstruktur,"-----",jumlahSoal);
  let result = [];
  let count = Math.floor(listInstruktur.length / jumlahSoal);
  countInstruktur = 0;
  let lastIndex = 0
  // console.log(count,"---");
  let temp = [];
  for (let i = 0; i < jumlahSoal; i++) {
    for (let j = 0; j < count; j++) {
      temp.push(listInstruktur[countInstruktur]);
      countInstruktur++;
      lastIndex = countInstruktur;
    }
    result.push(temp);
    temp = [];
  }
  // penambahan sisa instruktur
  let indexResult = Math.floor(result.length / 2);
  for (let i = lastIndex; i < listInstruktur.length; i++) {
    result[indexResult].push(listInstruktur[i]);
    indexResult++;
  }
  return result;
}

function makeObject(judulGrading,jumlahSoalLC,jumlahSiswa,noUrut,jumlahInstruktur,arrayListInstruktur){
  let obj = {};
  // let setInterval = Math.ceil(jumlahSiswa / Math.ceil(jumlahInstruktur / jumlahSoalLC));
  for (let i = 0; i < jumlahSoalLC; i++) {
      let key = `${judulGrading} soal no ${i+1}`;
      obj[key] = [];
      let objInterval = {};
      for (let j = 0; j < Math.floor((jumlahSiswa * jumlahSoalLC)/jumlahInstruktur); j++) {
        objInterval[`xxx${j}-${i}`] = '';
      }
      obj[key].push(objInterval);
  }
  return obj;
}


function myFunction(){
    console.log("----->");
    // get all value
    let judulGrading = document.getElementById("judulGrading").value;
    let jumlahSiswa = Number(document.getElementById("jumlahSiswa").value);
    let listInstruktur = document.getElementById("listInstruktur").value.split('\n').reverse();
    let jumlahSoalLC = Number(document.getElementById("jumlahSoal").value);
    const noUrut = Number(document.getElementById("noUrut").value);
    let jumlahInstruktur = listInstruktur.length;
    let arrayListInstruktur = doubleArrayListInstruktur(jumlahSoalLC,listInstruktur)
    let obj = makeObject(judulGrading,jumlahSoalLC,jumlahSiswa,noUrut,arrayListInstruktur);
    return [obj,arrayListInstruktur];
}

function finalRandom(){
  let data = myFunction()
  let obj = data[0];
  let arrayListInstruktur = data[1];
  // penempatan grading;
  console.log(obj,arrayListInstruktur);
}