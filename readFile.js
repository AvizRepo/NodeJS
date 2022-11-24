const fs = require('fs'); //loading built in module

fs.readFile('./myText.txt', 'utf8', (err, data) => {
    if (err) {  //Checking if there is any error while reading the file
        console.error(err);  //Throwing to console if there is any
        return;
    }
    console.log(data);  //Printing data on the console
});