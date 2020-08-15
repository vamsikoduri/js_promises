const fs = require("fs");

function readFile(filePath, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (error, content) => {
            if (error) reject(error);
            else
                resolve(content);
        })
    })
}

readFile(__filename, "utf8")
    .then(contents => console.log(contents))
    .catch(error => console.log(error));