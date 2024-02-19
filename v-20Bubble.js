function BubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
            //console.log(arr[i], arr[j]);
        }
        
    }
    return arr
}
let result = BubbleSort([10,1,2,20,-2])
console.log(result)