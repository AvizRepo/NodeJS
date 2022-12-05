const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(url);

client.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    const db = client.db("SchoolDB");

    client.close();
})