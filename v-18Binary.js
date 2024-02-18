function BinaryrSearch(arr, val) {
    let start = 0;
    let end = arr.length -1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if(arr[middle] == val) return middle
        if(val > arr[middle]){
            start = middle + 1;
        }else if(val < arr[middle]){
            end = middle - 1;
        }
    }
    return -1
}
let result = BinaryrSearch([1,2,3,4,5,6,7], 7)
console.log(result);


// var a = [1,2,4,6,10,100,0,3];
// a.sort(function (a, b) {
//     return a - b;
// });

// function binarySearch(arr, i) {
//     let mid = Math.floor(arr.length / 2);
//     if (arr[mid] === i) {
//         return arr[mid];
//     } else if (arr[mid] < i && arr.length > 1) {
//         return binarySearch(arr.splice(mid, Number.MAX_VALUE), i);
//     } else if (arr[mid] > i && arr.length > 1) {
//         return binarySearch(arr.splice(0, mid), i);
//     } else {
//         return -1;
//     }
// }
// var result = binarySearch(a, 3);
// console.log(result);