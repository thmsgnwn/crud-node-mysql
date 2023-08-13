const sequelize = require("sequelize");

const link = new sequelize("crudnode", "root", "", {
  dialect: "mysql",
});

link.sync({});

module.exports = link;
