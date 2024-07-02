const { configDotenv } = require("dotenv");
configDotenv({
  path: "./config.env",
});
const app = require("./app.js");
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`app is running on server ${PORT}`);
});
