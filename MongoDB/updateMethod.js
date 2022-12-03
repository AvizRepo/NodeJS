const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(url);

client.connect(function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Connected Successfully to MongoDB!");
    
    const update = {$set:{Name:"Dk Sir", Subject:"Chemistry"}};
    const collection = client.db("SchoolDB").collection("Teachers");

    collection.updateOne({Name:"Dj Sir"}, update, function(err,res){
        if (err) throw err;
        console.log(res);
        client.close();
    })

})