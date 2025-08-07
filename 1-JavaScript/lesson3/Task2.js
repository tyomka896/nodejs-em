const array = [2, 3, 4, 1, 2, 3, 4, 5];

// Код, который проверит, является ли массив отсортированным
let isSortedArray = isSorted_1(array);

function isSorted_1(array) {
    let isAsc = true;
    let isDesc = true;

    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            isAsc = false;
        }

        if (array[i] > array[i - 1]) {
            isDesc = false;
        }

        if (!isAsc && !isDesc) {
            return false;
        }
    }

    return isAsc || isDesc;
}

function isSorted_2(array) {
    const pairs = array.slice(0, -1).map((_, i, arr) => [arr[i], arr[i + 1]]);

    const isAsc = pairs.every(([a, b]) => a <= b);
    const isDesc = pairs.every(([a, b]) => a >= b);

    return isAsc || isDesc;
}

function isSorted_3(array) {
    const asc = [...array].sort((a, b) => a - b);
    const desc = [...array].sort((a, b) => b - a);

    const arrayStr = JSON.stringify(array);
    const ascStr = JSON.stringify(asc);
    const descStr = JSON.stringify(desc);

    return arrayStr === ascStr || arrayStr === descStr;
}
