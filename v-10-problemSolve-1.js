let total_array = [1,2,3,4,5,6,10,8,"9"];

function removeItem(){
    let new_array = []
    for (let index = 0; index < total_array.length; index++) {

        if(typeof total_array[index] != "number"){
            console.log(`String index position = ${index}, String value = ${total_array[index]}`)
        } 

        if(typeof total_array[index] == "number"){
            new_array.push(total_array[index])
        }
        
    }
    console.log(new_array)
}
removeItem(total_array);