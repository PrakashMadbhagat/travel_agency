const express = require("express");
const app = express();
const dataBase = require("./config/db.js")
const userRouter = require("./routes/user.route.js")
const adminRouter = require("./routes/admin.route.js")
const session = require('express-session')
const env = require("dotenv")
env.config()

app.use(session({
    secret: 'yourSecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 30 * 60 * 1000 }
}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

dataBase()
app.use("/user", userRouter)
app.use("/admin", adminRouter)

app.listen(5000, () => {
    console.log("Server is Connected");
})