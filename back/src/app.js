require("reflect-metadata");
const express = require("express");
const cors = require("cors");
const usersRoutes = require("./routes/users.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", usersRoutes);

module.exports = app;
