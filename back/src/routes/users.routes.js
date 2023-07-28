const { Router } = require("express");
const createUserController = require("../controllers/users/createUser.contollers");
const updateUserController = require("../controllers/users/updateUser.controller");
const retriveUserController = require("../controllers/users/retriveUser.controller");
const deleteUserController = require("../controllers/users/deleteUser.controller");

const usersRoutes = Router();

usersRoutes.post("", createUserController);
usersRoutes.get("/:id", retriveUserController);
usersRoutes.patch("/:id", updateUserController);
usersRoutes.delete("/:id", deleteUserController);

module.exports = usersRoutes;
