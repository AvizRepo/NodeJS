const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017/';

module.exports = {
    getClient: function(dbName) {
      const client = new MongoClient(url);

      client.connect(function(err) {
        if (err) {
          console.log(err);
          return;
        }
  
        console.log('Connected to MongoDB server');
        const db = client.db(dbName);
      });
      return client;
    }
  };
  