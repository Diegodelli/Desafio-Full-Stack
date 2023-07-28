const Sequilize = require("sequelize");
const sequilize = require("../db");

const User = sequilize.define("user", {
  id: {
    type: Sequilize.UUID,
    defaultValue: Sequilize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequilize.STRING(50),
    allowNull: false,
  },
  email: {
    type: Sequilize.STRING,
    allowNull: false,
    validate: { isEmail: true },
    unique: true,
  },
  password: {
    type: Sequilize.STRING,
    allowNull: false,
  },
});

module.exports = User;
