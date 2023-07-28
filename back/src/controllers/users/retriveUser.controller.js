const User = require("../../models/user.models");
const userSchemaResponse = require("../../schemas/users/userResponse.schema");

const retriveUserController = async (req, res) => {
  const userId = res.locals.userId;

  const findUser = await User.findOne({
    where: {
      id: userId,
    },
  });

  const userReturn = userSchemaResponse.parse(findUser);

  return res.status(200).json(userReturn);
};

module.exports = retriveUserController;
