//Name:Han Lu
//Email : hlu48@myseneca.ca
//ID : 123237216 
//heroku link
//https://han216a2.herokuapp.com/

const express = require('express');
const app = express();
const path = require('path');
const port = 3000;



app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/src/home.html'));
});

app.get('/cwh',function(req,res){
  res.sendFile(path.join(__dirname, '/src/cwh.html'));
});

app.get('/registration',function(req,res){
    res.sendFile(path.join(__dirname, '/src/registration.html'));
  });

app.get('/login',function(req,res){
  res.sendFile(path.join(__dirname, '/src/login.html'));
});


app.use(express.static("src"));
app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})