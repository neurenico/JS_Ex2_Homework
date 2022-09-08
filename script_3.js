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

    console.log('Task 3');
    console.log('Fibonacci series');
    console.log(fibArr);
    console.log('');
    console.log('Fibonacci series in range');
    console.log(fibInBracket);
}

arriba (120,1200);


