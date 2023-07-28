const { Router } = require("express");
const createUserController = require("../controllers/users/createUser.contollers");

const usersRoutes = Router();

usersRoutes.post("", createUserController);

module.exports = usersRoutes;
