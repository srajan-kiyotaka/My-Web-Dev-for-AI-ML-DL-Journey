const arr1 = [12, 234, 129, 99];
const arr2 = [112, 34, 10, 109, 100, 200, 300];
const arr3 = [];
const arr4 = [3];

function minMax(array){
    const obj = {min: null, max: null};
    const n = array.length;

    for(let i = 0; i < n; i++){
        if(obj.min === null || obj.min > array[i]){
            obj.min = array[i];
        }
        if(obj.max === null || obj.max < array[i]){
            obj.max = array[i];
        }
    }
    return obj;
}

console.log(minMax(arr1));
console.log(minMax(arr2));  
console.log(minMax(arr3));
console.log(minMax(arr4));