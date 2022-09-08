//2) array filling

const arr2 = [],
    newArr2 = [];

function createArray2() {

    for (let i = 1; i <= 300; i++) {
        arr2.push(i);
    }

    console.log(arr2);
    console.log('');
}

createArray2();

//filling array with even indexes

function evenIndex() {

    for (let i = 0; i < arr2.length; i++) {
        if (i % 2 == 0) {
            newArr2.push(arr2[i]);
        } 
    }

    console.log('Pulled even index values');
    console.log('--------------------------');
    console.log(newArr2);
}

evenIndex();