function valueChck(array1, array2) {
    if(array1.length != array2.length){
        return "Value not match"
    }else{
        for (let index = 0; index < array1.length; index++) {
            const element = array2.indexOf(array1[index] ** 2);
            console.log(element)
            // array1 er value array2 er majhe ase kina jodi thake tahole index position dekhabe r jodi na thake tahole -1
        }
    }
}
valueChck([2,3,6],[4,9,36])