const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(url);

client.connect(function(err){
    if(err){
        console.Console.log(err);
        return;
    }
    console.log("Connected to MongoDB!");

    const collection = client.db("SchoolDB").collection("Teachers");

    const data = {Name:"Dj Sir", Subject:"Geometry"};

    collection.insertOne(data,function(err, res){
        if(err) throw err;
        console.log("Inserted Successfull!");
        console.log(res);
        client.close();
    })
    
})