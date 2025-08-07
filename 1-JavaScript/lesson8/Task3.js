const Request1 = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("success");
        }, 100);
    });

const Request2 = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Ошибка");
        }, 100);
    });

await Promise.any([Request1(), Request2()])
    .then((result) => console.log(`Result -> ${result}`))
    .catch((error) => console.log(`Error occurred -> ${error}`));
