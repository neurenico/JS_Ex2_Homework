//2) array filling

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

//filling array with even indexes

function evenIndex() {

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            newArr.push(arr[i]);
        } 
    }

    console.log('Pulled even index values');
    console.log('--------------------------');
    console.log(newArr);
}

evenIndex();