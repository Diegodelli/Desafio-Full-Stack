const User = require("../../models/user.models");
const userSchemaResponse = require("../../schemas/users/userResponse.schema");

const retriveUserController = async (req, res) => {
  const userId = req.params.id;

  const findUser = await User.findOne({
    where: {
      id: userId,
    },
  });

  if (!findUser) {
    return res.status(404).json({
      message: "User does not exist",
    });
  }

  const userReturn = userSchemaResponse.parse(findUser);

  return res.status(200).json(userReturn);
};

module.exports = retriveUserController;
