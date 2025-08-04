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

await Promise.all([Request1(), Request2()])
    .then((results) => console.log(`Results on all promises -> ${results}`))
    .catch((error) => console.log(`Error occurred -> ${error}`));
