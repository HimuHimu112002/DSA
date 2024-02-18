function LenearSearch(arr, val) {
    for (let index = 0; index < arr.length; index++) {
       if(arr[index] == val){
        return `index Number is = ${index} and your input value is = ${val}`
       }
    }
    return `${val} Input number is invalid`
}
let result = LenearSearch([2,3,4,5], 6)
console.log(result)