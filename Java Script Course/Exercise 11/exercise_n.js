const arr1 = [12, 34, 10, 109, 10, 12, 3];
const arr2 = ['apple', 'orange', 'apple', 'grapes', 'apple', 'orange', 'banana', 'papaya'];

function count(array){
    const obj = {};
    const n = array.length;

    for(let i = 0; i < n; i++){
        if(obj[array[i]] === undefined){
            obj[array[i]] = 1;
        }
        else{
            obj[array[i]]++;
        }
    }
    return obj;
}

console.log(count(arr1));
console.log(count(arr2));