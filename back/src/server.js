require("dotenv").config();
const app = require("./app");
const PORT = Number(process.env.PORT) || 3001;

(async () => {
  const User = require("./models/user.models");

  try {
    await User.sync({ alter: true });

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
