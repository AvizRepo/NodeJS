const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(url);

client.connect(function(err){
    if(err){
        console.log(err);
    }
    console.log("Connected to MongoDB!");

    const collection = client.db("SchoolDB").collection("Teachers")
    
    collection.find({}).toArray(function(err, res){
        if(err) throw err;
        console.log(res);
    })

    collection.count(function(err, res){
        if (err) throw err;
        console.log("Number of Entries in Collection are: " + res);
        client.close();
    })

})