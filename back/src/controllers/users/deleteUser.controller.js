const User = require("../../models/user.models");

const deleteUserController = async (req, res) => {
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

  await User.destroy({
    where: {
      id: userId,
    },
  });

  return res.status(204).send();
};

module.exports = deleteUserController;
