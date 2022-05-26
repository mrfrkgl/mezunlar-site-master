const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");
const categoryRouter = require("./routes/categories");
const multer = require("multer");

dotenv.config();
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URL)
    .then(console.log("Connected to database"))
    .catch((err) => console.log(err));

//klasöre resim ekleme (sorunlu?)    
const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,"images")
    },filename:(req,file,cb) => {
        cb(null, "kurt.jpg")
    }
})
const upload = multer({storage:storage})
app.post("/api/upload", upload.single("file"),(req, res) => {
    res.status(200).json("Dosya yüklendi.")
})

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/categories", categoryRouter);

app.use("/", (req, res) => {
    console.log("Hey burası ana sayfa");
});

app.listen("5000", () => {
    console.log("Back-end code here running");
});
