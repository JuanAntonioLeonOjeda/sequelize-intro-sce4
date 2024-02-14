const { connection } = require('../database/index')
const { DataTypes } = require("sequelize")

const User = connection.define("user", {
  name: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  email: {
    type: DataTypes.STRING
  },
  food: {
    type: DataTypes.STRING
  }
});

module.exports = User
