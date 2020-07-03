const fs = require('fs');

let secretWord = "cheeseburgerpizzabagels";

let callback = (error, data) => {
    if (error) {
        console.log(error);
    } else { console.log(data) }
}

fs.readFile("./fileOne.txt", "utf-8", callback);

fs.readFile("./anotherFile.txt", "utf-8", callback);

fs.readFile("./finalFile.txt", "utf-8", callback)