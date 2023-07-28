const userSchema = require("./user.schema");

const userSchemaResponse = userSchema.omit({
  password: true,
});

module.exports = userSchemaResponse;
