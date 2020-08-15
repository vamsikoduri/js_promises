function sleep(ms) {
   return new Promise(resolve => {
        throw new Error("fail intentionally");
        setTimeout(resolve, ms);
    })
}

console.log("Right Away!");
sleep(1000)
    .then(() => { console.log("after 1 sec") })
    .then(() => sleep(1000))
    .then(() => { console.log("after 2 sec") })
    .catch(() =>{console.log("Rejected")});