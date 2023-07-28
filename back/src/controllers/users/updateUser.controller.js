const User = require("../../models/user.models");
const userSchemaResponse = require("../../schemas/users/userResponse.schema");
const userSchemaUpdateRequest = require("../../schemas/users/userUpdate.schema");
const bcrypt = require("bcryptjs");

const updateUserController = async (req, res) => {
  const userData = userSchemaUpdateRequest.parse(req.body);

  const userId = res.locals.userId;

  if (!userData.password) {
    await User.update(
      { ...userData },
      {
        where: {
          id: userId,
        },
      }
    );
  }

  await User.update(
    { ...userData, password: bcrypt.hashSync(userData.password, 10) },
    {
      where: {
        id: userId,
      },
    }
  );

  const user = await User.findOne({
    where: {
      id: userId,
    },
  });

  const userReturn = userSchemaResponse.parse(user);

  return res.status(200).json(userReturn);
};

module.exports = updateUserController;
