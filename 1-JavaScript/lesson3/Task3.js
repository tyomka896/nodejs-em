const array = [1, 2, 3, 4, 10, 11, 3, 15, 20];

const sorted = [...array].sort((a, b) => {
    if (a % 2 == 0 || b % 2 == 0) {
        return 0;
    }

    return a - b;
});

// Or less readable way:
// const sorted = [...array].sort((a, b) => a % 2 == 0 || b % 2 == 0 ? 0 : a - b);

console.log(sorted);
