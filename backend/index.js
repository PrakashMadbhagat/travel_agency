const express = require("express");
const app = express();
const path = require('path');
const body_parser = require('body-parser');
const dataBase = require("./config/db.js");
const userRouter = require("./routes/user.route.js");
const bookingRouter = require("./routes/booking.route.js");
const adminRouter = require("./routes/admin.route.js");
const session = require('express-session');
const env = require("dotenv");
const cors = require('cors');

env.config();

app.use(cors());

app.use(session({
    secret: 'yourSecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 30 * 60 * 1000 }
}));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(body_parser.urlencoded({ extended: true }));
app.use(express.json());

dataBase();

app.use("/user", userRouter, bookingRouter);
app.use("/admin", adminRouter);

app.listen(5000, () => {
    console.log("Server is Connected");
});
