// total sentence count =================
// function charC(str) {
//     let count = 0;
//     for (let index = 0; index < str.length; index++) {
//         count++
//     }
//     return count
// }
// console.log(charC("Himu Himu"))


// total char count =================
function charC(str) {
    let count = [];
    for (let index = 0; index < str.length; index++) {
        let char = str[index]
        if(count[char] > 0){
            count[char]++;
            //first check korbe H ase kina dekhbe H nai else er majhe jabe H:1 bosabe then abar jodi
            // H pai tahole if condition dhukbe H er value update korbe je value duplicate hobena se guli 1 thakbe karon 1 bar ase
        }else{
            count[char] = 1
        }
    }
    return count
}
console.log(charC("Himu Himux"))