function uniqValue(arr) {
    let newArray = []
    for (let index = 0; index < arr.length; index++) { // array length depend kore array value er upore so time complexity = (n)
        if(!newArray.includes(arr[index])){
            newArray.push(arr[index]) // array protita item check korbe so time complexity = (n)
            // total = (n2)
        }
    }
    return newArray // akhane koto guli item push hobe specific jana nai so akhaneo (n)
};

// time complexity = (n2)
// space complexity = (n)
let nameArray = [1,2,3,4,5,5,1];
console.log(uniqValue(nameArray))