const db = require("../../config/config");
const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "development";
const config = db[env];

const sequelize = new Sequelize(config);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to the database successfully!");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err.message);
  });

module.exports = sequelize;
