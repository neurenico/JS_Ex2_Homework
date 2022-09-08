//1) array filling

const arr = [],
    newArr = [];

function createArray() {

    for (let i = 1; i <= 300; i++) {
        arr.push(i);
    }
}

createArray();

console.log('Task 1');
console.log('Array 1');
console.log(arr);
console.log('');

//filling array with even values

function evenValue() {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArr.push(arr[i]);
        } 
    }
}

evenValue();

console.log('Array with even values');
console.log(newArr);
console.log('--------------------------');