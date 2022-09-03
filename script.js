const arr = [],
    newArr = [];

// array filling

for (let i = 1; i <= 300; i++) {

    arr.push(i);
}

console.log('Array');
console.log('--------------------------');
console.log(arr);
console.log('');

// pull only even value from arr to newArr

for (let i = 0; i < arr.length; i++) {

    if (i % 2 != 0) {
        newArr.push(arr[i]);
    } 
}

console.log('Even Array');
console.log('--------------------------');
console.log(newArr);
console.log('');

// fibonacci series

const fibArr = [0],
    fibInBracket = [];

function arriba (start, end) {

    for (let i = 0; i < end; i++) {
        
        if (i < 2) {
            fibArr[i+1] = fibArr[i] + 1;

            if (fibArr[i+1] >= start && fibArr[i+1] <= end) {
                fibInBracket.push(fibArr[i+1]);
            }
        } else if (fibArr[i] <= end) {
            fibArr[i+1] = fibArr[i] + fibArr[i-1];

            if (fibArr[i+1] >= start && fibArr[i+1] <= end) {
                fibInBracket.push(fibArr[i+1]);
            } else if (fibArr[i+1] > end) {
                fibArr.pop();
            }
        } else {
            break;
        }
    }
}

arriba (120,900);

console.log('Fibonacci series');
console.log('--------------------------');
console.log(fibArr);
console.log('');
console.log('Fibonacci series in range');
console.log('--------------------------');
console.log(fibInBracket);
console.log('');




