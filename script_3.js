// fibonacci series


function arriba (start, end) {
    const fibArr = [0],
    fibInBracket = [];

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
    return {fibArr: fibArr, fibInBracket: fibInBracket};
}

const resultFIbModifying = arriba(120,1200);
const resultFIbModifying2 = arriba(120,1200);


console.log('Task 3');
console.log('Fibonacci series');
console.log(resultFIbModifying.fibArr);
console.log('');
console.log('Fibonacci series in range');
console.log(resultFIbModifying.fibInBracket);
console.log(resultFIbModifying2.fibInBracket);

