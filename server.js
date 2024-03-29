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

    //Middleware
    app.set('view engine', 'ejs')   //Set view engine to ejs
    app.use(express.static('public'))  //setting up a folder to hold main.js and style etc. External files
    app.use(express.urlencoded({extended:true})) //parses urls
    app.use(express.json())                      //parse JSON
    app.use(cors())    //cross origin requests

    //Tell server to serve up index.js. Using async function
    app.get('/', async (req,res) =>{
        try{
        res.render('index.ejs')    
        }catch(error){

        }
    })



    //PORT Creation
  app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on Port `)
  })  