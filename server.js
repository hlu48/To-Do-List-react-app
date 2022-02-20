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
app.post("/registration_submit", function(req,res){
  let resObj ={
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email:req.body.email,
    password: req.body.password,
    formSubmitted: req.body.submit,
    address:req.body.address,
    city:req.body.city,
    province:req.body.province,
    zip:req.body.zip,
    msg: ""
  }
  const emailvalid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
  const passvalid = /^(?=.*[0-9])(?=.*[!.@#$%^&*])[a-zA-Z0-9!.@#$%^&*]{6,12}$/;
  const postalvalid= /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
  if (resObj.firstname === "" || resObj.lastname === "" || resObj.email ==="" || resObj.password ==="" 
  ||resObj.address ==="" || resObj.city ==="" ||resObj.zip ==="" ||resObj.province ==="Choose...") {
    resObj.msg= " Field cannot be empty!";
    res.render("registration",{resObj:resObj,layout:false});
  }else if(!isNaN(resObj.city)){  
    resObj.msg= " City cannot contain number";
    res.render("registration",{resObj:resObj,layout:false});
  }else if (!passvalid.test(resObj.password)){
    resObj.msg=" Password must contain upper case, lower case letter, number, special character and between 6-12 characters in length!"
    res.render("registration",{resObj:resObj,layout:false});
  }else if(!emailvalid.test(resObj.email)){
    resObj.msg=" Incorrect email form!!";
    res.render("registration",{resObj:resObj,layout:false});
  }else if(!postalvalid.test(resObj.zip)){
    resObj.msg=" Invalid postal code"
    res.render("registration",{resObj:resObj,layout:false});
  }else{
    res.render("dashboard",{resObj:resObj,layout:false});
  }
});

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