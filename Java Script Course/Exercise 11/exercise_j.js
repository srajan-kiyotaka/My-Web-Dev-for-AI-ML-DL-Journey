const arr1 = [12, 234, 129, 99];
const arr2 = [112, 34, 10, 109, 100, 200, 300];

function add(array1, array2){
    const newArr = [];
    const n = Math.max(array1.length, array2.length);
    let i = 0;
    while(i < n){
        newArr.push((array1[i] || 0) + (array2[i] || 0));
        i++;
    }
    return newArr;
}

console.log(add(arr1, arr2));