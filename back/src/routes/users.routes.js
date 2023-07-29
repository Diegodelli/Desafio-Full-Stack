const { Router } = require("express");
const createUserController = require("../controllers/users/createUser.contollers");
const updateUserController = require("../controllers/users/updateUser.controller");
const retriveUserController = require("../controllers/users/retriveUser.controller");
const deleteUserController = require("../controllers/users/deleteUser.controller");
const ensureAuthMiddleware = require("../middlewares/ensureAuth.middleware");

const usersRoutes = Router();

usersRoutes.post("", createUserController);

usersRoutes.use(ensureAuthMiddleware);
usersRoutes.get("/", retriveUserController);
usersRoutes.patch("/", updateUserController);
usersRoutes.delete("/", deleteUserController);

module.exports = usersRoutes;
