const userSchema = require("./user.schema");

const userSchemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

module.exports = userSchemaRequest;
