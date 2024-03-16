const express = require('express')
const multer = require('multer')
const app = express();
const path = require('path')
const PORT = 8001;

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))
app.use(express.urlencoded({ extended: false }));
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage })
app.get("/", (req, res) => {
    return res.render("Homepage")
})
app.post("/upload", upload.single('profileImage'), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    return res.redirect("/");
})

app.listen(PORT, () => {
    console.log(`Server star on port no:${PORT}`);
})