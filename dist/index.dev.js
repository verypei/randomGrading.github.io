"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function doubleArrayListInstruktur() {
  var _result;

  // return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //         resolve("Promise")
  //     }, 5000)
  // })
  var arr = ["Amir", "Arrizal", "Azrullah", "Dzakki", "Fauzan", "Gap", "Mario", "Rafael", "Rizkieawan", "Romi", "Rudy", "Stefani", "Syukur", "Taufiq", "Timothy", "Very", "Vincent", "Zul"];
  var data = [].concat(arr);
  var result = [];
  var jumlahSoal = 5;
  var jumlahSiswa = 53;
  var temp = []; // for(let i=1; i<=arr.length; i++) {
  //     temp.push(arr[i-1])
  //     if(i % 4 === 0){
  //         result.push(temp)
  //         temp = []
  //     }
  // }

  var flag = 0;
  var i = 0;
  var count = 0;

  while (count < jumlahSoal) {
    if (flag === Math.floor(18 / jumlahSoal)) {
      flag = 0;
      result.push(temp);
      temp = [];
      count++;
    } // if(arr.length < Math.floor(18/jumlahSoal)-1) break


    temp.push(data[i]);
    data.shift();
    i++;
    flag++;
  }

  var total = 0;
  result.forEach(function (el) {
    total += el.length;
  });
  var temp1 = arr.slice(total, arr.length);

  (_result = result[result.length - 1]).push.apply(_result, _toConsumableArray(temp1));

  console.log(result);
}

doubleArrayListInstruktur(); // function execute() {
//     console.log("<----->");
//     // get all value
//     let judulGrading = document.getElementById("judulGrading").value;
//     let jumlahSiswa = Number(document.getElementById("jumlahSiswa").value);
//     let listInstruktur = document.getElementById("listInstruktur").value.split('\n').reverse();
//     let jumlahSoalLC = Number(document.getElementById("jumlahSoal").value);
//     const noUrut = Number(document.getElementById("noUrut").value);
//     let jumlahInstruktur = listInstruktur.length;
//     // let obj = makeObject(judulGrading, jumlahSoalLC, jumlahSiswa, noUrut, jumlahInstruktur);
//     sikat().then((result) => {
//         let temp = result
//         console.log(temp)
//         console.log("After get")
//     })
//     // console.log("Nice")
// }