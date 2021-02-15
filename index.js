function doubleArrayListInstruktur() {
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {

    //         resolve("Promise")
    //     }, 5000)
    // })
    let arr = [
        "Amir",
        "Arrizal",
        "Azrullah",
        "Dzakki",
        "Fauzan",
        "Gap",
        "Mario",
        "Rafael",
        "Rizkieawan",
        "Romi",
        "Rudy",
        "Stefani",
        "Syukur",
        "Taufiq",
        "Timothy",
        "Very",
        "Vincent",
        "Zul"
      ];
let data =[...arr]
    let result = []
    let jumlahSoal= 5;
    let jumlahSiswa = 53;
    let temp = []
    
    // for(let i=1; i<=arr.length; i++) {
    //     temp.push(arr[i-1])
    //     if(i % 4 === 0){
    //         result.push(temp)
    //         temp = []
    //     }
    // }
    let flag = 0;
    let i = 0;
    let count = 0;
    while(count < jumlahSoal){
        if(flag === Math.floor(18/jumlahSoal) ){
            flag = 0
            result.push(temp)
            temp = []
            count++
        }
        
        // if(arr.length < Math.floor(18/jumlahSoal)-1) break
        temp.push(data[i])
        data.shift()
        i++
        flag++
    }
    let total = 0;
    result.forEach(el => {
        total += el.length
    })
    let temp1 = arr.slice(total,arr.length)
    result[result.length-1].push(...temp1)
    console.log(result)
}

doubleArrayListInstruktur()
// function execute() {

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