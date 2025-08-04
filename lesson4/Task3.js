const obj = {
    prop1: null,
    prop2: {},
    prop3: 3,
    prop4: "str",
    prop5: 100,
};
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

console.log(result); // {null: 1, object: 1, string: 1, number: 2}
