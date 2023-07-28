const User = require("../../models/user.models");
const bcrypt = require("bcryptjs");
const userSchemaResponse = require("../../schemas/users/userResponse.schema");
const userSchemaRequest = require("../../schemas/users/userCreate.schema");

const createUserController = async (req, res) => {
  const { name, email, password } = userSchemaRequest.parse(req.body);

  const findUser = await User.findOne({
    where: {
      email: email,
    },
  });

  if (findUser) {
    return res.status(409).json({
      message: "User already exists",
    });
  }

  const newUser = await User.create({
    name,
    email,
    password: await bcrypt.hash(password, 10),
  });

  const userReturn = userSchemaResponse.parse(newUser);

  return res.status(201).json(userReturn);
};

module.exports = createUserController;
