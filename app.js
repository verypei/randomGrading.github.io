function makeObject(judulGrading,jumlahSoalLC,jumlahSiswa,noUrut,jumlahInstruktur){
  let obj = {};
  for (let i = 0; i < jumlahSoalLC; i++) {
      let key = `${judulGrading} soal no ${i+1}`;
      obj[key] = [];
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
let obj = makeObject(judulGrading,jumlahSoalLC,jumlahSiswa,noUrut,jumlahInstruktur);
return obj
}

function finalRandom(){
let x = myFunction();
let obj = x;
console.log(obj);
}