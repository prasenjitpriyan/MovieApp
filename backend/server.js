const express = require('express');
require("express-async-errors")
const morgan = require('morgan');
require("dotenv").config();
require('./db')
const userRouter = require("./routes/user");
const { errorHandler } = require('./middlewares/error');

const app = express();
const port = process.env.PORT || 3001

app.use(express.json());
app.use(morgan("dev"))
app.use("/api/user", userRouter);
app.use(errorHandler)

app.get('/', (req, res) => {
    res.json({ message: "All good!" })
});

app.listen(port, () => {
    console.log("The port is listening on Port 3001");
})