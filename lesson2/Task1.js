const a = 0;
const b = 0;
const c = 0;

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
