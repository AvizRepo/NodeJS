const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/";
const db = new MongoClient(url);

async function connectToMongo() {
    try {
        const client = await MongoClient.connect(url, {useUnifiedTopology:true});
        console.log("Connected!!");
        const db = client.db("SchoolDB");
        return db;
    } catch(err){
        console.log(err.stack);
    } 
}

connectToMongo();