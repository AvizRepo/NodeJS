var express = require('express');
var app = express();

app.get('/', function (req1, res1) {  
    res1.send('Welcome !');  
  });

app.get('/', function (req2, res2) {  
    res2.send('Welcome !');  
  });

var server = app.listen(8000,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log(host);
    console.log(port);
    console.log('Application is running at http://', host, port);
})