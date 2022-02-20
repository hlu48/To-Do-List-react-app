//Name:Han Lu
//Email : hlu48@myseneca.ca
//ID : 123237216 
//heroku link
//https://han216a2.herokuapp.com/

const express = require('express');
const app = express();


const path = require('path');
app.use(express.static(path.join(__dirname, "./src")));
const port = 3000;
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
app.engine('.hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.use(bodyParser.urlencoded({ extended: false }));



app.get("/",function(req,res){
  res.render("home",{msg:"",layout:false});
});
app.get("/dashboard",function(req,res){
  res.render("dashboard",{msg:"",layout:false})
})
app.get("/cwh", (req, res) => {
  res.render("cwh",{msg:"",layout:false});
});
app.get("/login", (req, res) => {
  res.render("login",{msg:"",layout:false});
});


//validate login form
app.post("/login_submit",function(req,res){
  
  let resObj ={
    username: req.body.username,
    password: req.body.password,
    formSubmitted: req.body.submit,
    msg: ""
  }

  if (resObj.password === "" || resObj.username === "") {
    resObj.msg= " Username or password cannot be empty!";
    res.render("login",{resObj:resObj,layout:false});
  }else if 
  ( /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(resObj.username)) {
    resObj.msg=" Username cannot contain any special characters!"
    res.render("login",{resObj:resObj,layout:false});
  }else{
    res.render("dashboard",{resObj:resObj,layout:false});
  }
  
});


app.get("/registration", (req, res) => {
  res.render("registration",{msg:"",layout:false});
});
//validate registration form
// app.post("/registration_submit", function(req,res){
//   let resObj ={
//     firstname: req.body.fistname,
//     lastname: req.body.lastname,
//     email:req.body.email,
//     password: req.body.password,
//     formSubmitted: req.body.submit,
//     msg: ""
//   }

//   if (resObj.firstname === "" || resObj.lastname === "" || resObj.email ==="" || resObj.password ==="") {
//     resObj.msg= " Field cannot be empty!";
//   }else if ( /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(resObj.firstname)) {
//     resObj.msg=" Your first name cannot contain any special characters!"
//   }else{
//     res.render("dashboard",{resObj:resObj,layout:false})
//   }
//   res.render("login",{resObj:resObj,layout:false});
// });

app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

// This use() will add an error handler function to
// catch all errors.
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});


app.use(express.static("src"));
app.listen(process.env.PORT || port, () => {
  console.log(`listening at http://localhost:${port}`)
})