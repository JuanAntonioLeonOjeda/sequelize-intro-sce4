const { Sequelize } = require("sequelize");
require("dotenv").config();


const connection = new Sequelize(process.env.DB_NAME, "juanan", "Puffin_88", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

async function checkDB() {
  try {
    await connection.authenticate();
    console.log("Connected to DB");
  } catch (error) {
    throw error;
  }
}

async function syncModels() {
  const User = require('../models/user.model')
  const Pet = require('../models/pet.model')
  try {
    await connection.sync()
    console.log('Models synchronized!')
  } catch (error) {
    throw error
  }
}

module.exports = {
  connection,
  checkDB,
  syncModels
}