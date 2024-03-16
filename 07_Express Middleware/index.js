const express = require("express");
const fs = require("fs");
const users = require("./users.json");
const PORT = 8000;
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log("Middleware 1");
    next();
});

app.use((req, res, next) => {
    fs.appendFile("log.txt", `\n${Date.now()}:${req.method}:${req.path}\n`, (err, data) => {
        next();
    })
    next();
});

app
    .route("/:id")
    .get((req, res) => {
        console.log(req.headers);
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user);

    })
    .post((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user);
    });

app.listen(PORT, () => {
    console.log(`Server Started on:${PORT}`);
});
