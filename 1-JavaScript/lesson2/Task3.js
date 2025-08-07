const a = true;
const b = true;
const c = true;

const r1 = c ? a || b : a && b;

console.log(`Ternary result -> ${r1}`);

let r2;

if (c) {
    r2 = a || b;
} else {
    r2 = a && b;
}

console.log(`Conditional result -> ${r2}`);
