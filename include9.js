function resolveAfter(ms, value) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value);
        }, ms);
    });
}

function timeout(ms, promise) {
    const timeoutPromise = new Promise((_, reject) => {
        // look out there is no variable declaration, making this a global variable.
        timeoutId = setTimeout(() => {
            reject(new Error('operation cannot be completed'))
        }, ms);

    })

    return Promise.race([promise, timeoutPromise])
        .finally(() => {
            clearTimeout(timeoutId);
        });
}

const promise = resolveAfter(1000, "Spider Man & his Amazing firends");
timeout(5000, promise)
    .then(value => { console.log(value) })
    .catch(error => console.log(error));

