const express = require("express");
const app = express();
const cluster = require('cluster');
const os = require('os');
const PORT = 8001;

const totalCPU = os.cpus().length;
if (cluster.isPrimary) {
    for (let i = 0; i < totalCPU; i++) {
        cluster.fork();
    }
} else {
    app.get("/", (req, res) => {
        return res.json({ message: `Hello from Express server:-${process.pid} ` })
    })
    app.listen(PORT, () => {
        console.log(`server starting on Port no:${PORT}`);
    })
}