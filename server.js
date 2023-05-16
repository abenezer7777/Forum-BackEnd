// require("dotenv").config();
// const pool = require("./server/config/database");
// const express = require("express");
// const cors = require("cors");
// const app = express();
// const port = process.env.PORT;
// // const mysql = require("mysql");

// // const port = 3000;
// const userRouter = require("./server/api/users/user.router");

// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use("/api/users", userRouter);
// // const pool = mysql.createPool({
// //   host: process.env.DB_HOST,
// //   user: process.env.DB_USER,
// //   password: process.env.DB_PASS,
// //   database: process.env.MYSQL_DB,
// //   connectionLimit: 10,
// // });
// // pool.getConnection(function (err, connection) {
// //   console.log("database connected");
// // });

// app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
const userRouter = require("./server/api/users/user.router");
const questionRouter = require("./server/api/questions/question.router");
const answerRouter = require("./server/api/answers/answer.router");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/questions", questionRouter);
app.use("/api/answer", answerRouter);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
