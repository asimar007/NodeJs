const express = require("express")
const users = require('./users.json')
const fs = require("fs");

const app = express();
const PORT = 8000

// Middleware - Plugin
app.use(express.urlencoded({ extended: false }));
// Routers
app.get("/", (req, res) => {
    return res.json(users)
})
app
    .route("/user/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id)
        return res.json(user);
    })
    .patch((req, res) => {
        // Edit user with ID
        return res.json({ status: "Pending" })
    })
    .delete((req, res) => {
        // Delete user with ID
        return res.json({ status: "Pending" })
    })

app.post("/api/users", (req, res) => {
    const body = req.body;
    users.push({ ...body, id: users.length + 1 })
    fs.writeFile("./users.json", JSON.stringify(users), (err, data) => {
        return res.json({ status: "Success", id: users.length })
    })
});
app.listen(PORT, () => {
    console.log(`Server Started on PORT:${PORT}`);

})
