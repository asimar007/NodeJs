const fs = require("fs")

//! Read File Sync
const result = fs.readFileSync('./contact.txt', 'utf-8')
console.log(result);

//! Read File Async
fs.readFile('./contact.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log("Error", err);
    } else {
        console.log(result);
    }
})

//! Copy file
// fs.copyFileSync("./contact.txt", "./copy1.txt");

//! Delete file

// fs.unlinkSync("./copy1.txt")

//! File Status
console.log(fs.statSync("./copy.txt"));

fs.appendFileSync("./copy.txt", `${Date.now()}Hello Asim\n`)