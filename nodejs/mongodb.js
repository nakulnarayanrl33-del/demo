const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017/";

MongoClient.connect(url)
  .then(client => {
    const db = client.db("mashupdb");
    const myobj = [
      { name: 'John', city: 'Trivandrum' },
      { name: 'Rahul', city: 'Calicut' },
      { name: 'Dean', city: 'Trivandrum' },
      { name: 'Deepak', city: 'Kollam' },
      { name: 'Ashwin', city: 'Calicut' },
      { name: 'Rolly', city: 'Alleppy' },
      { name: 'Nikhil', city: 'Kottayam' },
      { name: 'Raymond', city: 'Trivandrum' },
    ];
    
    return db.collection("leads").insertMany(myobj)
      .then(res => {
        console.log("Number of documents inserted: " + res.insertedCount);
        client.close();
      });
  })
  .catch(err => {
    console.error(err);
  });