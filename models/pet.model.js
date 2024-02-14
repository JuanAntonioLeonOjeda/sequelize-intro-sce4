const { connection } = require('../database/index')
const { DataTypes } = require("sequelize")

const Pet = connection.define("pet", {
  name: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  cute: {
    type: DataTypes.BOOLEAN
  },
  color: {
    type: DataTypes.STRING
  }
}, 
{
  timestamps: false
});

module.exports = Pet
