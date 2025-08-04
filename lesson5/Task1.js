/**
 * Lesson 2 - Task 1
 * @returns
 */
function lesson2Task1(a, b, c) {
    const sum = [a, b, c].reduce((red, el) => red + el);

    if (Math.min(a, b, c) < 0 || sum === 100) {
        console.log("нет");
    }

    if (a > b + c) {
        console.log("-1");
    }

    if (sum < 0) {
        console.log("500");
    } else if (sum > 0) {
        console.log("0");
    }
}

/**
 * Lesson 2 - Task 2
 * @returns
 */
function lesson2Task2(a, b) {
    const c = a + b > 100;

    if (c) {
        console.log("Да");
    } else {
        console.log("Нет");
    }
}

/**
 * Lesson 2 - Task 3
 * @returns
 */
function lesson2Task3(a, b, c) {
    const r1 = c ? a || b : a && b;

    console.log(`Ternary result -> ${r1}`);

    let r2;

    if (c) {
        r2 = a || b;
    } else {
        r2 = a && b;
    }

    console.log(`Conditional result -> ${r2}`);
}

/**
 * Lesson 3 - Task 1
 * @param {any[]} array
 * @returns
 */
function lesson3Task1(array) {
    const copyArray = [...array];
    // const copyArray = array.map((el) => el);
    // const copyArray = Array.from(array);

    return copyArray;
}

/**
 * Lesson 3 - Task 2
 * @param {number[]} array
 * @returns
 */
function lesson3Task2(array) {
    const pairs = array.slice(0, -1).map((_, i, arr) => [arr[i], arr[i + 1]]);

    const isAsc = pairs.every(([a, b]) => a <= b);
    const isDesc = pairs.every(([a, b]) => a >= b);

    return isAsc || isDesc;
}

/**
 * Lesson 3 - Task 3
 * @param {number[]} array
 * @returns
 */
function lesson3Task3(array) {
    return [...array].sort((a, b) => a % 2 == 0 || b % 2 == 0 ? 0 : a - b);
}

/**
 * Lesson 4 - Task 1
 * @param {object} obj
 * @returns
 */
function lesson4Task1(obj) {
    return Object.entries(obj).length == 0;
}

/**
 * Lesson 4 - Task 2
 * @param {object} obj
 * @returns
 */
function lesson4Task2(obj) {
    let result = {};

    for (const [key, value] of Object.entries(obj)) {
        if (!Number.isInteger(value) || value % 2 != 0) {
            continue;
        }

        result[key] = value;
    }

    return result;
}

/**
 * Lesson 4 - Task 3
 * @param {object} obj
 * @returns
 */
function lesson4Task3(obj) {
    const result = {};

    const incType = (type) => {
        result[type] ??= 0;
        result[type]++;
    };

    for (const value of Object.values(obj)) {
        if (value == null || value == undefined) {
            incType(value);

            continue;
        }

        incType(typeof value);
    }

    return result;
}
