const User = require("../../models/user.models");

const deleteUserController = async (req, res) => {
  const userId = res.locals.userId;

  await User.destroy({
    where: {
      id: userId,
    },
  });

  return res.status(204).send();
};

module.exports = deleteUserController;
