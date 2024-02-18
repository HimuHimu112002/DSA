function LenearSearch(arr, val) {
    for (let index = 0; index < arr.length; index++) {
       if(arr[index] == val){
        return `index Number is = ${index} and your input value is = ${val}`
       }
    }
    return `${val} Input number is invalid`
}
let result = LenearSearch([20,30,4,5,1], 1)
console.log(result)