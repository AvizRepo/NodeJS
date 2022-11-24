var http = require('http'); //importing the built in http module
var dt = require('./ownModule'); //calling one module from another/user defined module
// dt stands for date today
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The current date and time is: " + dt.myDateTime());
    //datetime is being fetched from the outside module
    //using the content type mentioned above as text/htmluser defined module
    res.end();
}).listen(8080); //mentioning which port this application will run on the server