const userSchema = require("./user.schema");

const userSchemaUpdateRequest = userSchema
  .omit({
    id: true,
  })
  .partial();

module.exports = userSchemaUpdateRequest;
