const mongodbModule = require('./connectionModule.js');
const client = mongodbModule.getClient('SchoolDB');

client.connect(function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Connected to MongoDB server');
  
  const db = client.db('SchoolDB');
  const collection = db.collection('Teachers');

  collection.find({}).toArray(function(err, docs) {
    if (err) {
      console.log(err);
      return;
    }

    console.log(docs);
    client.close();
  })
})
