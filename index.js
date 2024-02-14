// const mysql = require('mysql2')

// const connection = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'juanan',
// 	database: 'sceDB',
// 	password: 'Puffin_88'
// })

// const query = 'SELECT * FROM pet_models'

// connection.query(query, (error, results) => {
//   if (error) throw error
//   console.log(results)
// })

const {checkDB, syncModels} = require('./database/index')
const User = require('./models/user.model')

;(async function start() {
  try {
    await checkDB()
    await syncModels()
  
    // User.create({
    //   name: 'Nuha',
    //   email: 'nuha@gmail.com',
    //   age: 20,
    //   food: 'pizza'
    // })
  
    const users = await User.findAll()
    console.log(users) 
  } catch (error) {
    console.log(error)
  }
})()

// start()
