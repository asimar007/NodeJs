const express = require("express");
const fs = require("fs");
const status = require("express-status-monitor")

const app = express();
app.use(status())

const PORT = 8000

// Middleware - Plugin
app.use(express.urlencoded({ extended: false }));
//! Tradition way to Render the file in a browser
/*
app.get("/", (req, res) => {
    fs.readFile("./users.txt", (err, data) => {
        res.json(data)
    })
})
*/
//! Good Practice to have this way to render the File in a browser
app.get("/", (req, res) => {
    const stream = fs.createReadStream("./users.txt", 'utf-8')
    stream.on("data", (chunk) => res.write(chunk))
    stream.on('end', () => res.end())
})


app.listen(PORT, () => {
    console.log(`Server Started on PORT:${PORT}`);

})