const fs = require("fs")
const os = require("os")

//! Sync and Async Working
/*
console.log("1");
fs.stat("./Working.png", (err, st) => {
    console.log(st);
})
console.log("2"); */

//! Number of CPU
console.log(os.cpus().length);