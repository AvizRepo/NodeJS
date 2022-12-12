var express = require('express'); 
var app = express();

app.get('/', function(req, res){
    console.log("GET");
    res.send("I am GET");
}) 

app.get('/student', function(req, res){
    console.log('GET the students from /students');
    res.send('I am student');
}) 

app.get('/ab*cd', function(req, res){
    console.log('GET for query string');
    res.send('Pattern matching');
}) 

app.post('/', function(req, res){
    console.log("POST");
    res.send("I am POST");
})

app.delete('/manager', function(req, res){
    //Logic to delete
    console.log("I am DELETE");
    res.send("I am deleted")
})

var request = require('request');

request.get('http://bengaluru', options, function(err, res, body){
    if(err) console.log("ERROR");

    if(res.statusCode==200){
        console.log("Success");
    }
    if(res.statusCode==101){
        console.log("Informational message");
    } 
    if(res.statusCode==301){
        console.log("Redirection message");
    }
    if(res.statusCode==400){
        console.log("Bad request");
    }
})

var server = app.listen(8000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server is running at " +host+port);
})