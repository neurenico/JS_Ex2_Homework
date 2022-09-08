//1) array filling

const arr = [],
    newArr = [];

function createArray() {

    for (let i = 1; i <= 300; i++) {
        arr.push(i);
    }

    console.log(arr);
    console.log('');
}

createArray();

//filling array with even values

function evenValue() {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArr.push(arr[i]);
        } 
    }

    console.log(newArr);
}

evenValue();