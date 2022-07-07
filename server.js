//Template file

//Require dependencies
const express = require('express')
const app = express() 
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

//Variables
let db, 
    dbConnectionString = process.env.DB_STRING, //get the string from the env file. Should be a const for best practice
    dbName = "star-wars-quotes",  
    collection 

//Connect to MongoDb
MongoClient.connect(dbConnectionString)
//promise language rather than async. Should look up async version
    .then(client => {
        console.log("Connected to Database")
        db = client.db(dbName)
        collection = db.collection('quotes')
    })     

    //PORT Creation
  app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on Port `)
  })  