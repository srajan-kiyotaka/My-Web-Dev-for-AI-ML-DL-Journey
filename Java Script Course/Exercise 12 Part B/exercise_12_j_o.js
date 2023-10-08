let a = 10;
let b = 20;
const func = (x, y) => x*y;
console.log(func(a, b));

const arr = [1, 4, 0, -1, -90, 100];

function countPositive(nums) {
    let count = 0;
    nums.forEach((num) => {
        if(num > 0){
            count++;
        }
    });
    return count;
}

console.log(countPositive(arr));

function addNum(arr, num){
    return arr.map(value => value + num);
}

console.log(addNum(arr, 10));

const arr1 = ['egg', 'banana', 'apple', 'egg', 'milk', 'egg'];

function removeEgg(arr){
    return arr.filter((value) => {
        return (value !== 'egg');
    });
}

console.log(removeEgg(arr1));

function remove2Egg(arr){
    let count = 2;
    return arr.filter((value) => {
        if(value === 'egg'){
            count--;
            return (count < 0);
        }
        return true;
    });
}

console.log(remove2Egg(arr1));