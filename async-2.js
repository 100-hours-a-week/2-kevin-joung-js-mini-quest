async function waitForMessage() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello, Async/Await!")
        }, 1000);
    })
}

const message = await waitForMessage();
console.log(message);
