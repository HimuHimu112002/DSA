function sum(num) {
    let totalSum = 0;
    for (let index = 0; index < num.length; index++) {
        totalSum += num[index];
    }
    return totalSum
}
//console.log(sum([1,2,3,4,5]))
// akhane all time result dibe total array sum kore jogfoll so ati (n) er upore depend noi so complexity (1)

function sum(num) {
    let totalSum = [];
    for (let index = 0; index < num.length; index++) {
        totalSum.push(num[index]);
    }
    return totalSum
}
console.log(sum([1,2,3,4,5,6,7,8]))
// akhane all time result dibe total array so ati (n) er upore depend karon array elements kokhono 4ti or 10ti specific na so complexity (n) er maner upore depend