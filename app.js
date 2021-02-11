function setupDoubleArrayListInstruktur(listInstruktur,jumlahInstruktur,jumlahSoalLC){
  // console.log("entering final 2 array");
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
      finalArray.push(tempArray);//disni gagal
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

// function makeObject(judulGrading,jumlahSoalLC,jumlahSiswa,noUrut,jumlahInstruktur){
//   let noAwal = noUrut;
//   let obj = {};
//   let limit = Math.ceil(jumlahSiswa / jumlahSoalLC);
//   let batasAkhir = jumlahSiswa+noAwal;
//   for (let i = 0; i < jumlahSoalLC; i++) {
//       let counter = 0;
//       let key  = `${judulGrading} ${i+1}`
//       obj[key] = [];
//       let objRange = {}
//       for (let j = 0; j < Math.floor(jumlahInstruktur/jumlahSoalLC); j++) {
//           let x = noUrut+limit
//           if(x > batasAkhir){
//               x = batasAkhir;
//           }
//           let range = `${noUrut}-${x}`;
//           objRange[range] = "";
//           noUrut = (x+1);
//           if(noUrut > batasAkhir){
//               noUrut = noAwal;
//           }
//           counter++;
//       }
//       obj[key].push(objRange);
//   }
//   return obj;
// }


function setUpInstructorName(obj,arr){
  // console.log(arr,"---array dalam set up instructor");
  for (const key in obj) {
    let counter = 0;
    for (let i = 0; i < obj[key].length; i++) {
        for (const key2 in obj[key][0]) {
            let indexRandom = Math.floor(Math.random()*3);
            let namaGrader = arr[counter][indexRandom];
            while(!namaGrader){
                indexRandom = Math.floor(Math.random()*3);
                namaGrader = arr[counter][indexRandom];
            }
            obj[key][0][key2] = namaGrader;
            arr[counter] = arr[counter].filter((el)=>{return el!==namaGrader}); 
            counter++;
        }
    }
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
  let doubleArrayListInstruktur = setupDoubleArrayListInstruktur(listInstruktur,jumlahInstruktur,jumlahSoalLC);
  // console.log(listInstruktur,"--->");
  return [obj,doubleArrayListInstruktur];
}

function finalRandom(){
  let x = myFunction();
  let obj = x[0];
  let arr = x[1]
  for (const key in obj) {
    let counter = 0;
    for (let i = 0; i < obj[key].length; i++) {
      for (const key2 in obj[key][i]) {
        console.log(arr[counter].length-1,"----");
        let indexRandom = Math.floor(Math.random()*arr[counter].length-1);
        let namaGrader = arr[counter][indexRandom];
        while(namaGrader === undefined){
          indexRandom = Math.floor(Math.random()*3);
          namaGrader = arr[counter][indexRandom];
        }
        obj[key][i][key2] = namaGrader;
        arr[counter] = arr[counter].filter((el)=>{return el!==namaGrader}); 
        counter++;
      }
    }
  }
  console.log(obj);
  return obj;
}