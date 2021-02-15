"use strict";

function doubleArrayListInstruktur(jumlahSoal, listInstruktur) {
  // console.log(listInstruktur,"-----",jumlahSoal);
  var result = [];
  var count = Math.floor(listInstruktur.length / jumlahSoal);
  countInstruktur = 0;
  var lastIndex = 0; // console.log(count,"---");

  var temp = [];

  for (var i = 0; i < jumlahSoal; i++) {
    for (var j = 0; j < count; j++) {
      temp.push(listInstruktur[countInstruktur]);
      countInstruktur++;
      lastIndex = countInstruktur;
    }

    result.push(temp);
    temp = [];
  } // penambahan sisa instruktur


  var indexResult = Math.floor(result.length / 2);

  for (var _i = lastIndex; _i < listInstruktur.length; _i++) {
    result[indexResult].push(listInstruktur[_i]);
    indexResult++;
  }

  return result;
}

function makeObject(judulGrading, jumlahSoalLC, jumlahSiswa, noUrut, jumlahInstruktur, arrayListInstruktur) {
  var obj = {}; // let setInterval = Math.ceil(jumlahSiswa / Math.ceil(jumlahInstruktur / jumlahSoalLC));

  for (var i = 0; i < jumlahSoalLC; i++) {
    var key = "".concat(judulGrading, " soal no ").concat(i + 1);
    obj[key] = [];
    var objInterval = {};

    for (var j = 0; j < Math.floor(jumlahSiswa * jumlahSoalLC / jumlahInstruktur); j++) {
      objInterval["xxx".concat(j, "-").concat(i)] = '';
    }

    obj[key].push(objInterval);
  }

  return obj;
}

function myFunction() {
  console.log("----->"); // get all value

  var judulGrading = document.getElementById("judulGrading").value;
  var jumlahSiswa = Number(document.getElementById("jumlahSiswa").value);
  var listInstruktur = document.getElementById("listInstruktur").value.split('\n').reverse();
  var jumlahSoalLC = Number(document.getElementById("jumlahSoal").value);
  var noUrut = Number(document.getElementById("noUrut").value);
  var jumlahInstruktur = listInstruktur.length;
  var arrayListInstruktur = doubleArrayListInstruktur(jumlahSoalLC, listInstruktur);
  var obj = makeObject(judulGrading, jumlahSoalLC, jumlahSiswa, noUrut, arrayListInstruktur);
  return [obj, arrayListInstruktur];
}

function finalRandom() {
  var data = myFunction();
  var obj = data[0];
  var arrayListInstruktur = data[1]; // penempatan grading;

  console.log(obj, arrayListInstruktur);
}