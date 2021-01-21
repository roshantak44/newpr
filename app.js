const express = require('express');
var path= require("path");
const app = express();
var bodyParser = require('body-parser');
const port = 3000;

app.set('views', __dirname + '/views');
app.set("view engine","jade")
app.use(bodyParser.urlencoded({ 
    extended:true
})); 
app.use(express.static(__dirname));

//data array
const students=[ 
            {   "ID":"1", "name":"Amit",  "age":"14", "rollno": "11", "class":"10"},
            {   "ID":"2", "name": "Rahul", "age": "12", "rollno": "18", "class": "8"},
            {   "ID":"3", "name": "Aniket", "age": "15", "rollno": "16", "class": "10"},
            {   "ID":"4", "name": "Ravi",  "age": "17", "rollno": "15", "class": "11"}
];

//Get all students
app.get('/', function(req, res) {
    res.render('dashboard', { students: students});
  });

app.post('/fetchstudent', function(req, res) {
    var userinput = Number(req.body.id);
    console.log(userinput);
    var isMatch = false;
    
    students.forEach(function(user) {
    if (user.ID === req.body.id) {
      var stud=[];
      stud.push(user);
    console.log("success");
    res.render('databyid', { students: stud});
    isMatch = true;
    }
    });
    if (!isMatch) {
    // only logs once even though there are multiple users
    console.log("No Match!");
    } 
});

app.listen(port, () => {
    console.log('Server is running on the port:');
});