const express = require('express');
const app = express();
var fs = require('fs');

const connection = require('./db/connection');
require('dotenv/config');
var bodyParser = require('body-parser');
var path = require('path');


connection.once('open', ()=>{
    const server = app.listen(process.env.PORT || 8080, ()=>{
    console.log("Connected and listening");
    });
});

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
  

// Set EJS as templating engine 
app.set("view engine", "ejs");

{/*
// Multer
var multer = require('multer');
  
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
}); 
  
var upload = multer({ storage: storage });
*/}

const Book = require('./models/book.js');

app.post('/api/book',(req,res)=>{
    
    var book = new Book(req.body);
    
    book.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
    


})


app.get('/api/book', (req,res)=>{

    Book.find({})
    .exec((error,result) =>{
        if(error){
            res.status(500).json(error);
        }
        else{
            res.json(result);
        }
    })
    
});


app.get("/",(req,res)=>{
    res.render("index");
});




