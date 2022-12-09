let docs
const MongoModule = require('./utilityModuleConnect');
const client = MongoModule.getClient("PhoneSale");

client.connect(function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log("Connected to MongoDB!");
    const db = client.db("PhoneSale").collection("PhoneSale");

    db.find({}).toArray(function(err, docs){
        if (err){
            console.log(err);
        }
        const express = require('express');
        const app = express();

        app.get('/mydb', function(req, res){
            res.send(JSON.stringify(docs))
        });

        app.listen(1300);
    })
})

