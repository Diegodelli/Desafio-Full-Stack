require("reflect-metadata");
const express = require("express");
const cors = require("cors");
const usersRoutes = require("./routes/users.routes");
const loginRouter = require("./routes/login.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", usersRoutes);
app.use("/login", loginRouter);

module.exports = app;
