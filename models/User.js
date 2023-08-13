const Sequelize = require("sequelize");
const link = require("../config/db");

const User = link.define(
  "user",
  {
    username: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
  },
  {
    freezeTableName: true,
  }
);

module.exports = User;
