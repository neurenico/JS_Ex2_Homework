//2) array filling

const arr2 = [],
    newArr2 = [];

function createArray2() {

    for (let i = 1; i <= 300; i++) {
        arr2.push(i);
    }
}

createArray2();

console.log('Task 2');
console.log('Array 2');
console.log(arr2);
console.log('');

//filling array with even indexes

function evenIndex() {

    for (let i = 0; i < arr2.length; i++) {
        if (i % 2 == 0) {
            newArr2.push(arr2[i]);
        } 
    }
}

evenIndex();

console.log('Pulled even index values');
console.log(newArr2);
console.log('--------------------------');