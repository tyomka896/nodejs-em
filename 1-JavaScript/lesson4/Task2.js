const obj = { prop1: 1, prop2: 2, prop3: true, prop4: "test", prop5: 10 };
let resultObj = {};

for (const [key, value] of Object.entries(obj)) {
    if (!Number.isInteger(value) || value % 2 != 0) {
        continue;
    }

    resultObj[key] = value;
}

console.log(resultObj); // { prop2: 2, prop5: 10 }
