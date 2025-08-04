const Request1 = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("success request1");
        }, 100);
    });

const Request2 = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("success request2");
        }, 100);
    });

// через async/await
try {
    const response1 = await Request1();

    console.log(`Response1 -> ${response1}`);

    const response2 = await Request2();

    console.log(`Response2 -> ${response2}`);
} catch (error) {
    console.log(`Error occurred -> ${error}`);
}

// Через .then
await Request1()
    .then((response) => console.log(`Response1 -> ${response}`))
    .catch((error) => console.log(`Error occurred on Response1-> ${error}`));

await Request2()
    .then((response) => console.log(`Response2 -> ${response}`))
    .catch((error) => console.log(`Error occurred -> ${error}`));

// Or another way with .then
await Promise.all([Request1(), Request2()])
    .then((results) => console.log(`Results on all promises -> ${results}`))
    .catch((error) => console.log(`Error occurred -> ${error}`));
