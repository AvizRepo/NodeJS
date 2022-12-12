const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended:false})

app.use(express.static('public'));

app.get('/index1.html', function(req, res){
    res.sendFile( __dirname + "/" + "index1.html" );
})

app.post('/dataView', urlencodedParser, function (req, res){
    response = {  
        user_name:req.body.user_name,  
        email:req.body.email  
    };

    console.log(response);  
    res.end(JSON.stringify(response));
})

app.listen(8000, ()=>{
    console.log("Listening to port 8000")
});